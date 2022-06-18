import React, { useState } from 'react';

import { post } from 'axios';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './UploadAudioAndPredict.scss';
import { BarChart } from '../barChart/BarChart';

const PredictionResult = ({ result }) => {
  const label = [
    'Disco',
    'Metal',
    'Reggae',
    'Blues',
    'Rock',
    'Classical',
    'Jazz',
    'Hiphop',
    'Country',
    'Pop',
  ];
  const search = [
    'Disco',
    'Heavy metal',
    'Reggae',
    'Blues',
    'Rock',
    'Nhạc_cổ_điển',
    'Jazz',
    'Hiphop',
    'Nhạc_đồng_quê',
    'Pop',
  ];
  const [isShowChart, setIsShowChart] = useState(false);
  if (result.length <= 0) {
    return (
      <div className='nothing'>
        <p>
          Please upload the song first (and make sure that it should have a
          duration of at least 30sec)
        </p>
      </div>
    );
  } else {
    return isShowChart === false ? (
      <div className='predict-results input-slide-down-animation'>
        <h3 className='result-title'>
          Our Classification Music Genre Predicted:
        </h3>

        {Object.keys(result).map((key, index) =>
          result[key] > 0 ? (
            <div key={index} className='result-wrap'>
              <img
                src={`https://source.unsplash.com/70x70/?${label[key]}-music`}
                alt='img music-genre'
              />
              <p className='result-text'>
                {label[key]}:{' '}
                <strong>
                  {' '}
                  {result[key] * 10}
                  <small>%</small>
                </strong>
                🎶 🎉.
                <span style={{ marginLeft: '10px' }}>
                  What is {label[key]}? Find out{' '}
                  <a
                    style={{ color: '#4AB052', textDecoration: 'none' }}
                    href={`https://vi.wikipedia.org/wiki/${search[key]}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    here
                  </a>{' '}
                  ...
                </span>
              </p>
            </div>
          ) : null
        )}
        <button className='btn btn-dark' onClick={() => setIsShowChart(true)}>
          View chart
        </button>
      </div>
    ) : (
      <div>
        <BarChart result={result} />
        <button
          style={{ display: 'flex', marginRight: 'auto', marginLeft: 'auto' }}
          className='btn btn-dark'
          onClick={() => setIsShowChart(false)}
        >
          View Result Text
        </button>
      </div>
    );
  }
};

const ErrorMessage = (props) => (
  <div className='error-message-wrapper input-slide-down-animation'>
    <div className='info-box-wrapper'>
      <span className='symbol-input100'>
        <i className='fa fa-exclamation-triangle' aria-hidden='true'></i> Error!
        Please make sure that file should have a duration of at least 30sec and
        in right format!
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

    let url = ' http://127.0.0.1:5000/predict';
    setLoading(true);
    setErrorMessage('');
    setPredictedGenre('');
    post(url, data)
      .then((res) => {
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
    props.setIsPlay(false)
    setErrorMessage('');
  };

  const handleInputChange = (e) => {
    setPredictedGenre('')
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
            style={{ borderRadius: '10px', color: 'green' }}
            autoPlay={false}
            src={audioLink}
            onPlay={() => props.setIsPlay(true)}
            onPause={() => props.setIsPlay(false)}
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
