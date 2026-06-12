# House Price Predictor 🏡

* **Project Title:** End-to-End USA Housing Valuation Interface
* **Brief One Line Summary:** A regression-based web application that predicts real estate values using key structural metrics from the USA Housing dataset.

---

## 📌 Overview
This project operationalizes a machine learning model by connecting a predictive backend engine to a clean, user-friendly frontend interface. It takes key metrics like average regional income, house age, and room quantities to instantly serve a valuation estimate over a web interface.

## ⚠️ Problem Statement
Raw machine learning models are typically trapped inside static Jupyter Notebooks (`.ipynb`), making them inaccessible to non-technical users. This system bridges that gap by deploying a trained regression model onto a live local server, allowing everyday consumers to interact with the AI via a standard web browser.

## 📊 Dataset
The model leverages the **USA Housing Dataset** (originally sourced from Kaggle), containing explicit pricing parameters across diverse regional demographics. The training pipeline reads this raw matrix directly from a local `USA_Housing.csv` source file.

## 🛠️ Tools and Technologies
* **Backend Engine:** Python, Flask, Flask-CORS, Joblib
* **Data & Machine Learning:** Scikit-Learn, Pandas
* **Frontend UI:** HTML5, CSS3, Vanilla JavaScript (Async Fetch API)

## 🧪 Methods
1. **Data Preprocessing:** Handled missing values and feature normalization using Scikit-Learn's `StandardScaler`.
2. **Feature Matrices:** Configured the input layer using four core predictors: Average Area Income, House Age, Number of Rooms, and Area Population.
3. **Model Training:** Built and optimized an ordinary least squares `LinearRegression` engine using an 80/20 train-test structural split.
4. **Serialization:** Saved production-ready artifacts (`linear_house_model.pkl` and `scaler.pkl`) inside an auto-generated `/model` directory.

## 💡 Key Insights
Including the `Area Population` metric in the primary training matrix was critical to correcting mathematical variance skew. By training the regression parameters against regional density balances, the model prevents skewed outliers and achieves realistic pricing valuations during live inference.

## 🖥️ Dashboard/Model/Output
The serialized weights are hosted via a Flask JSON POST route. The application provides an interactive web dashboard where users input regional statistics and get immediate, dynamic price estimates returned directly to the screen without page reloads.

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