import React from "react";
import ReactDOM from "react-dom";

import { fetchWeatherData } from "./api-caller.js";
import { LocationForm } from "./location-form.js";
import { WeatherDisplay } from "./weather-display.js";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.getData = this.getData.bind(this);
	}

	render() {
		return (
			<div>
				<LocationForm getData={this.getData} />
				{this.state.weatherData ? (
					<WeatherDisplay data={this.state.weatherData} />
				) : null}
			</div>
		);
	}

	async getData(location) {
		const weatherData = await fetchWeatherData(location);
		this.setState({ weatherData });
	}
}

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
