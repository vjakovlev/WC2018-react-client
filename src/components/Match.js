import React from 'react';

const Match = ({id, name, teamA, teamB, date, time, teamAScore, teamBScore}) => {
	return (
		<div className="tc bg-light-red hover-black dib br4 pa3 ma2 grow bw2 shadow-5">
			<p>{name}</p>
			<p>{teamA}</p>
			<p>{teamB}</p>
			<p>{date}</p>
			<p>{time}</p>
			<p>{teamAScore}</p>
			<p>{teamBScore}</p>
		</div>
	);
}

export default Match;