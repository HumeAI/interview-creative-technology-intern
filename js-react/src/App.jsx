import data from '../../__shared/forecast.json';
import sunnyIcon from '../../__shared/sunny.svg';
import cloudyIcon from '../../__shared/cloudy.svg';
import rainingIcon from '../../__shared/raining.svg';

const icons = {
  Sunny: sunnyIcon,
  Cloudy: cloudyIcon,
  Raining: rainingIcon
}

// for prototype, we fix this to an arbitrary date within the static data set
const now = new Date('2023-05-01T13:00:00.000Z');

function App() {
  const weather = data.forecast.find((item) => {
    return new Date(item.date).getTime() === now.getTime();
  })

  return (
    <div id="weather">
      <div className='current-weather'>
        <div>
          <div>{weather.temperature}ºF</div>
          <div>{data.location}</div>
        </div>
        <div>
          <img src={icons[weather.description]} width="40" height="40" />
        </div>
      </div>
    </div>
  )
}

export default App
