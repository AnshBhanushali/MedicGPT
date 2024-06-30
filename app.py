import os
from flask import Flask, render_template, request
import openai
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

openai.api_key = os.getenv('API_KEY')


@app.route("/", methods=["GET", "POST"])
def chatbot():
    if request.method == "POST":
        user_input = request.form.get("user_input")
        chat_history = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful medical chatbot."},
                {"role": "user", "content": user_input}
            ]    
        )

        chat_response = chat_history["choices"][0]["message"]["content"]
        return render_template("index.html", user_input=user_input, chat_response=chat_response)
    
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
