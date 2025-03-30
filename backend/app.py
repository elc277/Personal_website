from flask import Flask, jsonify
from flask_cors import CORS
from data.projects import projects

app = Flask(__name__)
CORS(app)

@app.route("/api/projects")
def get_projects():
    return jsonify(projects)

if __name__ == "__main__":
    app.run(debug=True)
