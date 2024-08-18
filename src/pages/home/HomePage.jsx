import Header from './components/Header';
import Hero from './components/Hero';
import MainBody from './components/MainBody';

export default function HomePage() {
	return (
		<div className="wrapper flex flex-col items-center">
			<div className="w-screen h-screen flex flex-col items-center bg-hero-img bg-top bg-cover">
				<Header />
				<Hero />
			</div>
			<MainBody />
		</div>
	);
}
