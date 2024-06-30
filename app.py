import os
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from openai import OpenAI
from dotenv import load_dotenv
import logging

load_dotenv()

app = Flask(__name__, static_folder='../my-react-app/build', static_url_path='/')
CORS(app)

api_key = os.getenv('API_KEY')
client = OpenAI(api_key=api_key)

@app.route("/", methods=["GET"])
def serve_react_app():
    return send_from_directory(app.static_folder, 'index.html')

@app.route("/api/chatbot", methods=["POST"])
def chatbot():
    try:
        data = request.json
        user_input = data.get("user_input")

        if not user_input:
            raise ValueError("No user input provided")

        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful medical chatbot."},
                {"role": "user", "content": user_input}
            ]
        )

        chat_response = response.choices[0].message.content
        return jsonify({"response": chat_response})

    except Exception as e:
        logging.error(f"Error: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    port = int(os.getenv('PORT', 4000))
    app.run(debug=True, port=port)
