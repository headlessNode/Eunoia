import TopBar from './components/TopBar';
import Header from './components/Header';
import Menu from './components/Menu';
import Hero from './components/Hero';
import { useState } from 'react';

export default function HomePage() {
	const [isMenuActive, setIsMenuActive] = useState(false);
	return (
		<div className="w-full relative flex flex-col items-center">
			<TopBar />
			<div className="wrapper max-w-8xl w-full">
				<Header isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
				<Menu isMenuActive={isMenuActive} />
				<Hero />
			</div>
		</div>
	);
}
