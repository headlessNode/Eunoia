import Header from '../components/Header';
import MainBody from './components/MainBody';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { useLoaderData } from 'react-router-dom';

export default function ShopPage() {
	const data = useLoaderData();
	return (
		<div>
			<Header />
			<MainBody products={data} />
			<NewsLetter />
			<Footer />
		</div>
	);
}
