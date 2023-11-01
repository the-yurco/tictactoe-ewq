// App.tsx
import React, { useState } from 'react';
import './App.css';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';

type BoardParams = {
	rowIndex: number;
	colIndex: number;
};

type Turn = {
	rowIndex: number;
	colIndex: number;
	player: string;
	square: {
		row: number;
		col: number;
	};
};

const deriveActivePlayer = (gameTurns: Turn[]) => {
	let currentPlayer = 'X';

	if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
		currentPlayer = 'O';
	}

	return currentPlayer;
};

const App = () => {
	const [gameTurns, setGameTurns] = useState<Turn[]>([]);
	const activePlayer = deriveActivePlayer(gameTurns);

	const handleSelectSquare = (rowIndex: number, colIndex: number) => {
		setGameTurns((prevTurns) => {
			const currentPlayer = deriveActivePlayer(prevTurns);
			const updatedTurns = [
				{
					rowIndex,
					colIndex,
					player: currentPlayer,
					square: {
						row: rowIndex,
						col: colIndex
					}
				},
				...prevTurns
			];

			return updatedTurns;
		});
	};

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player
						initialName={'Player1'}
						symbol={'X'}
						isActive={activePlayer === 'X'}
					/>
					<Player
						initialName={'Player2'}
						symbol={'O'}
						isActive={activePlayer === 'O'}
					/>
				</ol>
				<GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
			</div>
			<Log turns={gameTurns} />
		</main>
	);
};

export default App;
