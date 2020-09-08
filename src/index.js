import React from "react";
import ReactDOM from "react-dom";

import { fetchWeatherData, fetchLocationData } from "./api-caller.js";
import { LocationForm } from "./location-form.js";
import { WeatherDisplay } from "./weather-display.js";

import "./style.css";
import loadingImg from "./images/loading.gif";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { loading: false };
		this.getData = this.getData.bind(this);
	}

	render() {
		return (
			<div id="app">
				<LocationForm getData={this.getData} />
				{this.state.loading ? (
					<img class="loading" src={loadingImg} alt="" />
				) : this.state.apiData ? (
					<WeatherDisplay data={this.state.apiData} />
				) : this.state.badLocation ? (
					<div id="location-not-found">Location not found.</div>
				) : null}
			</div>
		);
	}

	async getData(location) {
		this.setState({ loading: true });
		try {
			const locationData = await fetchLocationData(location);
			const weatherData = await fetchWeatherData(locationData.geometry);
			this.setState({
				apiData: { weatherData, locationData },
				loading: false,
				badLocation: false,
			});
		} catch (error) {
			this.setState({ loading: false, apiData: null, badLocation: true });
		}
	}
}

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
