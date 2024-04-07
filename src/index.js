function displayTemperature(response) {
    let temperature = Math.round (response.data.temperature.current);
    let city = response.data.city;
    
    let headingElement = document.querySelector("#heading");
    headingElement.innerHTML = 'It is ${temperature} degrees in ${city}'
}
let apiKey = "e9ba0e93do7684t3cff3919ff4b00bf7";
let city = "Sydney";
let apiUrl = 'https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric';
axios.get(apiUrl).then(displayTemperature);

