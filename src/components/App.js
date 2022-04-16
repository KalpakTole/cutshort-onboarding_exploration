import React, { useState, useEffect } from 'react';
import Header from './Header';
import Stages from './Stages';
import WelcomeStage1 from './WelcomeStage1';
import WorkspaceStage2 from './WorkspaceStage2';
import PlanningStage3 from './PlanningStage3';
import FinalStage4 from './FinalStage4'
import Button from './UI/Button';

const App = () => {
	const [currentStage, setCurrentStage] = useState(0);
	const [stageTransformValue, setStageTransformValue] = useState(0);
	const [userName, setUserName] = useState('Kalpak');

	const goToPreviousStage = () => {
		setCurrentStage(prevStage => {
			return prevStage-1
		})
	};

	const goToNextStage = () => {
		setCurrentStage(prevStage => {
			return prevStage+1
		})
	};

	const userNameChangeHandler = (event) => {
		setUserName(event.target.value);
	}

	useEffect(() => {
		setStageTransformValue(-100 * currentStage);
	}, [currentStage]);

	return (
		<>
			<Header />
			<Stages currentStage={currentStage} />
			<div
				style={{
					position: 'relative',
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					minHeight: '26em',
					transform: `translateX(${stageTransformValue}vw)`,
					transition: 'all 400ms ease-in-out',
				}}
			>
				<div style={{ transform: 'translateX(0)', position: 'absolute' }}>
					<WelcomeStage1 userName={userName} onChange={userNameChangeHandler}/>
				</div>
				<div style={{ transform: 'translateX(100vw)', position: 'absolute' }}>
					<WorkspaceStage2 />
				</div>
				<div style={{ transform: 'translateX(200vw)', position: 'absolute' }}>
					<PlanningStage3 />
				</div>
				<div style={{ transform: 'translateX(300vw)', position: 'absolute' }}>
					<FinalStage4 userName={userName} />
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					marginInline: 'auto',
				}}
			>
				{currentStage === 0 && <Button buttonList={[{ name: 'Next', onClick: goToNextStage }]} />}
				{currentStage === 1 && (
					<Button
						buttonList={[
							{ name: 'Previous', onClick: goToPreviousStage },
							{ name: 'Next', onClick: goToNextStage },
						]}
					/>
				)}
				{currentStage === 2 && (
					<Button
						buttonList={[
							{ name: 'Previous', onClick: goToPreviousStage },
							{ name: 'Create Workspace', onClick: goToNextStage },
						]}
					/>
				)}
				{currentStage === 3 && (
					<Button
						buttonList={[
							{ name: 'Previous', onClick: goToPreviousStage },
							{ name: 'Launch Eden', onClick: null },
						]}
					/>
				)}
			</div>
		</>
	);
};

export default App;
