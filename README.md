# 🛡️ Vulnerability Scanner — Network & Web Security Assessment Suite

> **An automated security reconnaissance and vulnerability assessment tool designed to detect open network ports, fingerprint server software versions, and evaluate HTTP security header compliance.**

![Python](https://img.shields.io/badge/Backend-Python%20%2F%20Flask-blue?logo=python)
![Security](https://img.shields.io/badge/Domain-Cybersecurity%20%26%20PenTesting-red)
![Frontend](https://img.shields.io/badge/Frontend-HTML5%20%2F%20CSS3%20%2F%20JS-yellow)
![License](https://img.shields.io/badge/License-MIT-green)
![Live](https://img.shields.io/badge/Deployment-GitHub%20Pages-brightgreen)

---

## 🌐 Live Web Scanner
🚀 **[Launch Online Scanner (GitHub Pages)](https://pradeep5250.github.io/VulnerScanner/)**

---

## ✨ Features

- 🔍 **Port Discovery & Service Probing:**
  - Fast multi-port socket reconnaissance scanning key administrative, web, database, and remote access services:
    - 21 (FTP), 22 (SSH), 23 (Telnet), 25 (SMTP), 53 (DNS), 80 (HTTP), 110 (POP3), 143 (IMAP), 443 (HTTPS), 3306 (MySQL), 3389 (RDP), 5432 (PostgreSQL), 8080 (HTTP-Proxy).

- 📋 **Server Software & Version Fingerprinting:**
  - Extracts HTTP server banner disclosures and framework versions to match against known CVE databases.

- 🛡️ **HTTP Security Headers Audit:**
  - Evaluates defense-in-depth posture against OWASP recommendations:
    - Content-Security-Policy (CSP)
    - Strict-Transport-Security (HSTS)
    - X-Frame-Options (Clickjacking defense)
    - X-Content-Type-Options (MIME sniffing defense)
    - Referrer-Policy & Permissions-Policy

- ⚡ **Optimized Asynchronous Execution:**
  - Non-blocking socket timeouts ensuring fast scanning cycles without client freezes.

---

## 🛠️ Technology Stack

| Layer | Component | Description |
| :--- | :--- | :--- |
| **Backend API** | Python 3, Flask, Flask-CORS | REST API handling socket connections and header requests |
| **Network Core** | socket, equests | Native raw socket scanning and HTTP header validation |
| **Frontend UI** | HTML5, Modern CSS3, JavaScript ES6 | Real-time interactive dashboard with status badges |
| **Hosting** | GitHub Pages (docs/) | Static frontend zero-cost hosting |

---

## 🚀 Quickstart & Local Setup

### Option 1: Use Live Hosted Scanner
Access instantly without installation: **[pradeep5250.github.io/VulnerScanner](https://pradeep5250.github.io/VulnerScanner/)**

### Option 2: Run Full-Stack Locally

1. **Clone the repository:**
   `ash
   git clone https://github.com/pradeep5250/VulnerScanner.git
   cd VulnerScanner
   `

2. **Start the Flask Backend Scanner:**
   `ash
   cd "Vulnerability Scanner/backend"
   pip install -r requirements.txt
   python app.py
   `
   *Backend starts at http://localhost:5000.*

3. **Launch the Frontend Client:**
   `ash
   cd "../frontend"
   python -m http.server 8000
   `
   *Open http://localhost:8000 in your browser.*

---

## 📂 Project Architecture

`
VulnerScanner/
├── Vulnerability Scanner/
│   ├── backend/
│   │   ├── app.py              # Flask scanner REST API
│   │   └── requirements.txt    # Python runtime dependencies
│   └── frontend/
│       ├── index.html          # Interactive scanner dashboard
│       ├── style.css           # Modern cyber-themed styles
│       └── script.js           # Client WebSocket / REST caller
├── docs/                       # GitHub Pages live build
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md                   # System documentation
`

---

## ⚖️ Legal & Ethical Disclaimer

*This tool is intended strictly for authorized educational research, security auditing, and penetration testing on systems you own or have explicit written permission to test. Unauthorized port scanning can violate terms of service and computer crime laws.*

---

## 👤 Author

Developed by **[Pradeep S](https://github.com/pradeep5250)**