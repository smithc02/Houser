import React, { Component } from 'react';
import Axios from 'axios';
import House from './house';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			houses: []
		};
	}
	componentDidMount(){
		this.getData()
	}
getData = ()=> {
	Axios.get('/api/houser').then(res => {
		console.log('Houser API response', res);
		this.setState({houses: res.data})
	})
	.catch(err => console.log(err));
}
	

	render() {
		
		return (
		<div>
			

		</div>
		)
	}
}

export default Dashboard;
