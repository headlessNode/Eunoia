import Header from '../components/Header';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { useLoaderData } from 'react-router-dom';
import MainBody from './components/MainBody';

export default function MensPage() {
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
