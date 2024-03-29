import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './store/CartProvider';

function App() {
	const [cartIsShown, setCardIsShown] = useState(false);

	const showCartHandler = () => {
		setCardIsShown(true);
	};
	const hideCartHandler = () => {
		setCardIsShown(false);
	};

	return (
		<CartProvider>
			{cartIsShown && <Cart onClose={hideCartHandler}/>}
			<Header onShowCart={showCartHandler} />
			<main>
				<Meals></Meals>
			</main>
		</CartProvider>
	);
}

export default App;
