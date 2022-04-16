import React from 'react';
import Card from './UI/Card';

const WelcomeStage1 = (props) => {
	return (
		<Card
			introCard={true}
			header='Welcome! First things first...'
			description='You can always change them later.'
			label1='Full Name'
			placeholder1='Steve Jobs'
			label2='Display Name'
			placeholder2='Steve'
			userNameInput={props.userName}
			onChange={props.onChange}
		/>
	);
};

export default WelcomeStage1;
