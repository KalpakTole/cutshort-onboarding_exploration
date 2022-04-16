import React from 'react'
import EdenLogo from '../assets/Icons/logo.png'
import classes from './Header.module.css';

const Header = () => {
  return (
		<>
			<header className={classes['app-header']}>
				<img className={classes['app-logo']} src={EdenLogo} alt='Application Logo' />
				<h1>Eden</h1>
			</header>
		</>
  );
}

export default Header