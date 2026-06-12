from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import os
import numpy as np

app = Flask(__name__)
CORS(app)

# 1. Properly locate and load the trained model
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "model", "digit_model.pkl")

if os.path.exists(MODEL_PATH):
    model = joblib.load(MODEL_PATH)
    print("✅ Digit Recognition Model loaded successfully!")
else:
    model = None
    print("⚠️ Warning: digit_model.pkl missing. Run your training script first.")


@app.route("/predict", methods=["POST"])
def predict():
    if not model:
        return jsonify({"error": "Model file is not ready on the server"}), 500

    try:
        data = request.json
        
        # Ensure 'pixels' exists in the incoming JSON payload
        if not data or "pixels" not in data:
            return jsonify({"error": "Missing 'pixels' in request body"}), 400

        # 2. Convert incoming list to a numpy array and reshape to 2D (1, 784)
        pixels = np.array(data["pixels"]).reshape(1, -1)
        
        # 3. Normalize the pixel data (0 to 1) to match your MinMaxScaler logic
        pixels = pixels / 255.0

        # 4. Use the loaded 'model' variable instead of the string path
        prediction = model.predict(pixels)

        return jsonify({
            "prediction": int(prediction[0])
        })
        
    except Exception as e:
        return jsonify({"error": f"Internal processing error: {str(e)}"}), 400

if __name__ == "__main__":
    # Standardizing the port to 5000 like your other projects
    app.run(port=5000, debug=True)