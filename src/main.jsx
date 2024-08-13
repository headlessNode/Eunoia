import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './pages/HomePage.jsx';
import ShopPage from './pages/ShopPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import MensPage from './pages/MensPage.jsx';
import WomensPage from './pages/WomensPage.jsx';
import KidsPage from './pages/KidsPage.jsx';
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
