let form = document.querySelector('form');
let input = document.querySelector('input');
let button = document.querySelector('button');
let cityName = document.querySelector('h4');
let country = document.querySelector('h5');
let image = document.querySelector('img');
let temp = document.querySelector('#temperature');
let humidity = document.querySelector('#humidity');
let windSpeed = document.querySelector('#wind-speed');
let details = document.querySelector('#details');


const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=feb1ff49d0044c68b22144420241712&q=${input.value}&aqi=yes`);
    const data = await response.json();
    console.log(data);
    cityName.textContent = `${data.location.name} , ${data.location.region}` ;
    country.textContent = data.location.country;
    image.src = data.current.condition.icon;
    temp.textContent = `${data.current.temp_c} °C`;
    humidity.textContent = `${data.current.humidity} %`;
    windSpeed.textContent = `${data.current.wind_kph} km/h`;
    image.className = 'weather-icon';
    details.className = 'details';


};
    form.addEventListener('submit', fetchWeather);