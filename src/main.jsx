import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './pages/home/HomePage.jsx';
import ShopPage from './pages/shop/ShopPage.jsx';
import AboutPage from './pages/about/AboutPage.jsx';
import ContactPage from './pages/contact/ContactPage.jsx';
import MensPage from './pages/categories/MensPage.jsx';
import WomensPage from './pages/categories/WomensPage.jsx';
import KidsPage from './pages/categories/KidsPage.jsx';
import loader from './loader.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

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
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
