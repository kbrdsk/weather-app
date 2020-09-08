const WEATHERKEY = "3e81ce2f6403ab0898bbba96bb2ed63d";
const GEOCODEKEY = "3ee4ea507c174d90850ab5cd219ced08";



function generateGeocodingURL(location) {
	const query = encodeURI(location);
	return (
		`https://api.opencagedata.com/geocode/v1/json?q=${query}` +
		`&key=${GEOCODEKEY}`
	);
}

function generateWeatherURL({lat, lng}) {
	return (
		`https://api.openweathermap.org/data/2.5/onecall?` +
		`lat=${lat}&lon=${lng}` + 
		`&exclude=minutely` +
		`&appid=${WEATHERKEY}` +
		`&units=imperial`
	);
}


export async function fetchLocationData(location){
	const url = generateGeocodingURL(location)
	const data = await fetch(url).then(response => response.json());
	console.log(data);
	return data.results[0];
}

export async function fetchWeatherData(geometry) {
	const url = generateWeatherURL(geometry);
	const weatherData = await fetch(url).then((response) => response.json());
	console.log(weatherData);
	return weatherData;
}
