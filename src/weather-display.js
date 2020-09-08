import React from "react";

const DAYS = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

export class WeatherDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.state = { units: "imperial", timeFrame: "current" };
	}
	render() {
		const weatherData = this.props.data.weatherData;
		return (
			<div id="weather-display">
				<Location data={this.props.data.locationData} />
				<CurrentWeather data={weatherData.current} />
				<div id="forecast-week">
					{weatherData.daily.map(dayWeather)}
				</div>
			</div>
		);
	}
}

function Location(props) {
	const info = props.data.components;
	return (
		<div id="location">
			<div className="city">{info.city}</div>
			<div className="state">{info.state}</div>
			<div className="country">{info.country}</div>
		</div>
	);
}

function CurrentWeather(props) {
	return (
		<div id="current-weather">
			<img src={iconUrl(props.data.weather[0].icon)} alt="" />
			<div className="info">
				<div className="temp">{printTemp(props.data.temp) + "F"}</div>
				<div className="description">
					{props.data.weather[0].description}
				</div>
			</div>
		</div>
	);
}

function dayWeather(data) {
	const date = new Date(data.dt * 1000);
	return (
		<div className="day" key={date.getDate()}>
			<div className="title">{DAYS[date.getDay()].substring(0, 3)}</div>
			<img src={iconUrl(data.weather[0].icon)} alt="" />
			<div>
				<span className="temp-day">{printTemp(data.temp.day)}</span>
				<span className="temp-night">{printTemp(data.temp.night)}</span>
			</div>
		</div>
	);
}

function iconUrl(iconId) {
	return `http://openweathermap.org/img/wn/${iconId}@2x.png`;
}

function printTemp(temp) {
	return Math.floor(temp) + "\u00B0";
}
