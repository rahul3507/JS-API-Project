async function getRandomDogImage(){
    const url ='https://random.dog/woof.json';
    const response = await fetch(url)
    const data = await response.json()
    document.getElementById('dogImage').src = data.url;
}

async function getRandomCatImage(){
    const url ='https://cataas.com/cat?' +
                                         Math.random() * 1000;
    
    document.getElementById('catImage').src = url;
}


async function getRandomPersonImage(){
    const url ='https://thispersondoesnotexist.com/'
    
    document.getElementById('personImage').src = url;
}


async function getRandomKanyaQuote(){
    const url = 'https://api.kanye.rest/';
    const response = await fetch(url)
    const data = await response.json()
    document.getElementById('kanyeQuote').innerText=data.quote
}


async function fetchWeather() {
    console.log("first")
    const location = document.getElementById('locationInput').value.trim();
    console.log(location)

    try {
        const url = `https://goweather.herokuapp.com/weather/${location}`
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Failed to fetch weather data')
        }
        const data = await response.json()
        console.log(data)
        if (data.temperature) {
            document.getElementById('weatherData').innerHTML =
                `
            <div class="alert alert-success">
                        <h2>Weather in ${location}</h2>
                        <p><strong>Temperature:</strong> ${data.temperature}</p>
                        <p><strong>Description:</strong> ${data.description}</p>
                    </div>
            `
        } else {
            document.getElementById('weatherData').innerHTML =
                `<div class="alert alert-danger">
                        <h2>No weather data available for ${location}</h2>
                    </div>
            `
        }
    } catch (error) {
        console.error('Error:', error)
        document.getElementById('weatherData').innerHTML =
            `<div class="alert alert-danger">
                        <h2>Error fetching weather data</h2>
                        <p>Please try again later.</p>
                        <p>${error.message}</p>
                    </div>
            `
    }

}


async function fetchUniversities() {
    const location = document.getElementById('countryInput').value;
    const url = `http://universities.hipolabs.com/search?name=university&country=${location}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    const list = document.getElementById('universityList');
    list.innerHTML = data.map(university =>
            `<li class='list-group-item'>${university.name}</li>`)
        .join('')
}


window.onload= function(){
    getRandomCatImage();
    getRandomDogImage();
    getRandomPersonImage();
    getRandomKanyaQuote();
}

setInterval(getRandomKanyaQuote, 5000)