import { useRef, useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MainBody from './components/MainBody';
import Footer from './components/Footer';

export default function HomePage() {
	const heroRef = useRef(null);
	const [products, setProducts] = useState(null);

	function getProducts() {
		return fetch(`/products/products.json`)
			.then((res) => {
				if (!res.ok) {
					throw new Error(`${res.status} ${res.statusText}`);
				}
				return res.json();
			})
			.then((data) => {
				setProducts(data);
			})
			.catch((error) => {
				console.error('Error fetching products:', error);
			});
	}

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div className="wrapper flex flex-col items-center">
			<div ref={heroRef} className="w-full h-screen flex flex-col items-center bg-hero-img bg-top bg-cover">
				<Header ref={heroRef} />
				<Hero />
			</div>
			<MainBody products={products} />
			<Footer />
		</div>
	);
}
