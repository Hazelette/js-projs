// WEATHER APP
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "4eac8f535ba51783ba2d6ac71ea7d66b";

weatherForm.addEventListener("submit",async event =>{
    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.error(error);
        }
    } else{
        displayError("Please enter a city")
    }
});

async function  getWeatherData(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiURL);
    // console.log(response);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
}

function displayWeatherInfo(data){

}

function getWeatherEmoji(weatherID){

}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;

    // add class errorDisplay to apply CSS
    errorDisplay.classList.add("errorDisplay");
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}