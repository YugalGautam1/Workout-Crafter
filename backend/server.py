from flask import Flask

app = Flask(__name__)

#APi route

@app.route("/login")

def login():
    return{"login":["Login,Login2"]}

if __name__ == "__main__":
    app.run(debug=True)
