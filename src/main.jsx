import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './pages/home/HomePage.jsx';
import ShopPage from './pages/shop/ShopPage.jsx';
import AboutPage from './pages/about/AboutPage.jsx';
import ContactPage from './pages/contact/ContactPage.jsx';
import MensPage from './pages/categories/MensPage.jsx';
import WomensPage from './pages/categories/WomensPage.jsx';
import KidsPage from './pages/categories/KidsPage.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: 'about',
		element: <AboutPage />,
	},
	{
		path: 'contact',
		element: <ContactPage />,
	},
	{
		path: 'shop',
		element: <ShopPage />,
	},
	{
		path: 'category/men',
		element: <MensPage />,
	},
	{
		path: 'category/women',
		element: <WomensPage />,
	},
	{
		path: 'category/kids',
		element: <KidsPage />,
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
