import React from 'react';
import Card from './UI/Card';

const WorkspaceStage2 = () => {
	return (
		<Card
			introCard={true}
			header="Let's set up a home for all your work"
			description='You can always create another workspace later.'
			label1='Workspace Name'
			placeholder1='Eden'
			label2='Workspace URL'
			optionalText='(optional)'
			prefixText='www.eden.com/'
			placeholder2='Example'
		/>
	);
};

export default WorkspaceStage2;
