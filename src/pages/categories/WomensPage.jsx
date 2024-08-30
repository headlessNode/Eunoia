import Header from '../components/Header';
import MainBody from './components/MainBody';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { useLoaderData, useLocation } from 'react-router-dom';

export default function WomensPage() {
	const data = useLoaderData();
	const location = useLocation();
	let pathname = location.pathname.split('/').filter((x) => x && x !== 'category');
	return (
		<div>
			<Header />
			<MainBody products={data} pageName={pathname.pop()} />
			<NewsLetter />
			<Footer />
		</div>
	);
}
