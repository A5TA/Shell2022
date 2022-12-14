from flask import Flask, redirect, url_for, request
from backend.predict import whatDoIHave
import pickle
from flask_cors import CORS, cross_origin

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})

rf_model = None


@app.route('/', methods=['POST', 'GET'])
def getDisease():
    symptoms = request.args['symptoms'].split(',')
    filename = "./model/rf_model.pkl"
    rf_model = pickle.load(open(filename, 'rb'))
    return whatDoIHave(symptoms, rf_model)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port="8888", threaded=True)
