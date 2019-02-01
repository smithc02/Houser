import React, { Component } from 'react';
import Axios from 'axios';
import House from '../House/house';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			houses: []
		};
	}
	componentDidMount() {
		this.getData();

	}
	getData = () => {
		Axios.get('/api/houser')
			.then(res => {
				console.log('Houser API response', res);
				this.setState({ houses: res.data });
			})
			.catch(err => console.log(err));
	};

	render() {
		let houseDisplay = this.state.houses.map((house, i) =>{
			return(
				<House
				key={i}
				name={house.name}
				address={house.address}
				city={house.city}
				state={house.state}
				zipcode={house.zipcode}
				
				
				/>
			)
		})
		return (
			<div>
				{houseDisplay}
			</div>
		);
	}
}

export default Dashboard;
