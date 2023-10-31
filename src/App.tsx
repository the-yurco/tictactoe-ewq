import React from 'react';
import './App.css';
import Player from './components.tsx/Player';

const App = () => {
	return (
		<section id="game-container">
			<ol id="players">
				<Player initialName={'Player1'} symbol={'X'} />
				<Player initialName={'Player2'} symbol={'O'} />
			</ol>
			GAME BOARD
		</section>
	);
};

export default App;
