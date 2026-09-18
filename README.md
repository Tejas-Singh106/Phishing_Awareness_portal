# PhishGuard — Phishing Awareness Portal

A small frontend-only academic project for a Software Engineering / cybersecurity project.

## Features
- Responsive landing page
- URL checker UI
- Demo phishing-indicator heuristic
- Phishing awareness section
- Safety checklist
- Clean, simple responsive design

## Project structure
```text
phishing-awareness-portal/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Run locally
Open `index.html` directly in a browser, or use VS Code Live Server.

## Connecting the ML model
The current checker is a frontend demo. Replace the logic in `script.js` with a `fetch()` request to your Python/Flask API.

Example flow:
User → Frontend → Flask API → URL Feature Extraction → Random Forest → Prediction → Frontend

## Suggested academic stack
Frontend: HTML, CSS, JavaScript
Backend: Python + Flask
ML: Scikit-learn / Random Forest
Database: MongoDB
Dataset: PhiUSIIL Phishing URL Dataset

## Disclaimer
This is an academic prototype and does not guarantee that a URL is safe or malicious.
