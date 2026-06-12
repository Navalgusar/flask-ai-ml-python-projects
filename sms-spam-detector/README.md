# SMS Spam Detector ✉️📱

* **Project Title:** Intelligent Text Filtering Engine
* **Brief One Line Summary:** A natural language processing web tool that classifies SMS messages into 'Spam' or 'Ham' using instance-based learning.

---

## 📌 Overview
An intelligent, security-focused web application where users can paste raw text messages and dynamically verify their safety. The app leverages text vectorization techniques paired with a classification algorithm to filter spam in real time.

## ⚠️ Problem Statement
Mobile phishing, marketing spam, and fraudulent texts pose continuous communication security and privacy vulnerabilities. Building automated local filters provides an essential layer of front-line digital defense before users interact with malicious links.

## 📊 Dataset
The system utilizes the SMS Spam Collection dataset, containing thousands of raw SMS message strings explicitly labeled with corresponding classification tokens (`spam` or `ham`).

## 🛠️ Tools and Technologies
* **Backend Engine:** Python, Flask, Flask-CORS, Joblib
* **NLP & Machine Learning:** Scikit-Learn, NLTK (Natural Language Toolkit)
* **Frontend UI:** HTML5, CSS3, JavaScript

## 🧪 Methods
1. **Text Preprocessing:** Tokenization, lowercase conversion, stopword removal, and word stemming to isolate root keywords.
2. **Feature Extraction:** Text strings are converted into a structured matrix using `CountVectorizer` or `TfidfVectorizer`.
3. **Classification:** Trained utilizing the K-Nearest Neighbors (KNN) clustering distance threshold to accurately isolate outliers.

## 💡 Key Insights
Rigorous text preprocessing and stopword removal significantly reduce the overall dimensionality of the feature matrix. This optimization allows the distance-heavy KNN algorithm to calculate neighbor clusters rapidly during live runtime API requests.

## 🖥️ Dashboard/Model/Output
The system outputs a clean web dashboard featuring an interactive text submission field. Upon clicking check, the frontend renders immediate, dynamic color-coded classification feedback (e.g., Red alerts for **Spam**, Green accents for **Legitimate/Ham**) alongside the real-time model confidence score calculated via `predict_proba`.

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
python train_model.py
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