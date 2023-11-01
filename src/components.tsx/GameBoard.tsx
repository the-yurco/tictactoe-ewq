import React, { useState } from 'react';
import { initialGameBoard } from '../data/gameBoard';

type Props = {};

type GameSquare = string | null;

type BoardParams = {
	rowIndex: number;
	colIndex: number;
};

const GameBoard = (props: Props) => {
	const [gameBoard, setGameBoard] = useState<GameSquare[][]>(initialGameBoard);

	const handleSelectSquare = ({ rowIndex, colIndex }: BoardParams) => {
		setGameBoard((prevGameBoard) => {
			const updatedBoard = prevGameBoard.map((row) => [...row]);
			updatedBoard[rowIndex][colIndex] = 'X';
			return updatedBoard;
		});
	};

	return (
		<div>
			<ol id="game-board">
				{gameBoard.map((row, rowIndex) => (
					<li key={rowIndex}>
						<ol>
							{row.map((playerSymbol, colIndex) => (
								<li key={colIndex}>
									<button
										onClick={() => handleSelectSquare({ rowIndex, colIndex })}
									>
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
