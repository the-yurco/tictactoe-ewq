import React from 'react';

type Props = {
	turns: Array<{
		player: string;
		square: {
			row: number;
			col: number;
		};
	}>;
};

const Log = ({ turns }: Props) => {
	return (
		<ol id="log">
			{turns.map((turn) => (
				<li key={`${turn.square.row}${turn.square.col}`}>
					{turn.player} selected {turn.square.row},{turn.square.col}
				</li>
			))}
		</ol>
	);
};

export default Log;
