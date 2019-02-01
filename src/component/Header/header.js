import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<Link to="/">Dashboard</Link>
			<Link to="/wizard">Wizard</Link>
		</div>
	);
};
export default Header;
