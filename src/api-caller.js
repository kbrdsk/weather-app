const KEY = "3e81ce2f6403ab0898bbba96bb2ed63d";
const geocodeError = new Error("Nothing to geocode");

export async function fetchWeatherData(location) {
	try {
		const callString = generateApiCallString(location);
		const weatherData = await fetchData(callString);
		console.log(weatherData);
		if (weatherData.cod === "400" || weatherData.cod === "404") {
			console.log(callString);
			throw geocodeError;
		}
		return weatherData;
	} catch (error) {
		handleError(error);
	}
}

function generateApiCallString(location) {
	if (!location.city && !location.zip) throw new Error("No city or zip");
	let query;
	if (location.zip) query = `zip=${location.zip}`;
	else {
		const city = location.city;
		query =
			`q=${location.city}` + (location.state ? `,${location.state}` : "");
	}
	return (
		`http://api.openweathermap.org/data/2.5/weather?${query}` +
		`&appid=${KEY}` +
		`&units=imperial`
	);
}

function handleError(error) {
	if (error === geocodeError) {
		console.log("Geocode error");
		return;
	}
	throw error;
}

async function fetchData(queryString) {
	return await fetch(queryString).then((response) => response.json());
}
