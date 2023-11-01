import React, { useState } from 'react';
import './App.css';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';

import { WINNINGCOMBINATIONS } from './data/winningCombinations';
import { INITIALGAMEBOARD } from './data/gameBoard';

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

	let winner = null;

	for (const combination of WINNINGCOMBINATIONS) {
		const firstSquareSymbol =
			INITIALGAMEBOARD[combination[0].row][combination[0].col];
		const secondSquareSymbol =
			INITIALGAMEBOARD[combination[1].row][combination[1].col];
		const thirdSquareSymbol =
			INITIALGAMEBOARD[combination[2].row][combination[2].col];

		if (
			firstSquareSymbol &&
			firstSquareSymbol === secondSquareSymbol &&
			firstSquareSymbol === thirdSquareSymbol
		) {
			winner = firstSquareSymbol;
		}
	}

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
				{winner && <p>You won, {winner}!</p>}
				<GameBoard onSelectSquare={handleSelectSquare} board={gameTurns} />
			</div>
			<Log turns={gameTurns} />
		</main>
	);
};

export default App;
