import React from "react";

export class WeatherDisplay extends React.Component {
	render() {
		const data = this.props.data;
		const iconId = data.weather[0].icon;
		this.iconUrl = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
		this.temperature = Math.floor(data.main.temp) + "\u00B0";
		return (
			<div>
				<img src={this.iconUrl} alt="" />
				<div id="temperature">{this.temperature}</div>
			</div>
		);
	}
}
