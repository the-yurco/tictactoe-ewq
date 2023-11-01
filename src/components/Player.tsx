import React, { ReactNode, useState } from 'react';

type Props = {
	initialName: string;
	symbol: string;
	isActive: boolean;
};

const Player = ({ initialName, symbol, isActive }: Props) => {
	// !TODO ---- useState isEditing, setIsEditing
	// add func. thats triggered when the button is clicked
	// change isEditing to true in that function
	// show the <span classname='player-name'> only when isEditing == false
	// show an <input> element when isEditing == true
	const [isEditing, setIsEditing] = useState<boolean>(false);

	const [playerName, setPlayerName] = useState(initialName);

	const handleClick = () => {
		setIsEditing((editing) => !editing);
	};

	const handleChange = (e: any) => {
		setPlayerName(e.target.value);
	};

	const BUTTON_EDIT = 'edit';
	const BUTTON_SAVE = 'save';

	const CONST_PLAYER_NAME = <span className="player-name">{playerName}</span>;
	const CONST_INPUT = (
		<input
			placeholder="select your name"
			required
			value={playerName}
			onChange={handleChange}
		/>
	);

	return (
		<div className="wrapper">
			<li className={isActive ? 'active' : undefined}>
				<span className="player">
					{!isEditing ? CONST_PLAYER_NAME : CONST_INPUT}
					<span className="player-symbol">{symbol}</span>
				</span>
				<button onClick={() => handleClick()}>
					{!isEditing ? BUTTON_EDIT : BUTTON_SAVE}
				</button>
			</li>
		</div>
	);
};

export default Player;
