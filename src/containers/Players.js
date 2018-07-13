import React, { Component } from 'react';
import loader from './ball-triangle.svg';

class Matches extends Component {
	constructor() {
		super()
		this.state = {
			players: []
		}
	}

	componentDidMount() {
		const url = 'http://localhost:63741/api/player/showplayers';

		fetch(url)
			.then(response => response.json())
			.then(players => this.setState({ players: players }));
	}

	render() {

		const { players } = this.state;

		if (players.length === 0) {
			return (
				<div className="tc">
					<img src={loader} alt="...Loading" />		
				</div>
			);
		} else {
			return (
				<div className="container">
					<h1>Teams</h1>

					<table className="table">

						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Age</th>
							<th>Team</th>
							<th>Position</th>
						</tr>

						{
							players.map((team, i) => {
								return(
									<tr>
										<td>{players[i].Id}</td>
										<td>{players[i].Name}</td>
										<td>{players[i].Age}</td>
										<td>{players[i].Team.Name}</td>
										<td>{players[i].Position.Name}</td>
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