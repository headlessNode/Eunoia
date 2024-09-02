import Header from '../components/Header';
import MainBody from './components/MainBody';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';

export default function MensPage() {
	const data = useLoaderData();
	const location = useLocation();
	let pathname = location.pathname.split('/').filter((x) => x && x !== 'category');

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<Header />
			<MainBody products={data} pageName={pathname.pop()} />
			<NewsLetter />
			<Footer />
		</div>
	);
}
