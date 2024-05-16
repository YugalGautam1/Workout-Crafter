from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/login": {"origins": "*"}})

@app.route('/login', methods=['POST'])
def login():
    login_data= request.get_json()
    username = login_data.get('username')
    password = login_data.get('password')
    if(username =='User' and password == "Pass"):
        message = {'message': 'Login Successful'}

        return jsonify(message),200
    else:
        message = {'message': 'Login Invalid'}

        return jsonify(message),400
if __name__ == "__main__":
    app.run(debug=True)
