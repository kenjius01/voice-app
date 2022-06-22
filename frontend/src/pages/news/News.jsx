import { Grid, Grow, Slide } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './news.css';
import { NewsCard } from '../../components/newsCard/NewsCard';
import { CommandModal } from '../../components/CommandModal';
// import { Header } from '../components/header/Header';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const News = ({ articles, activeArticles }) => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [size, setSize] = useState('');
  const [size1, setSize1] = useState('');

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };
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
    const handleResize = () => {
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
    };
    handleResize();
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [view]);

  if (!articles.length) {
    return (
      <div className='news-container'>
        <img
          src='https://codetipi.com/zeen/img/zeen-mock-1440.png'
          alt=''
          className='news-background'
        />
        <div className='content'>
          <CommandModal setOpen={setOpen} open={open} Transition={Transition} />
          <div>
            {size && (
              <span
                className='news-headline'
                style={{
                  display: 'inline-block',
                  fontWeight: '500',
                  fontSize: size,
                  letterSpacing: '3px',
                }}
              >
                Newspaper
              </span>
            )}
          </div>
          {size1 && (
            <span
              className='news-des'
              style={{
                color: 'white',
                fontSize: size1,
                fontWeight: '400',
                letterSpacing: '10px',
                paddingTop: '30px',
                marginLeft: '120px',
              }}
            >
              Time to read all news over the world
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Grow in>
        <Grid
          className='card-container'
          container
          alignItems='stretch'
          spacing={3}
        >
          {articles.map((article, i) => (
            <Grid
              key={i}
              item
              xs={12}
              sm={6}
              md={4}
              xl={3}
              style={{ display: 'flex' }}
            >
              <NewsCard
                article={article}
                activeArticles={activeArticles}
                index={i}
              />
            </Grid>
          ))}
        </Grid>
      </Grow>
    </div>
  );
};
export default News;
