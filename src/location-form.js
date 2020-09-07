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
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					onChange={this.handleChange}
					name="city"
					placeholder="City"
				/>
				<input
					type="text"
					onChange={this.handleChange}
					name="state"
					placeholder="State"
				/>
				<input
					type="text"
					onChange={this.handleChange}
					name="zip"
					placeholder="Zip"
				/>
				<input type="submit" value="Go" />
			</form>
		);
	}

	handleSubmit(event) {
		this.props.getData(this.state);
		event.preventDefault();
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}
}