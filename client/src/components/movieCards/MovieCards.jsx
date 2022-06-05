import './movieCards.css';
import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Chip,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Grow,
  IconButton,
  Slide,
  Tooltip,
} from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import { CardMovies } from '../card/CardMovies';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export const MovieCards = ({ movies, activeMovies }) => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [size, setSize] = React.useState('');
  const [size1, setSize1] = React.useState('');
  // console.log(movies);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  let view = '';
  if (width > 700) {
    view = 'laptop';
  } else if (width < 700 && width > 450) {
    view = 'tablet';
  } else if (width < 450) {
    view = 'mobile';
  }

  useEffect(() => {
    
  function handleResize() {
    if (view === 'mobile') {
      setSize('4rem');
      setSize1('1rem');
    } else if (view === 'tablet') {
      setSize('5rem');
      setSize1('1.5rem');
    } else if (view === 'laptop') {
      setSize('8rem');
      setSize1('2rem');
    }
  }
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [view]);
  useEffect(() => console.log('length', movies.length), [movies.length]);

  if (!movies.length) {
    return (
      <div className='main-container'>
        <div className='content'>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby='alert-dialog-slide-title'
            aria-describedby='alert-dialog-slide-description'
          >
            <DialogTitle
              id='alert-dialog-slide-title'
              style={{ textAlign: 'center', fontWeight: '700' }}
            >
              COMMANDS
            </DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-slide-description'>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  <Chip
                    size='medium'
                    avatar={
                      <Avatar
                        style={{ backgroundColor: '#fff', color: '#00ab55' }}
                      >
                        W
                      </Avatar>
                    }
                    label='What are the best movies today?'
                    clickable
                    style={{
                      margin: '5px',
                      backgroundColor: '#00ab55',
                      color: '#fff',
                    }}
                  />
                  <Chip
                    size='medium'
                    avatar={
                      <Avatar
                        style={{ backgroundColor: '#fff', color: '#0066ff' }}
                      >
                        D
                      </Avatar>
                    }
                    label='`What are the best dramas (that were released |) this year?'
                    clickable
                    style={{
                      margin: '5px',
                      backgroundColor: '#0066ff',
                      color: '#fff',
                    }}
                  />
                  <Chip
                    size='medium'
                    avatar={
                      <Avatar
                        style={{ backgroundColor: '#fff', color: '#4d0000' }}
                      >
                        T
                      </Avatar>
                    }
                    label='What is are the best movies from {year}?'
                    clickable
                    style={{
                      margin: '5px',
                      backgroundColor: '#4d0000',
                      color: '#fff',
                    }}
                  />
                  <Chip
                    size='medium'
                    avatar={
                      <Avatar
                        style={{ backgroundColor: '#fff', color: '#7635dc' }}
                      >
                        T
                      </Avatar>
                    }
                    label='Tell me about {movie_name}'
                    clickable
                    style={{
                      margin: '5px',
                      backgroundColor: '#7635dc',
                      color: '#fff',
                    }}
                  />
                  <Chip
                    size='medium'
                    avatar={
                      <Avatar
                        style={{ backgroundColor: '#fff', color: '#1ccaff' }}
                      >
                        P
                      </Avatar>
                    }
                    label='Play trailer for {movie_name}'
                    clickable
                    style={{
                      margin: '5px',
                      backgroundColor: '#1ccaff',
                      color: '#fff',
                    }}
                  />
                  <Chip
                    size='medium'
                    avatar={
                      <Avatar
                        style={{ backgroundColor: '#fff', color: '#fda92d' }}
                      >
                        O
                      </Avatar>
                    }
                    label='Open movie number {movie_no.}'
                    clickable
                    style={{
                      margin: '5px',
                      backgroundColor: '#fda92d',
                      color: '#fff',
                    }}
                  />
                  <Chip
                    size='medium'
                    avatar={
                      <Avatar
                        style={{ backgroundColor: '#fff', color: '#FF2442' }}
                      >
                        G
                      </Avatar>
                    }
                    label='Go Back to movies page'
                    clickable
                    style={{
                      margin: '5px',
                      backgroundColor: '#FF2442',
                      color: '#fff',
                    }}
                  />
                </div>
              </DialogContentText>
            </DialogContent>
          </Dialog>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              paddingRight: '10px',
              width: '100%',
            }}
          >
            <Tooltip title='Info'>
              <IconButton aria-label='command' onClick={handleClickOpen}>
                <HelpIcon style={{ fontSize: 40, display: 'flex', marginTop: '30px', color: '#3d7aff' }} />
              </IconButton>
            </Tooltip>
          </div>

          <div>
            {size && (
              <span
                className='discover'
                style={{
                  display: 'inline-block',
                  fontWeight: '500',
                  fontSize: size,
                  letterSpacing: '3px',
                }}
              >
                Discover.
              </span>
            )}
          </div>
          {size1 && (
            <span
              style={{
                color: 'white',
                fontSize: size1,
                fontWeight: '400',
                letterSpacing: '10px',
                paddingTop: '30px',
                marginLeft: '120px'
              }}
            >
              The Best Movies
            </span>
          )}
        </div>
      </div>
    );
  }

  return (

      <Grow in>
        <Grid
          className='container'
          container
          alignItems='stretch'
          spacing={3}
        >
          {movies.map((movie, i) => (
            <Grid
              key={i}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              style={{ display: 'flex' }}
            >
              <CardMovies
                movie={movie}
                activeMovies={activeMovies}
                i={i}
              />
            </Grid>
          ))}
        </Grid>
      </Grow>
  
  );
};
