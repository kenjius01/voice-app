import React, { useState } from 'react';
import { Title } from '../../components/common/text/Basic';
import { UploadAudioAndPredict } from '../../components/common/upload/UploadAudioAndPredict';
import logo from '../../img/ClassifyLogo.png';
import './music.scss';

const Music = () => {
  const [active, setActive] = useState(false);

  return (
    <div className='musicContainer'>
      <Title>Classify</Title>
      <div className='disk-area-wrapper row justify-content-start'>
        <div className='classify-simple-logo col-sm-12 col-md-6'>
          <img
            src={logo}
            alt='classify-simple-logo'
            onClick={() => setActive(!active)}
          />
        </div>
        <div className='file-selection-wrapper col-sm-12 col-md-6'>
          <h2 className='typing-effect'>Click on the CD...</h2>
          {active && (
            <div className='upload-predict-wrapper'>
              <p>
                Predict a music's genre by uploading its audio file. The
                processing can take up to a minute depending on the size of the
                file.
              </p>
              <UploadAudioAndPredict setActive={setActive} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Music;
