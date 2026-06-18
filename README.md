# Vulnerability Scanner

> Advanced security assessment tool to detect open ports, identify software versions, and analyze security headers.

## 🌐 Live Demo
**[🚀 Launch Scanner Here](https://pradeep5250.github.io/VulnerScanner/)**

---

## ✨ Features
- 🔍 **Port Discovery** - Scan common ports (FTP, SSH, HTTP, HTTPS, MySQL, etc.)
- 📋 **Version Fingerprinting** - Identify server software and frameworks
- 🛡️ **Security Headers Analysis** - Detect missing security headers
- ⚡ **Fast Scanning** - Optimized performance with quick timeout

## 📋 Quick Start

### Option 1: Use Online (No Installation)
Visit: **https://pradeep5250.github.io/VulnerScanner/**

### Option 2: Run Locally (Full Stack)

#### Step 1: Clone Repository
```bash
git clone https://github.com/pradeep5250/VulnerScanner.git
cd VulnerScanner
```

#### Step 2: Start Backend
```bash
cd "Vulnerability Scanner/backend"
pip install -r requirements.txt
python app.py
```
✅ Backend runs on: `http://localhost:5000`

#### Step 3: Start Frontend
```bash
cd "Vulnerability Scanner/frontend"
python -m http.server 8000
```
✅ Frontend runs on: `http://localhost:8000`

#### Step 4: Open in Browser
Navigate to `http://localhost:8000` and start scanning!

---

## 🛠️ Technology Stack

### Backend
- **Flask** - Python web framework
- **Flask-CORS** - Cross-Origin Resource Sharing
- **Requests** - HTTP library
- **Socket** - Network scanning

### Frontend
- **HTML5** - Markup
- **CSS3** - Modern styling with animations
- **JavaScript** - Interactive functionality
- **Google Fonts (Inter)** - Typography

## 📦 Dependencies

### Backend Requirements
```
Flask==3.0.3
Flask-Cors==4.0.0
requests==2.32.3
```

## 🎯 How It Works

1. Enter a target IP address or URL
2. Click "Start Scan"
3. Backend performs:
   - Open port scanning on common services
   - HTTP headers analysis for software identification
   - Security headers compliance check
4. Results displayed in real-time with detailed summary

## 🔒 Security Considerations

This tool is for **educational and authorized security testing only**. Always obtain proper authorization before scanning any system. Unauthorized scanning may be illegal.

## 📂 Project Structure
```
VulnerScanner/
├── Vulnerability Scanner/
│   ├── backend/
│   │   ├── app.py              # Flask API
│   │   └── requirements.txt    # Python dependencies
│   └── frontend/
│       ├── index.html          # Main UI
│       ├── style.css           # Styling
│       └── script.js           # Client logic
└── docs/                       # GitHub Pages deployment
    ├── index.html
    ├── style.css
    └── script.js
```

## 📝 Common Ports Scanned
- 21 (FTP)
- 22 (SSH)
- 23 (Telnet)
- 25 (SMTP)
- 53 (DNS)
- 80 (HTTP)
- 110 (POP3)
- 143 (IMAP)
- 443 (HTTPS)
- 3306 (MySQL)
- 3389 (RDP)
- 5432 (PostgreSQL)
- 8080 (HTTP-Proxy)

## 👤 Developer
**Pradeep** - Security Assessment Tool Developer

## 📄 License
MIT License - Free to use and modify

---

## 🚀 **[LAUNCH SCANNER NOW](https://pradeep5250.github.io/VulnerScanner/)**

---

**Repository:** https://github.com/pradeep5250/VulnerScanner
