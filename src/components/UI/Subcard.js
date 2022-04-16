import React, { useState } from 'react';
import classes from './Subcard.module.css';

const Subcard = (props) => {
	const [activeSubcard, setActiveSubcard] = useState('1');

	const subcardClickHandler = (event) => {
		let clickedSubcard = event.target.dataset.subcard;
		let clickedSubcardParent1 = event.target.parentNode.dataset.subcard;
		let clickedSubcardParent2 = event.target.parentNode.parentNode.dataset.subcard;
		setActiveSubcard(clickedSubcard ?? clickedSubcardParent1 ?? clickedSubcardParent2);
	};

	return (
		<div className={classes['subcard-wrapper']}>
			{props.subcardList.map((subcard) => {
				return (
					<div
						className={
							subcard.id === activeSubcard
								? `${classes['subcard']} ${classes['active']}`
								: classes['subcard']
						}
						key={subcard.id}
						onClick={subcardClickHandler}
						data-subcard={`${subcard.id}`}
					>
						{subcard.icon}
						<h4>{subcard.header}</h4>
						<p className={classes['subcard-description']}>{subcard.description}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Subcard;
