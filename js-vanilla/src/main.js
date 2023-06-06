import data from './data/forecast.json';
import sunnyIcon from './assets/sunny.svg';
import cloudyIcon from './assets/cloudy.svg';
import rainingIcon from './assets/raining.svg';

const icons = {
  Sunny: sunnyIcon,
  Cloudy: cloudyIcon,
  Raining: rainingIcon
}

import 'modern-normalize/modern-normalize.css'
import './assets/style.css'

// for prototype, we fix this to an arbitrary date within the static data set
const now = new Date('2023-05-01T13:00:00.000Z');

const app = document.querySelector('#app');

const container = document.createElement('div');
container.id = 'weather';
app.appendChild(container);

function displayCurrentWeather(){
  const div = document.createElement('div');
  div.className = `current-weather`

  const weather = data.forecast.find((item) => {
    return new Date(item.date).getTime() === now.getTime();
  })

  div.innerHTML = `
    <div>
      <div>${weather.temperature}ºF</div>
      <div>${data.location}</div>
    </div>
    <div>
      <img src="${icons[weather.description]}" width="40" height="40"/>
    </div>
  `;

  return div;
}

container.appendChild(displayCurrentWeather());