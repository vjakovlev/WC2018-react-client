import React, { Component } from 'react';
import loader from './ball-triangle.svg';

class Matches extends Component {
	constructor() {
		super()
		this.state = {
			teams: []
		}
	}

	componentDidMount() {
		const url = 'http://localhost:63741/api/team/showteams';

		fetch(url)
			.then(response => response.json())
			.then(teams => this.setState({ teams: teams }));
	}

	render() {

		const { teams } = this.state;

		if (teams.length === 0) {
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
							<th>Coatch</th>
							<th>Continent</th>
						</tr>

						{
							teams.map((team, i) => {
								return(
									<tr>
										<td>{teams[i].Id}</td>
										<td>{teams[i].Name}</td>
										<td>{teams[i].Coatch}</td>
										<td>{teams[i].Continent.Name}</td>
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