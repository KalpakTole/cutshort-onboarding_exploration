import React from 'react';
import Card from './UI/Card';
import { ReactComponent as CheckMarkIcon } from '../assets/Icons/CheckMarkIcon.svg';

const FinalStage4 = (props) => {
	return (
		<Card
			finalCard={true}
			cardIcon={<CheckMarkIcon style={{ width: '3em', height: '3em' }} />}
			header={`Congratulations, ${props.userName}!`}
			description='You have completed onboarding, you can start using Eden!'
		/>
	);
};

export default FinalStage4