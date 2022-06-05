import React from 'react';

import constants from '../../constants';
import './weather.css';
import { FaTemperatureHigh, FaWind, FaTemperatureLow } from 'react-icons/fa';
import { WiDayFog, WiHumidity, WiSunrise } from 'react-icons/wi';
import moment from 'moment';

const Weather = ({ weatherData }) => {
  console.log('a: ', weatherData);

  return (
    <div
      className='weather-card'
      style={{
        backgroundImage: ` url('https://source.unsplash.com/1600x900/?${weatherData?.title}')`,
      }}
    >
      <div className='weather-page'>
        <span className='weather-headline'>Weather page</span>
        <span
          className='weather-des'
          style={{
            color: 'white',
            fontSize: '30px',
            fontWeight: '400',
            letterSpacing: '4px',
            marginLeft: '120px',
          }}
        >
          Show you the weather everywhere in the world
        </span>
      </div>
      {weatherData.consolidated_weather && (
        <div className='weather'>
          <h2 className='weather-city'>Weather in {weatherData?.title}</h2>
          <div className='weather-header'>
            <div className='weather-status'>
              <img
                alt='hello'
                src={`${constants.IMG_URL}${weatherData.consolidated_weather[0].weather_state_abbr}.svg`}
              />
              <span>
                {weatherData.consolidated_weather[0].weather_state_name}
              </span>
            </div>
            <span className='weather-temp'>
              {Math.round(weatherData?.consolidated_weather[0].the_temp * 10) /
                10}{' '}
              &#8451;{' '}
            </span>
          </div>
          <div className='weather-content'>
            <div className='weather-info'>
              <div className='info-item'>
                <FaTemperatureHigh className='info-icon'></FaTemperatureHigh>
                <span>
                  Today's Max:{' '}
                  {Math.round(
                    weatherData.consolidated_weather[0].max_temp * 10
                  ) / 10}{' '}
                  &#8451;{' '}
                </span>
              </div>
              <div className='info-item'>
                <FaWind className='info-icon' />
                <span>
                  {weatherData.consolidated_weather[0].wind_direction_compass}{' '}
                  {Math.round(
                    weatherData.consolidated_weather[0].wind_speed * 10
                  ) / 10}
                  <span style={{ fontSize: '12px' }}>km/h</span>
                </span>
              </div>
              <div className='info-item'>
                <WiSunrise className='info-icon' />

                <span>
                  {moment(weatherData.sun_rise).format(' ddd h:mm A')}
                </span>
              </div>
            </div>

            <div className='weather-info'>
              <div className='info-item'>
                <FaTemperatureLow className='info-icon'></FaTemperatureLow>
                <span>
                  Today's Min:{' '}
                  {Math.round(
                    weatherData.consolidated_weather[0].min_temp * 10
                  ) / 10}{' '}
                  &#8451;{' '}
                </span>
              </div>
              <div className='info-item'>
                <WiHumidity className='info-icon' />
                <span>
                  {weatherData.consolidated_weather[0].humidity}
                  <span style={{ fontSize: '12px' }}>%</span>
                </span>
              </div>
              <div className='info-item'>
                <WiDayFog className='info-icon' />
                <span>{moment(weatherData.sun_set).format(' ddd h:mm A')}</span>
              </div>
            </div>
          </div>
          <div className='weather-future'>
            <div className='future-item'>
              <div className='future-day'>
                <span>
                  {moment(weatherData.consolidated_weather[0].applicable_date)
                    .format('ddd')
                    .toLocaleUpperCase()}
                </span>
              </div>
              <div className='future-img'>
                <img
                  src={`${constants.IMG_URL}${weatherData.consolidated_weather[1].weather_state_abbr}.svg`}
                  alt='weather-img'
                />
              </div>
              <div className='future-temp'>
                <span>
                  {Math.round(weatherData.consolidated_weather[0].min_temp)} -{' '}
                  {Math.round(weatherData.consolidated_weather[0].max_temp)}
                  &#8451;
                </span>
              </div>
              <div className='future-humidity'>
                {weatherData.consolidated_weather[0].humidity}
                <span style={{ fontSize: '12px' }}>%</span>
              </div>
            </div>
            {/* item 2 */}
            <div className='future-item'>
              <div className='future-day'>
                <span>
                  {moment(weatherData.consolidated_weather[1].applicable_date)
                    .format('ddd')
                    .toLocaleUpperCase()}
                </span>
              </div>
              <div className='future-img'>
                <img
                  src={`${constants.IMG_URL}${weatherData.consolidated_weather[1].weather_state_abbr}.svg`}
                  alt='weather-img'
                />
              </div>
              <div className='future-temp'>
                <span>
                  {Math.round(weatherData.consolidated_weather[1].min_temp)} -{' '}
                  {Math.round(weatherData.consolidated_weather[1].max_temp)}
                  &#8451;
                </span>
              </div>
              <div className='future-humidity'>
                {weatherData.consolidated_weather[1].humidity}
                <span style={{ fontSize: '12px' }}>%</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className='future-item'>
              <div className='future-day'>
                <span>
                  {moment(weatherData.consolidated_weather[2].applicable_date)
                    .format('ddd')
                    .toLocaleUpperCase()}
                </span>
              </div>
              <div className='future-img'>
                <img
                  src={`${constants.IMG_URL}${weatherData.consolidated_weather[2].weather_state_abbr}.svg`}
                  alt='weather-img'
                />
              </div>
              <div className='future-temp'>
                <span>
                  {Math.round(weatherData.consolidated_weather[2].min_temp)} -{' '}
                  {Math.round(weatherData.consolidated_weather[2].max_temp)}
                  &#8451;
                </span>
              </div>
              <div className='future-humidity'>
                {weatherData.consolidated_weather[2].humidity}
                <span style={{ fontSize: '12px' }}>%</span>
              </div>
            </div>
            {/* Item 4 */}
            <div className='future-item'>
              <div className='future-day'>
                <span>
                  {moment(weatherData.consolidated_weather[3].applicable_date)
                    .format('ddd')
                    .toLocaleUpperCase()}
                </span>
              </div>
              <div className='future-img'>
                <img
                  src={`${constants.IMG_URL}${weatherData.consolidated_weather[3].weather_state_abbr}.svg`}
                  alt='weather-img'
                />
              </div>
              <div className='future-temp'>
                <span>
                  {Math.round(weatherData.consolidated_weather[3].min_temp)} -{' '}
                  {Math.round(weatherData.consolidated_weather[3].max_temp)}
                  &#8451;
                </span>
              </div>
              <div className='future-humidity'>
                {weatherData.consolidated_weather[3].humidity}
                <span style={{ fontSize: '12px' }}>%</span>
              </div>
            </div>

            {/* Item 5 */}
            <div className='future-item'>
              <div className='future-day'>
                <span>
                  {moment(weatherData.consolidated_weather[4].applicable_date)
                    .format('ddd')
                    .toLocaleUpperCase()}
                </span>
              </div>
              <div className='future-img'>
                <img
                  src={`${constants.IMG_URL}${weatherData.consolidated_weather[4].weather_state_abbr}.svg`}
                  alt='weather-img'
                />
              </div>
              <div className='future-temp'>
                <span>
                  {Math.round(weatherData.consolidated_weather[4].min_temp)} -{' '}
                  {Math.round(weatherData.consolidated_weather[4].max_temp)}
                  &#8451;
                </span>
              </div>
              <div className='future-humidity'>
                {weatherData.consolidated_weather[4].humidity}
                <span style={{ fontSize: '12px' }}>%</span>
              </div>
            </div>
            {/* Item 6 */}
            <div className='future-item'>
              <div className='future-day'>
                <span>
                  {moment(weatherData.consolidated_weather[5].applicable_date)
                    .format('ddd')
                    .toLocaleUpperCase()}
                </span>
              </div>
              <div className='future-img'>
                <img
                  src={`${constants.IMG_URL}${weatherData.consolidated_weather[5].weather_state_abbr}.svg`}
                  alt='weather-img'
                />
              </div>
              <div className='future-temp'>
                <span>
                  {Math.round(weatherData.consolidated_weather[5].min_temp)} -{' '}
                  {Math.round(weatherData.consolidated_weather[5].max_temp)}
                  &#8451;
                </span>
              </div>
              <div className='future-humidity'>
                {weatherData.consolidated_weather[5].humidity}
                <span style={{ fontSize: '12px' }}>%</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* {weatherData && <div className='weather'>Hello</div>} */}
    </div>
  );
};
export default Weather;
