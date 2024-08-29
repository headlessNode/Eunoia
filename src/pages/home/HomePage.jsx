import { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import MainBody from './components/MainBody';
import Footer from './components/Footer';

export default function HomePage() {
	const heroRef = useRef(null);
	const data = useLoaderData();

	return (
		<div className="wrapper flex flex-col items-center">
			<div ref={heroRef} className="w-full h-screen flex flex-col items-center bg-hero-img bg-top bg-cover">
				<Header ref={heroRef} />
				<Hero />
			</div>
			<MainBody products={data} />
			<Footer />
		</div>
	);
}
