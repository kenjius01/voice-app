
from flask import Flask,request,jsonify
from flask_cors import CORS,cross_origin
import os
import sys
from model_files.ml_model import predict_music
import pickle
from tensorflow import keras

app=Flask("music_prediction")

# CORS:for making a succesful response to the request 

cors = CORS(app)
# app.config['CORS_HEADERS'] = 'application/json'

@app.route('/',methods=['GET'])
@cross_origin(origin='*')
def welcome():
	return "Welcome to our page"


@app.route('/predict',methods=['POST'])
@cross_origin(origin='*')
def predict():
	# get the data from the post request
	audio_file=request.files['myfile']
	# audio_file.save('C:/Users/Dell/Desktop/Flask_App/model_files/audio.mp3')

	# load the  model from file that is present in model_files
	model = keras.models.load_model('./model_files/model.h5', compile=False)
	

	# predict the genre using predict_music function
	prediction=predict_music(model,audio_file)
	# os.remove('C:/Users/Dell/Desktop/Flask_App/model_files/audio.mp3')

	# create a response object and jsonify it
	response={
		'music_prediction':prediction
	}

	return jsonify(response)

if __name__== '__main__':
	app.run(debug='True')