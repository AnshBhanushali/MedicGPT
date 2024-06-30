import os
from flask import Flask, render_template, request
import openai
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

openai.api_key = os.getenv('API_KEY')

