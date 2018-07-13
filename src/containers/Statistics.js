import React, { Component } from 'react';
import loader from './ball-triangle.svg';	

class Statisctics extends Component {

	constructor() {
		super()
		this.state = {
			stats: []
		}
	}

	componentDidMount() {
		const url = 'http://localhost:63741/api/Match/Statistics';

		fetch(url)
			.then(response => response.json())
			.then(stats => this.setState({ stats: stats }));
	}

	render() {
		const { stats } = this.state;

		if (stats.length === 0) {
			return (
				<div className="tc">
					<img src={loader} alt="...Loading" />		
				</div>
			);
		} else {
			return (
				<div className="tc">
					<h1>Statistics</h1>
					<p>Total Goals: {stats.totalGoals}</p>
					<p>Total Matches: {stats.totalMatches}</p>
					<p>Average Goal Per Team: {stats.averageGoalPerTeam}</p>
					<p>Average Goal Per Match: {stats.averageGoalsPerMatch}</p>
				</div>
			);
		}
	}
}

export default Statisctics;