import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import {
	updateName,
	updateAddress,
	updateCity,
	updateStates,
	updateZipcode
} from '../../ducks/reducer';

class Wizard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			address: '',
			city: '',
			state: '',
			zipcode: 0
		};
	}

	componentDidMount() {
		Axios.get(
			`http//localhost:3001/api/houser?name=${this.props.match.params
				.name}`
		).then(results => {
			this.setState({ name: results.data });
		});
	}

	inputData = () => {
		const { name, address, city, state, zipcode } = this.state;
		let newPropertyInfo = {
			name,
			address,
			city,
			state,
			zipcode
		};

		this.setState({
			name: '',
			address: '',
			city: '',
			state: '',
			zipcode: 0
		});

		Axios.post('/api/houser', newPropertyInfo).catch(err => {
			console.log(err);
		});
	};

	render() {
		console.log(this.props);
		const {
			updateAddress,
			updateCity,
			updateName,
			updateStates,
			updateZipcode
		} = this.props;

		return (
			<div className="new_prop_holder">
				<p className="adding_property"> </p>
				<button>Cancel</button>
				<form className="input-info" onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input
							type="text"
							// value={this.props.name}
							onChange={e => updateName(e.target.value)}
						/>
					</label>

					<label>
						Address:
						<input
							type="text"
							// value={this.props.address}
							onChange={e => updateAddress(e.target.value)}
						/>
					</label>

					<label>
						City:
						<input
							type="text"
							// value={this.props.city}
							onChange={e => updateCity(e.target.value)}
						/>
					</label>

					<label>
						State:
						<input
							type="text"
							// maxlength="2"
							// value={this.props.states}
							onChange={e => updateStates(e.target.value)}
						/>
					</label>

					<label>
						Zipcode:
						<input
							type="number"
							value={this.props.zipcode}
							onChange={e => updateZipcode(e.target.value)}
						/>
					</label>
					<button
						className="add_new_property"
						onClick={() => this.inputData()}
					>
						Complete
					</button>
				</form>
			</div>
		);
	}
}
function mapStateToProps(state) {
	const { address, city, name, states, zipcode } = state;

	return {
		address,
		city,
		name,
		states,
		zipcode
	};
}

export default connect(mapStateToProps, {
	updateName,
	updateCity,
	updateAddress,
	updateStates,
	updateZipcode
})(Wizard);
