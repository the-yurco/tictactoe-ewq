import React from 'react';
import { initialGameBoard } from '../data/gameBoard';

type Props = {
	onSelectSquare: (rowIndex: number, colIndex: number) => void;
	turns: Turn[];
};

type Turn = {
	rowIndex: number;
	colIndex: number;
	player: string;
};

const GameBoard = ({ onSelectSquare, turns }: Props) => {
	let gameBoard: (string | null)[][] = [];

	// Initialize the game board based on initialGameBoard
	initialGameBoard.forEach((row) => {
		gameBoard.push([...row]);
	});

	// Update the game board based on turns
	for (const turn of turns) {
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
									<button onClick={() => onSelectSquare(rowIndex, colIndex)}>
										{playerSymbol}
									</button>
								</li>
							))}
						</ol>
					</li>
				))}
			</ol>
		</div>
	);
};

export default GameBoard;
