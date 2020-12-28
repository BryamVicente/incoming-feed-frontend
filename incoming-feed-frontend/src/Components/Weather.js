import ReactWeather, { useOpenWeather } from 'react-open-weather';


const Weather = () => {

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: process.env.REACT_APP_WEATHER_API_KEY,
    lat: '40.7128',
    lon: '74.0060',
    lang: 'en',
    unit: 'metric', 
  });
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="New York"
      unitsLabels={{ temperature: 'F', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};

export default Weather;