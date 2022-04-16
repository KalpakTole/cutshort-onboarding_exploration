import React from 'react';
import classes from './Stages.module.css';

const Stages = (props) => {
	let stage1Classes =
		props.currentStage + 1 >= 1 ? `${classes['stage']} ${classes['active']}` : `${classes['stage']}`;
	let stage2Classes =
		props.currentStage + 1 >= 2 ? `${classes['stage']} ${classes['active']}` : `${classes['stage']}`;
	let stage3Classes =
		props.currentStage + 1 >= 3 ? `${classes['stage']} ${classes['active']}` : `${classes['stage']}`;
	let stage4Classes =
		props.currentStage + 1 >= 4 ? `${classes['stage']} ${classes['active']}` : `${classes['stage']}`;

	let rootElement = document.getElementById('root');
	if (props.currentStage + 1 >= 4) rootElement.style.setProperty('--bar-filled-width', '100%');
	else if (props.currentStage + 1 >= 3) rootElement.style.setProperty('--bar-filled-width', '80%');
	else if (props.currentStage + 1 >= 2) rootElement.style.setProperty('--bar-filled-width', '50%');
	else if (props.currentStage + 1 >= 1) rootElement.style.setProperty('--bar-filled-width', '20%');

	return (
		<div className={classes['stage-container']}>
			<div className={classes['progress-bar-wrapper']}>
				<div id='progressbar' className={classes['progress-bar']}></div>
			</div>
			<div className={stage1Classes}>1</div>
			<div className={stage2Classes}>2</div>
			<div className={stage3Classes}>3</div>
			<div className={stage4Classes}>4</div>
		</div>
	);
};

export default Stages;
