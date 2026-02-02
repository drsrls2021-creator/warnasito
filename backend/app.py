import os
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)

# Abilitiamo CORS per permettere al frontend di comunicare con il backend
CORS(app)

@app.route('/')
def home():
    return jsonify({"status": "online", "message": "Warna Backend API"})

@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        data = request.json
        # Qui potresti loggare i dati o inviare una mail in futuro
        print(f"Messaggio ricevuto da {data.get('name')}: {data.get('message')}")
        
        return jsonify({
            "success": True, 
            "message": "Grazie! Abbiamo ricevuto il tuo messaggio."
        }), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == '__main__':
    # Usiamo la porta 5000 come standard per Flask
    app.run(debug=True, port=5000)