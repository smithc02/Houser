import React from 'react';

const House = props => {
	return (
		<div>
			<p>
				Name: {props.name}
				<br />
				Address: {props.address}
				<br />
				City: {props.city}
				<br />
				State: {props.state}
				<br />
				Zipcode: {props.zipcode}
			</p>
		</div>
	);
};
export default House;
