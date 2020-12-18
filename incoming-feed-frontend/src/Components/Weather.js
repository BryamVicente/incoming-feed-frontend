import ReactWeather, { useOpenWeather } from 'react-open-weather';


const Weather = () => {

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: process.env.REACT_APP_WEATHER_API_KEY,
    lat: '48.137154',
    lon: '11.576124',
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
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};

export default Weather;