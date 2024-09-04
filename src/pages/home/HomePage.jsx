import { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import MainBody from './components/MainBody';
import Footer from './components/Footer';
import { useEffect } from 'react';

export default function HomePage() {
	const heroRef = useRef(null);
	const data = useLoaderData();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="wrapper">
			<div ref={heroRef} className="w-full px-3 h-screen flex flex-col items-center bg-hero-img bg-top bg-cover">
				<Header ref={heroRef} />
				<Hero />
			</div>
			<MainBody products={data} />
			<Footer />
		</div>
	);
}
