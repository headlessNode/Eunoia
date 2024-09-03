import HomePage from './pages/home/HomePage.jsx';
import ShopPage from './pages/shop/ShopPage.jsx';
import AboutPage from './pages/about/AboutPage.jsx';
import ContactPage from './pages/contact/ContactPage.jsx';
import MensPage from './pages/categories/MensPage.jsx';
import WomensPage from './pages/categories/WomensPage.jsx';
import KidsPage from './pages/categories/KidsPage.jsx';
import Product from './pages/product/Product.jsx';
import Cart from './pages/cart/Cart.jsx';
import loader from './loader.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createContext, useState } from 'react';
import './index.css';

export const ShopContext = createContext({
	cartItems: [],
	addToCart: () => {},
});

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		loader: loader,
	},
	{
		path: 'about',
		element: <AboutPage />,
		loader: loader,
	},
	{
		path: 'contact',
		element: <ContactPage />,
		loader: loader,
	},
	{
		path: 'shop',
		element: <ShopPage />,
		loader: loader,
	},
	{
		path: 'category/men',
		element: <MensPage />,
		loader: loader,
	},
	{
		path: 'category/women',
		element: <WomensPage />,
		loader: loader,
	},
	{
		path: 'category/kids',
		element: <KidsPage />,
		loader: loader,
	},
	{
		path: 'product/:id',
		element: <Product />,
		loader: loader,
	},
	{
		path: 'cart',
		element: <Cart />,
		loader: loader,
	},
]);

export default function App() {
	const [cartItems, setCartItems] = useState([]);

	function addToCart(item) {
		let arr = [...cartItems];
		arr.push(item);
		setCartItems([...arr]);
	}

	function modifyCart(itemsArray) {
		setCartItems([...itemsArray]);
	}

	return (
		<ShopContext.Provider value={{ cartItems, addToCart, modifyCart }}>
			<RouterProvider router={router} />
		</ShopContext.Provider>
	);
}
