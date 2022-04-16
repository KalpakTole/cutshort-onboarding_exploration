import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
	return (
		<div className={classes['button-container']}>
			{props.buttonList.map(button => {
				return <button className={classes['button']} onClick={button.onClick} key={button.name}>{button.name}</button>;
			})}
		</div>
	);
};

export default Button;
