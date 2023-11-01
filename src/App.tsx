import React, { useState } from 'react';
import './App.css';
import Player from './components/Player';
import GameBoard from './components/GameBoard';

const App = () => {
	const [activePlayer, setActivePlayer] = useState<string>('X');

	const handleSelectSquare = () => {
		setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));
	};

	return (
		<section id="game-container">
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
			<GameBoard
				onSelectSquare={handleSelectSquare}
				activePlayerSymbol={activePlayer}
			/>
		</section>
	);
};

export default App;
