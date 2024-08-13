import TopBar from './components/TopBar';
import Header from './components/Header';

export default function HomePage() {
	return (
		<div className="flex flex-col items-center">
			<TopBar />
			<div className="wrapper max-w-8xl w-full border-2 h-screen">
				<Header />
			</div>
		</div>
	);
}
