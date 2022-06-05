import React, { useState } from 'react';

import { post } from 'axios';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './UploadAudioAndPredict.scss';

const PredictionResult = ({ result }) => {
  if (result.length <= 0) {
    return (
      <div className='nothing'>
        <p>
          Please upload the song first (and make sure that it should have a
          duration of at least 60sec)
        </p>
      </div>
    );
  } else {
    return (
      <div className='predict-results input-slide-down-animation'>
        <p className='result-text'>Our Neural Network Predicted:</p>
        <p className='result-text'>
          Blues: <strong> {result[0]}%</strong>! 🎶 🎉
        </p>
        <p className='result-text'>
          Classical: <strong> {result[1]}%</strong>! 🎶 🎉
        </p>
        <p className='result-text'>
          Country: <strong> {result[2]}%</strong>! 🎶 🎉
        </p>
        <p className='result-text'>
          Disco: <strong> {result[3]}%</strong>! 🎶 🎉
        </p>
        <p className='result-text'>
          Hip-hop: <strong> {result[4]}%</strong>! 🎶 🎉
        </p>
        <p className='result-text'>
          Jazz: <strong> {result[5]}%</strong>! 🎶 🎉
        </p>
        <p className='result-text'>
          Metal: <strong> {result[6]}%</strong>! 🎶 🎉
        </p>
        <p className='result-text'>
          Pop: <strong> {result[7]}%</strong>! 🎶 🎉
        </p>
        <p className='result-text'>
          Rock: <strong> {result[8]}%</strong>! 🎶 🎉
        </p>
        {/* <h1>Music Genre Analysis</h1>
        <p>(Swipe down to see more)</p>
        <h3>Blues:{result[0]}%</h3>
        <h3>Classical:{result[1]}%</h3>
        <h3>Country:{result[2]}%</h3>
        <h3>Disco:{result[3]}%</h3>
        <h3>Hip-hop:{result[4]}%</h3>
        <h3>Jazz:{result[5]}%</h3>
        <h3>Metal:{result[6]}%</h3>
        <h3>Pop:{result[7]}%</h3>
        <h3>Reggae:{result[8]}%</h3>
        <h3>Rock:{result[9]}%</h3> */}
      </div>
    );
  }
};

const ErrorMessage = (props) => (
  <div className='error-message-wrapper input-slide-down-animation'>
    <div className='info-box-wrapper'>
      <span className='symbol-input100'>
        <i className='fa fa-exclamation-triangle' aria-hidden='true'></i> Error!
        {props.error}
      </span>
    </div>
  </div>
);

export const UploadAudioAndPredict = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [audioLink, setAudioLink] = useState(null);
  const [predictedGenre, setPredictedGenre] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const submit = () => {
    const data = new FormData();
    data.append('myfile', selectedFile);
    console.log(selectedFile);
    data.append('file_name', selectedFile.name);

    let url = 'https://music-genre-flask.herokuapp.com/uploadfile';
    setLoading(true);
    setErrorMessage('');
    setPredictedGenre('');
    post(url, data)
      .then((res) => {
        console.log(res);
        setPredictedGenre(res.data.music_prediction);
      })
      .catch((err) => {
        setErrorMessage(err.toString());
        // console.log(err);
      })
      .finally(() => setLoading(false));
  };

  const reset = () => {
    setPredictedGenre('');
    setSelectedFile(null);
    setAudioLink(null);
    setPredictedGenre('');
    props.setActive(false);
    setErrorMessage('');
  };

  const handleInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setErrorMessage('');
    const url = URL.createObjectURL(e.target.files[0]);
    setAudioLink(url);
  };

  return (
    <div className='input-slide-down-animation'>
      <div className='form-row'>
        <div className='form-group'>
          <input
            type='file'
            className='form-control'
            name='audio_file'
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className='form-row'>
        {selectedFile && (
          <AudioPlayer
            style={{ borderRadius: '10px' }}
            autoPlay={false}
            src={audioLink}
          />
        )}
      </div>

      <div className=' prediction-btn-wrapper'>
        <button
          type='submit'
          className='btn btn-dark'
          disabled={!selectedFile}
          onClick={() => submit()}
        >
          {loading ? (
            <span>
              <span
                className='spinner-border spinner-border-sm'
                role='status'
                aria-hidden='true'
              ></span>
              Loading
            </span>
          ) : (
            'Predict Genre'
          )}
        </button>
        <button className='btn btn-dark' onClick={() => reset()}>
          Reset
        </button>

        {errorMessage && <ErrorMessage error={errorMessage} />}
        {predictedGenre && <PredictionResult result={predictedGenre} />}
      </div>
    </div>
  );
};
