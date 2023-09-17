import { useReducer } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
	const defaultCartState = {
		items: [],
		totalAmount: 0,
	};

	const cartReducer = (state, action) => {
		if (action.type === 'ADD') {
			const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

			const existingCartItem = state.items[existingCartItemIndex];
			console.log(existingCartItem);
			let updatedItems;
			if (existingCartItem) {
				const updatedItem = {
					...existingCartItem,
					amount: existingCartItem.amount + action.item.amount,
				};
				updatedItems = [...state.items];
				updatedItems[existingCartItemIndex] = updatedItem;
			} else {
				updatedItems = state.items.concat(action.item);
			}

			const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
			return {
				items: updatedItems,
				totalAmount: updatedTotalAmount,
			};
		}
		if (action.type === 'REMOVE') {
			const existingItemIndex = state.items.findIndex((item) => item.id === action.item);
			const existingItem = state.items[existingItemIndex];
			
			const updatedTotalAmount = state.totalAmount - existingItem.price;
			let updatedItems;
			if (existingItem.amount === 1) {
				updatedItems = state.items.filter((item) => item.id !== action.item);
			} else {
				const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
				updatedItems = [...state.items];
				updatedItems[existingItemIndex] = updatedItem;
			}

			return {
				items: updatedItems,
				totalAmount: updatedTotalAmount,
			};
		}

		return defaultCartState;
	};
	const [cartState, disptachCartAction] = useReducer(cartReducer, defaultCartState);
	const addItemToCartHandler = (item) => {
		disptachCartAction({ type: 'ADD', item: item });
	};
	const removeItemFromCartHandler = (id) => {
		disptachCartAction({ type: 'REMOVE', item: id });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};

	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
