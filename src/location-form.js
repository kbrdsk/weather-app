import React from "react";

export class LocationForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	render() {
		return (
			<form id="search" onSubmit={this.handleSubmit}>
				<input
					type="text"
					onChange={this.handleChange}
					name="location"
					placeholder="Location"
				/>
				<input type="submit" value="" />
			</form>
		);
	}

	handleSubmit(event) {
		this.props.getData(this.state.location);
		event.preventDefault();
	}

	handleChange(event) {
		this.setState({ location: event.target.value });
	}
}
