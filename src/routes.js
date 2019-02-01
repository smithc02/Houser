import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import components
import Dashboard from './component/Dashboard/dashboard';
import Wizard from './component/Wizard/wizard';

export default (
	<Switch>
		<Route exact path="/" component={Dashboard} />
		<Route path="/wizard" component={Wizard} />
		<Route
			path="*"
			render={() =>
				<div>
					<h1>404</h1>
				</div>}
		/>
	</Switch>
);
