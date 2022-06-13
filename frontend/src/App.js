import React, { useEffect, useRef, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from './components/home/Home';

import wordToNumbers from 'word-to-numbers';
import constants from './constants';
import Movies from './pages/movies/Movies';
import News from './pages/news/News';
import Weather from './pages/weather/Weather';
import Music from './pages/music/Music';

//import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom'

const alanKey =
  '431ef72d5586821a72d702e857ce70972e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {
  const navigate = useRef(useNavigate());
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticles, setActiveArticles] = useState(0);
  const [movies, setMovies] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [activeMovies, setActiveMovies] = useState(0);
  const [videos, setVideos] = useState([]);
  const [videoKey, setVideoKey] = useState('');
  const [isOpen, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);

  async function fetchWeather(place) {
    let PLACE_URL = `${constants.BASE_URL}${constants.GET_PLACE_DATA_ENDPOINT}${place}`;
    const placeResponse = await fetch(PLACE_URL);
    const placeData = await placeResponse.json();
    if (placeData.length) {
      let weatherURL = `${constants.BASE_URL}${placeData[0].woeid}/`;
      const weatherResponse = await fetch(weatherURL);
      const _weatherData = await weatherResponse.json();
      setWeatherData(_weatherData);
    }
  }

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({
        command,
        results,
        number,
        video,
        articles,
        newsNum,
        data,
      }) => {
        if (command === 'movies') {
          navigate.current('/movies');
          // setTab('movies');
        } else if (command === 'home') {
          navigate.current('/');
          // setTab('home');
        } else if (command === 'showMovie') {
          setMovies(results);
          setActiveMovies(0);
        } else if (command === 'highlightMovies') {
          setActiveMovies((pre) => pre + 1);
        } else if (command === 'openMovies') {
          const num =
            number.length > 2 ? wordToNumbers(number, { fuzzy: true }) : number;
          const movie = results[num - 1];
          if (num > 20) {
            alanBtn().playText('Please try that again.');
          } else {
            window.open(
              'https://www.themoviedb.org/movie/' + movie.id,
              '_blank'
            );
            alanBtn().playText(`Opening the movie number ${num}....`);
          }
        } else if (command === 'play') {
          fetch(
            'https://api.themoviedb.org/3/movie/' +
              video.id +
              '/videos?api_key=c805fa1cad05662c12f0c25c8214f775&language=en-US'
          )
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              if (data.results.length <= 0) {
                alanBtn().playText(
                  'Sorry no trailer available for ' + video.original_title
                );
              } else {
                setVideos(data);
                setOpen(true);
                setPlaying(true);
                alanBtn().playText(
                  'Playing trailer for ' + video.original_title
                );
              }
            })
            .catch((err) => console.log(err));
        }
        // News
        else if (command === 'news') {
          navigate.current('/news');
        } else if (command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticles(0);
        } else if (command === 'highlight') {
          setActiveArticles((pre) => pre + 1);
        } else if (command === 'open') {
          const parseNum =
            newsNum.length > 2
              ? wordToNumbers(newsNum, { fuzzy: true })
              : newsNum;
          const article = articles[parseNum - 1];
          if (parseNum > 20) {
            alanBtn().playText('Please try that again.');
          } else {
            window.open(article.url, '_blank');
            alanBtn().playText(`Opening article number ${parseNum}....`);
          }
        }
        // Weather
        else if (command === 'weather') {
          navigate.current('/weather');
        } else if (command === 'showWeather') {
          fetchWeather(data);
        }
      },
    });
  }, []);

  useEffect(() => {
    if (videos && videos.results) {
      console.log(videos.results[0]);
      setVideoKey(videos.results[0].key);
    }
  }, [videos, videos.results]);

  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/movies'
          element={
            <Movies
              isOpen={isOpen}
              setOpen={setOpen}
              videos={videos}
              videoKey={videoKey}
              setPlaying={setPlaying}
              playing={playing}
              movies={movies}
              activeMovies={activeMovies}
            />
          }
        />
        <Route
          path='/news'
          element={
            <News articles={newsArticles} activeArticles={activeArticles} />
          }
        />
        <Route
          path='/weather'
          element={<Weather weatherData={weatherData} />}
        />
        <Route path='/music-classification' element={<Music />} />
      </Routes>
    </div>
  );
}

export default App;
