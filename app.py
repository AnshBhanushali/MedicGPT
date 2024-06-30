import os
from flask import Flask, render_template, request
from openai import OpenAI
client = OpenAI(api_key=os.getenv('API_KEY'))
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def chatbot():
    user_input = None
    chat_response = None
    if request.method == "POST":
        user_input = request.form.get("user_input")
        response = client.chat.completions.create(model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful medical chatbot."},
                {"role": "user", "content": user_input}
            ])
    
        chat_response = response.choices[0].message.content

    return render_template("index.html", user_input=user_input, chat_response=chat_response)

if __name__ == "__main__":
    port = int(os.getenv('PORT', 5000))
    app.run(debug=True, port=port)
