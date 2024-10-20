from flask import Flask, request, jsonify
from flask_cors import CORS
import re
import nltk
from fuzzywuzzy import fuzz  # Import fuzzy matching
from fuzzywuzzy import process
from nltk.tokenize import sent_tokenize, word_tokenize
nltk.download('punkt')

app = Flask(__name__)
CORS(app)

# Load dataset from a text file and convert to lowercase
with open('about_me.txt', 'r') as f:
    DATASET = f.read().lower()

# Structured knowledge base
USER_DATA = {
    "name": "John Doe",
    "skills": "Python, JavaScript, Machine Learning, Web Development",
    "projects": "AI-powered smart home, Blockchain-based finance system",
    "experience": "5 years in software development and 2 years in AI and ML",
    "education": "Bachelor's in Computer Science from XYZ University",
    "email": "johndoe@example.com",
    "bio": "I am John Doe, a software developer specializing in AI, blockchain, and web development."
}

# Function to process the user's query with fuzzy matching
def chatbot_response(query):
    query = query.lower()  # Convert query to lowercase for easier matching
    print(f"Received query: {query}")  # Debugging: Show received query

    # Define possible question intents and link them to responses
    intent_map = {
        "what is your name": USER_DATA["name"],
        "who are you": USER_DATA["bio"],
        "introduce yourself": USER_DATA["bio"],
        "tell me about yourself": USER_DATA["bio"],
        "what do you do": USER_DATA["bio"],
        "what is your educational background": USER_DATA["education"],
        "where did you study": USER_DATA["education"],
        "what degree do you hold": USER_DATA["education"],
        "tell me about your university": USER_DATA["education"],
        "what did you study": USER_DATA["education"],
        "what is your qualification": USER_DATA["education"],
        "what is your work experience": USER_DATA["experience"],
        "tell me about your work": USER_DATA["experience"],
        "tell me about your professional experience": USER_DATA["experience"],
        "what are your skills": USER_DATA["skills"],
        "what programming languages do you know": USER_DATA["skills"],
        "what technologies do you work with": USER_DATA["skills"],
        "tell me about your projects": USER_DATA["projects"],
        "what projects have you worked on": USER_DATA["projects"],
        "tell me about your blockchain projects": USER_DATA["projects"],
        "what are your AI projects": USER_DATA["projects"],
        "what is your email": USER_DATA["email"],
        "how can i contact you": USER_DATA["email"],
    }

    # Perform fuzzy matching to find the closest question
    best_match, score = process.extractOne(query, intent_map.keys(), scorer=fuzz.token_sort_ratio)

    # If match score is above a certain threshold (e.g., 60%), return the matched response
    if score > 60:
        return intent_map[best_match]
    
    # Fallback: Search for keyword matches in the dataset
    sentences = sent_tokenize(DATASET)
    for sentence in sentences:
        if any(word in sentence for word in word_tokenize(query)):
            return sentence  # Return a matching sentence from the dataset

    # If no match, refer to feedback
    return "I don't know the answer. Please leave feedback for further questions!"

# API endpoint to handle chatbot queries
@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        query = data.get('query', '')
        response = chatbot_response(query)
        return jsonify({'answer': response})
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'answer': 'Sorry, the chatbot is under maintainance.'})

if __name__ == '__main__':
    app.run(debug=True, port=5500)
