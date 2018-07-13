import React from 'react';

const Card = ({id, name}) => {
	return (
		<div className="tc bg-light-red hover-black dib br4 pa3 ma2 grow bw2 shadow-5">
			<p>{name}</p>
		</div>
	);
}

export default Card;