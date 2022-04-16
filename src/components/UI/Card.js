import React from 'react';
import classes from './Card.module.css';
import Subcard from './Subcard';

const Card = (props) => {
	let prefixInputClasses = '';
	if (props.prefixText) {
		prefixInputClasses = `${classes['input']} ${classes['prefix-input']}`;
	} else {
		prefixInputClasses = `${classes['input']}`;
	}
	return (
		<div className={classes['card-container']}>
			{props.finalCard && <>{props.cardIcon}</>}
			<h1 className={classes['header']}>{props.header}</h1>
			<h4 className={classes['description']}>{props.description}</h4>
			{props.introCard && (
				<>
					<div>
						<label className={classes['label']}>{props.label1}</label>
						<input className={classes['input']} type='text' placeholder={props.placeholder1} />
					</div>
					<div>
						<div className={classes['input-divs']}>
							<label className={classes['label']}>{props.label2}</label>
							{props.optionalText && (
								<span className={classes['optional-text']}>&nbsp;{props.optionalText}</span>
							)}
						</div>
						<div className={classes['input-divs']}>
							{props.prefixText && <span className={classes['prefix-span']}>{props.prefixText}</span>}
							<input
								className={prefixInputClasses}
								type='text'
								placeholder={props.placeholder2}
								value={props.userNameInput}
								onChange={props.onChange}
							/>
						</div>
					</div>
				</>
			)}
			{props.subcards && (
				<>
					<Subcard subcardList={props.subcardList} />
				</>
			)}
		</div>
	);
};

export default Card;
