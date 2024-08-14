import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';

export default function HomePage() {
	return (
		<div className="absolute w-full flex flex-col items-center">
			<TopBar />
			<div className="wrapper max-w-8xl w-full">
				<Header />
				<Hero />
			</div>
		</div>
	);
}
