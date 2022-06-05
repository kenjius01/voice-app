import React, { useEffect, useState } from 'react';
import './modal.css';
import ReactPlayer from 'react-player/youtube';

export const Modal = ({ setOpen, setPlaying, videoKey, isOpen, playing }) => {
  const [url, setUrl] = useState(null);
  const showHideClass = isOpen ? 'modal display-block' : 'modal display-none';

  useEffect(() => {
    if (videoKey) {
      const url = 'https://www.youtube.com/watch?v=' + videoKey;
      setUrl(url);
    }
  }, [videoKey]);

  const handleClose = () => {
    setPlaying(false);
    setOpen(false);
    setUrl(null)

  }

  return (
    <div className={showHideClass} onClick={handleClose}>
      <div className='modal-main'>
        <ReactPlayer
          url={url}
          className='react-player'
          width='100%'
          height='100%'
          controls={true}
          playing={playing}
        />
      </div>
    </div>
  );
};
