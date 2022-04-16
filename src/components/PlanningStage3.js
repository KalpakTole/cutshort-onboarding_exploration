import React from 'react'
import Card from './UI/Card';
import {ReactComponent as UserIcon} from '../assets/Icons/UserIcon.svg'
import {ReactComponent as UserGroupIcon} from '../assets/Icons/UserGroupIcon.svg'


const PlanningStage3 = () => {
  return (
		<Card
			subcards={true}
			header='How are you planning to use Eden?'
			description="We'll streamline your setup experience accordingly."
			subcardList={[
				{	
					id: '1',
					icon: <UserIcon style={{ width: '1em' }} />,
					header: 'For myself',
					description: 'Write better. Think more clearly. Stay organized.',
				},
				{
					id: '2',
					icon: <UserGroupIcon style={{ width: '1em' }} />,
					header: 'With my team',
					description: 'Wikis, docs, tasks & projects, all in one place.',
				},
			]}
		/>
  );
}

export default PlanningStage3