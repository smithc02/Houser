import React, { Component } from 'react';
import Axios from 'axios';

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
		return (
			<div className="new_prop_holder">
				<p className="adding_property"> </p>
				<button>Cancel</button>
				<form className="input-info" onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input
							type="text"
							value={this.state.name}
							onChange={e =>
								this.setState({ name: e.target.value })}
						/>
					</label>

					<label>
						Address:
						<input
							type="text"
							value={this.state.address}
							onChange={e =>
								this.setState({ address: e.target.value })}
						/>
					</label>

					<label>
						City:
						<input
							type="text"
							value={this.state.city}
							onChange={e =>
								this.setState({ city: e.target.value })}
						/>
					</label>

					<label>
						State:
						<input
							type="text"
							maxlength="2"
							value={this.state.state}
							onChange={e =>
								this.setState({ state: e.target.value })}
						/>
					</label>

					<label>
						Zipcode:
						<input
							type="number"
							max="5"
							value={this.state.zipcode}
							onChange={e =>
								this.setState({ zipcode: e.target.value })}
						/>
					</label>
					<button
						className="add_new_property"
						onClick={this.inputData}
					>
						Complete
					</button>
				</form>
			</div>
		);
	}
}
export default Wizard;
//cancel button in here
