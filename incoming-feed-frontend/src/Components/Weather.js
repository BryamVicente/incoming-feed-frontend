import ReactWeather, { useOpenWeather } from 'react-open-weather';

// I got this from the npm documention! 
const Weather = () => {

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: process.env.REACT_APP_WEATHER_API_KEY,
    lat: '40.714',
    lon: '-74.0060',
    lang: 'en',
    unit: 'imperial', 
  });

  const customStyles = {
    fontFamily:  'Helvetica, sans-serif',
    gradientStart:  '#0181C2',
    gradientMid:  '#04A7F9',
    gradientEnd:  '#4BC4F7',
    locationFontColor:  '#FFF',
    todayTempFontColor:  '#FFF',
    todayDateFontColor:  '#B5DEF4',
    todayRangeFontColor:  '#B5DEF4',
    todayDescFontColor:  'rgb(4, 167, 249)',
    todayInfoFontColor:  '#B5DEF4',
    todayIconColor:  '#FFF',
    forecastBackgroundColor:  '#FFF',
    forecastSeparatorColor:  '#DDD',
    forecastDateColor:  '#777',
    forecastDescColor:  '#777',
    forecastRangeColor:  '#777',
    forecastIconColor:  '#4BC4F7',
  };

  return (
    <ReactWeather
      theme={customStyles}
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="New York"
      unitsLabels={{ temperature: 'F', windSpeed: 'miles/h' }}
      showForecast
    />
  );
};

export default Weather;