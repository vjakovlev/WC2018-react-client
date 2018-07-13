import React from 'react';
import Match from './Match';

const MatchList = ({matches}) => {
	return (
		<div>
			{
				matches.map((match, i) => {
					return (
						<Match 
							key={matches[i].Id}
							id={matches[i].Id}
							name={matches[i].Name}
							teamA = {matches[i].TeamA.Name}
							teamB = {matches[i].TeamB.Name}
							date = {matches[i].Date}
							date = {matches[i].Time}
							teamAScore = {matches[i].TeamAScore}
							teamBScore = {matches[i].TeamBScore}
						/>
					);
				})
			}
		</div>
	);
}

export default MatchList;