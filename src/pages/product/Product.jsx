import Header from '../components/Header';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

function MainBody() {
	const { id } = useParams();

	return (
		<div className="main-body w-full flex flex-col items-center">
			<div className="max-w-8xl w-full font-afacad px-3">
				<h1>{id}</h1>
			</div>
		</div>
	);
}

export default function Product() {
	return (
		<div>
			<Header />
			<MainBody />
			<NewsLetter />
			<Footer />
		</div>
	);
}
