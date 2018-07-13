import React, { Component } from 'react';
import CardList from '../components/CardList';
import loader from './ball-triangle.svg';
import CreateContinent from './CreateContinent';
import { Button } from 'reactstrap';

class Continents extends Component {
	constructor() {
		super()
		this.state = {
			continents: []
		}
	}

	componentDidMount() {
		const url = 'http://localhost:63741/api/Continent/ShowContinents';

		fetch(url)
			.then(response => response.json())
			.then(continents => this.setState({ continents: continents }));
	}

	render() {
		const { continents } = this.state;

		if (continents.length === 0) {
			return (
				<div className="tc">
					<img src={loader} alt="...Loading" />		
				</div>
			);
		} else {
			return (
				<div>
					<div className="tc">
						<h1>Continents</h1>
						<CardList continents={continents} />
					</div>
					<div className="container">
						<Button href="/CreateContinent" color="success">Create</Button>{' '}
					</div>
				</div>
			);
		}
	}
}

export default Continents;