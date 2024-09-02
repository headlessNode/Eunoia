import Header from '../components/Header';
import MainBody from './components/MainBody';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function AboutPage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<Header />
			<MainBody />
			<NewsLetter />
			<Footer />
		</div>
	);
}
