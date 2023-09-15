import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

import mealsImage from '../../assets/img/banner.jpg';
import { Fragment } from 'react';

export default (props) => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton onClick={props.onShowCart}/>
			</header>
			<div className={classes['main-image']}>
				<img
					src={mealsImage}
					alt='banner'></img>
			</div>
		</Fragment>
	);
};
