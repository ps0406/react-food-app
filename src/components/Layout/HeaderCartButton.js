import classes from './HeaderCartButton.module.css';
import logo from '../../assets/svg/cart-icon.svg';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

export default (props) => {
	const cartItem = useContext(CartContext);
	const numberOfItem = cartItem.items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);
	return (
		<button
			className={classes.button}
			onClick={props.onClick}>
			<span className={classes.icon}>
				<img
					src={logo}
					alt='cart-logo'></img>
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfItem}</span>
		</button>
	);
};
