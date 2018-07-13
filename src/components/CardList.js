import React from 'react';
import Card from './Card';

const CardList = ({continents}) => {
	return (
		<div>
			{
				continents.map((continent, i) => {
					return (
						<Card 
							key={continents[i].Id}
							id={continents[i].Id}
							name={continents[i].Name}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;