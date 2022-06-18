# import the libraries

import os
from flask import Flask, jsonify
import json
import sys
import librosa
import math
import numpy as np
import keras
from keras.models import Sequential
from keras.layers import Dense


# audio_file='C:/Users/Dell/Desktop/Flask_App/model_files/audio.mp3'

# Some Important constants

SAMPLE_RATE = 22050
TRACK_DURATION = 30 # measured in seconds
SAMPLES_PER_TRACK = SAMPLE_RATE * TRACK_DURATION


def predict_music(model, file_path):
    """Predict a single sample using the trained model
    :param model: Trained classifier
    :param X: Input data
    :param y (int): Target
    """
    data = []
  
    num_segments = 10
    hop_length = 512
    samples_per_segment = int(SAMPLES_PER_TRACK / num_segments)
    num_mfcc_vectors_per_segment = math.ceil(samples_per_segment / hop_length)
    
    signal, sample_rate = librosa.load(file_path, sr=SAMPLE_RATE)
    for d in range(num_segments):

        # calculate start and finish sample for current segment
        start = samples_per_segment * d
        finish = start + samples_per_segment

        # extract mfcc
        mfcc = librosa.feature.mfcc(signal[start:finish], sample_rate, n_mfcc=13, n_fft=2048, hop_length=hop_length)
        mfcc = mfcc.T

        # store only mfcc feature with expected number of vectors
        if len(mfcc) == num_mfcc_vectors_per_segment:
            data.append(mfcc.tolist())
    
    # add a dimension to input data for sample - model.predict() expects a 4d array in this case
    X = np.array(data)
    X = X[...,np.newaxis]  # array shape (1, 130, 13, 1)
#     X = X[np.newaxis, ...]

    # perform prediction
    prediction = model.predict(X)

    # get index with max value
    predicted_index = np.argmax(prediction, axis=1)
    # Reshape to array 10 element
    predicted_index = predicted_index.reshape(10)
    # initializing dict to store frequency of each element
    elements_count = {0:0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0}
    for element in predicted_index:
        if element in elements_count:
            # incerementing the count by 1
            elements_count[element] += 1
    return elements_count

