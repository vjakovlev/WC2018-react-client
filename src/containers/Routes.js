import React, { Component } from 'react';
import Continents from './Continents';
import Matches from './Matches';
import Teams from './Teams';
import Players from './Players';
import Home from './Home';
import CreateContinent from './CreateContinent';
import Statistics from './Statistics';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';

class Routes extends Component {	
	render() {
		return (
			<Router>
				<div>
				
					<Route path="/" exact strict render={
						() => {
							return <Home />;
						}
					}/>

					<Route path="/continents" exact strict render={
						() => {
							return <Continents />;
						}
					}/>

					<Route path="/createcontinent" exact strict render={
						() => {
							return <CreateContinent />;
						}
					}/>

					<Route path="/matches" exact strict render={
						() => {
							return <Matches />;
						}
					}/>

					<Route path="/teams" exact strict render={
						() => {
							return <Teams />;
						}
					}/>

					<Route path="/players" exact strict render={
						() => {
							return <Players />;
						}
					}/>

					<Route path="/statistics" exact strict render={
						() => {
							return <Statistics />;
						}
					}/>

				</div>
			</Router>
		);
	}
}

export default Routes;