import React, { Component } from 'react';
import loader from './ball-triangle.svg';

class Matches extends Component {
	constructor() {
		super()
		this.state = {
			matches: []
		}
	}

	componentDidMount() {
		const url = 'http://localhost:63741/api/Match/ShowMatches';

		fetch(url)
			.then(response => response.json())
			.then(matches => this.setState({ matches: matches }));
	}

	render() {



		// var date = new Date('2018-06-29T22:21:00');
		// date.toDateString();

		// console.log(date.getDate());
		// console.log(date.getMonth() + 1);
		// console.log(date.getFullYear());
		// console.log(date.getHours());
		// console.log(date.getMinutes());




		const { matches } = this.state;

		if (matches.length === 0) {
			return (
				<div className="tc">
					<img src={loader} alt="...Loading" />		
				</div>
			);
		} else {
			return (
				<div className="container">
					<h1>Matches</h1>

					<table className="table">

						<tr>
							<th>ID</th>
							<th>Date</th>
							<th>Time</th>
							<th></th>
							<th>Score</th>
						</tr>

						{
							matches.map((match, i) => {
								return(
									<tr>
										<td>{matches[i].Id}</td>
										<td>{matches[i].Date}</td>
										<td>{matches[i].Time}</td>
										<td>{matches[i].TeamA.Name} VS {matches[i].TeamB.Name}</td>
										<td>Score: {matches[i].TeamAScore} : {matches[i].TeamBScore}</td>
									</tr>
								);
							})
						}

					</table>

				</div>
			);
		}
	}
}

export default Matches;