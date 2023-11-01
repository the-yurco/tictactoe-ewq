import React from 'react';
import { INITIALGAMEBOARD } from '../data/gameBoard';

type Props = {
	onSelectSquare: (rowIndex: number, colIndex: number) => void;
	board: Turn[];
};

type Turn = {
	rowIndex: number;
	colIndex: number;
	player: string;
};

const GameBoard = ({ onSelectSquare, board }: Props) => {
	let gameBoard: (string | null)[][] = [];

	// Initialize the game board based on INITIALGAMEBOARD
	INITIALGAMEBOARD.forEach((row) => {
		gameBoard.push([...row]);
	});

	// Update the game board based on turns
	for (const turn of board) {
		const { rowIndex, colIndex, player } = turn;
		gameBoard[rowIndex][colIndex] = player;
	}

	return (
		<div>
			<ol id="game-board">
				{gameBoard.map((row, rowIndex) => (
					<li key={rowIndex}>
						<ol>
							{row.map((playerSymbol, colIndex) => (
								<li key={colIndex}>
									<button
										onClick={() => onSelectSquare(rowIndex, colIndex)}
										disabled={playerSymbol !== null}
									>
										{playerSymbol}
									</button>
								</li>
							))}
						</ol>
					</li>
				))}
			</ol>
			<button onClick={() => onSelectSquare}>Reset Board</button>
		</div>
	);
};

export default GameBoard;
