import classes from './HeaderCartButton.module.css';
import logo from '../../assets/svg/cart-icon.svg';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

export default (props) => {
	const cartItem = useContext(CartContext);
	const [buttonIsAnimated, setButtonIsAnimated] = useState(false);
	const numberOfItem = cartItem.items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);
	const { items } = cartItem;
	useEffect(() => {
		if (items.length > 0) setButtonIsAnimated(true);
		const timer = setTimeout(() => {
			setButtonIsAnimated(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [items]);
	return (
		<button
			className={`${classes.button} ${buttonIsAnimated && classes.bump}`}
			onClick={props.onClick}>
			<div className={classes.icon}>
				<img
					src={logo}
					alt='cart-logo'></img>

				<div className={classes.badge}>
					<span>{numberOfItem}</span>
				</div>
			</div>
			<span>Cart</span>
		</button>
	);
};
