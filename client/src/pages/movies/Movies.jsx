// import alanBtn from '@alan-ai/alan-sdk-web';
import React from 'react';
import { MovieCards } from '../../components/movieCards/MovieCards';
import { Modal } from '../../components/modal/Modal';

const Movies = ({
  videos,
  setOpen,
  setPlaying,
  videoKey,
  isOpen,
  playing,
  movies,
  activeMovies,
}) => {
  return (
    <div className=''>
      {videos && (
        <Modal
          setOpen={setOpen}
          setPlaying={setPlaying}
          videoKey={videoKey}
          isOpen={isOpen}
          playing={playing}
        ></Modal>
      )}
      <MovieCards movies={movies} activeMovies={activeMovies} />
    </div>
  );
};

export default Movies;
