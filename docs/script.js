// Demo mode for GitHub Pages (no backend required)
const BACKEND_URL = 'http://127.0.0.1:5000';
const IS_GITHUB_PAGES = window.location.hostname.includes('github.io') || window.location.hostname === 'localhost' && window.location.port !== '5000';

document.getElementById('scanForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const targetInput = document.getElementById('targetInput').value.trim();
    if (!targetInput) return;

    const button = document.getElementById('scanButton');
    const buttonText = button.querySelector('.button-text');
    const loader = document.getElementById('loader');
    const resultsSection = document.getElementById('resultsSection');
    
    // UI Loading state
    button.disabled = true;
    buttonText.style.display = 'none';
    loader.style.display = 'block';
    resultsSection.style.display = 'none';

    try {
        const response = await fetch(`${BACKEND_URL}/scan`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ target: targetInput })
        });

        if (!response.ok) {
            throw new Error(`Server returned ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        renderResults(data);

    } catch (error) {
        alert('Scan failed: ' + error.message + '\nMake sure the backend is running on port 5000.\n\nTo run the backend:\n1. cd "Vulnerability Scanner/backend"\n2. pip install -r requirements.txt\n3. python app.py');
    } finally {
        // Reset UI Loading state
        button.disabled = false;
        buttonText.style.display = 'block';
        loader.style.display = 'none';
    }
});

function renderResults(data) {
    document.getElementById('resultTarget').textContent = data.target;
    document.getElementById('resultsSection').style.display = 'block';

    // Render Summary
    const summaryList = document.getElementById('summaryList');
    summaryList.innerHTML = '';
    data.summary.forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        summaryList.appendChild(li);
    });

    // Render Ports
    const portsBody = document.getElementById('portsBody');
    const noPortsMessage = document.getElementById('noPortsMessage');
    const portsTable = document.getElementById('portsTable');
    
    portsBody.innerHTML = '';
    
    if (data.open_ports && data.open_ports.length > 0) {
        portsTable.style.display = 'table';
        noPortsMessage.style.display = 'none';
        
        data.open_ports.forEach(p => {
            const tr = document.createElement('tr');
            
            const tdPort = document.createElement('td');
            const portSpan = document.createElement('span');
            portSpan.className = 'port-badge';
            portSpan.textContent = p.port;
            tdPort.appendChild(portSpan);
            
            const tdService = document.createElement('td');
            tdService.textContent = p.service;
            
            tr.appendChild(tdPort);
            tr.appendChild(tdService);
            portsBody.appendChild(tr);
        });
    } else {
        portsTable.style.display = 'none';
        noPortsMessage.style.display = 'block';
    }

    // Render Software Info
    const softwareInfo = document.getElementById('softwareInfo');
    softwareInfo.innerHTML = '';
    
    if (Object.keys(data.software_versions).length === 0) {
        softwareInfo.innerHTML = '<p class="muted-text">No software information identified.</p>';
    } else {
        for (const [key, value] of Object.entries(data.software_versions)) {
            const row = document.createElement('div');
            row.className = 'info-row';
            
            const label = document.createElement('div');
            label.className = 'info-label';
            label.textContent = key;
            
            const val = document.createElement('div');
            val.className = 'info-value';
            
            if (Array.isArray(value)) {
                val.textContent = value.join(', ');
                val.style.color = 'var(--danger)'; // Highlight missing headers
            } else {
                val.textContent = value;
            }
            
            row.appendChild(label);
            row.appendChild(val);
            softwareInfo.appendChild(row);
        }
    }
}
