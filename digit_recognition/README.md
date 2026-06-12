# Digit Recognition Engine 🔢✏️

* **Project Title:** Interactive Optical Digit Recognition Engine
* **Brief One Line Summary:** A computer vision web application that recognizes handwritten digits (0–9) using a Random Forest Classifier trained on the MNIST dataset.

---

## 📌 Overview
This project brings computer vision to the web. Users can draw a digit on a custom HTML5 canvas element, and the backend instantly processes the grid patterns to evaluate and predict the drawn number over a lightweight Flask API.

## ⚠️ Problem Statement
Optical Character Recognition (OCR) is a foundational challenge in machine learning. This project moves beyond simple numerical text inputs, demonstrating how to bridge raw coordinate/pixel data from a graphical user interface into a serialized matrix-ready classification model.

## 📊 Dataset
The model leverages the iconic **MNIST (Modified National Institute of Standards and Technology) dataset**, consisting of 70,000 grayscale images of handwritten digits normalized into a fixed $28 \times 28$ pixel grid format (784 total features per image).

## 🛠️ Tools and Technologies
* **Backend Engine:** Python, Flask, Flask-CORS, Joblib
* **Data & Machine Learning:** Scikit-Learn, OpenML (`mnist_784`), NumPy, Pandas
* **Frontend UI:** HTML5 Canvas API, CSS3, Vanilla JavaScript (Image downsampling + Async Fetch)

## 🧪 Methods
1. **Data Gathering:** Fetched dynamically via `fetch_openml('mnist_784', version=1)`.
2. **Feature Scaling:** Applied `MinMaxScaler` to normalize the grayscale pixel intensity boundaries tightly between `0` and `1`.
3. **Model Architecture:** Implemented a `RandomForestClassifier` with 100 decision tree estimators using an 80/20 train-test structural split.
4. **Serialization:** Saved the production-ready classification weights via `joblib.dump()`.

## 💡 Key Insights
While Convolutional Neural Networks (CNNs) are the golden standard for complex computer vision, a finely tuned random forest ensemble can achieve incredible accuracy on simple $28 \times 28$ standardized binary images. This keeps the backend extremely fast and lightweight without demanding massive hardware or GPU resources to run the live server.

## 🖥️ Dashboard/Model/Output
The frontend features a live interactive pixel-drawing pad. When the user draws a digit, the JavaScript logic reads the canvas pixels, downsamples them to a $28 \times 28$ matrix, and forwards the array to `server.py`, which returns the predicted digit along with the system's confidence scores.

## 🚀 How to Run this project?

### Step 1: Run Backend Server

Navigate to the backend directory and start the Flask application.

1. Open your terminal and navigate to the backend directory:
```bash
cd backend
```

2. Install all the required Python libraries using the dependencies file:
```bash
pip install -r requirements.txt
```

3. Train your model before starting your server:
```bash
python digit_model.py
```

4. Start your local Flask development server:
```bash
python server.py
```

The backend will now be running actively at [http://127.0.0.1:5000](http://127.0.0.1:5000).

### Step 2: Launch Frontend Interface

Open the user interface safely using a local preview server.

1. Launch the Frontend.
2. Navigate into the frontend/ folder using your file explorer or VS Code.
3. Right-click on index.html and select "Open with Live Preview" (or use the Live Server extension) to launch the user interface in your browser safely without cross-origin blocks.