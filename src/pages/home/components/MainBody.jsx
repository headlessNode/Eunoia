import LogoBar from './LogoBar';
import { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Featured({ featured }) {
	return (
		<div className="best-seller mt-16 flex flex-col gap-12 font-afacad">
			<h2 className="uppercase text-black text-5xl font-semibold">best seller</h2>
			<div className="products flex flex-wrap justify-center items-center gap-16">
				{featured.map((item) => {
					return (
						<div
							className="product w-72 h-96 flex flex-col justify-between rounded-2xl shadow-2xl p-5"
							key={`${item.id}`}
						>
							<img src={item.image} className="w-96 h-52 object-contain" />
							<p className="text-center text-lg font-semibold">{item.title}</p>
							<NavLink
								to="shop"
								className="w-full text-lg rounded-md bg-blue hover:bg-lightblue text-white p-3"
							>
								<button className="text-center w-full">Shop Now</button>
							</NavLink>
						</div>
					);
				})}
			</div>
		</div>
	);
}

function Exclusive() {
	return (
		<div className="exclusive relative">
			<div className="py-32 flex justify-center">
				<video
					src="/videos/exclusive.mp4"
					muted
					loop
					autoPlay
					controls={false}
					aria-label="Exclusive video"
					className="exclusive-video py-5 h-[600px] w-full object-cover"
				></video>
				<div className="absolute px-3 flex flex-col gap-2 text-white sm:w-[450px] top-64 sm:top-1/2 sm:left-10">
					<h1 className="font-semibold text-4xl">Eunoia Exclusive Deal</h1>
					<p className="text-base">
						Discover the epitome of style with Eunoia Exclusives. Elevate your wardrobe with premium brands,
						where luxury meets fashion. Immerse yourself in a world of unparalleled elegance. Explore now!
					</p>
					<NavLink to="shop" className="py-4 flex gap-4 items-center">
						<p className="font-semibold">Visit Shop</p>
						<i className="fa-solid fa-arrow-right"></i>
					</NavLink>
				</div>
			</div>
		</div>
	);
}

function Carousel({ items }) {
	const cards = useRef([]);
	const container = useRef(null);
	const { contextSafe } = useGSAP({ scope: container });
	const [currentIndex, setCurrentIndex] = useState(0);
	const totalItems = items.length;

	const handleClickRight = contextSafe(() => {
		const arr = gsap.utils.toArray(cards.current);
		if (currentIndex < totalItems - 4) {
			setCurrentIndex((prevIndex) => prevIndex + 1);
			arr.forEach((item) => {
				gsap.to(item, {
					xPercent: '-=100',
					duration: 1,
					ease: 'linear',
				});
			});
		}
	});

	const handleClickLeft = contextSafe(() => {
		const arr = gsap.utils.toArray(cards.current);
		if (currentIndex > 0) {
			setCurrentIndex((prevIndex) => prevIndex - 1);
			arr.forEach((item) => {
				gsap.to(item, {
					xPercent: '+=100',
					duration: 1,
					ease: 'linear',
				});
			});
		}
	});

	return (
		<div className="carousel w-full flex justify-center">
			<div className="mx-3 max-w-8xl w-full font-afacad relative">
				<div className="flex flex-col items-center gap-10">
					<div className="w-full flex justify-center md:justify-start">
						<h2 className="font-semibold text-5xl text-black">YOU MAY ALSO LIKE</h2>
					</div>
					<div ref={container} className="overflow-hidden w-72 sm:w-[592px] md:w-[894px] xl:w-[1200px] flex">
						{items.map((item, i) => {
							return (
								<div
									className="product w-72 h-96 flex flex-col shrink-0 rounded-2xl shadow-2xl p-5"
									key={`${item.id}`}
									ref={(el) => (cards.current[i] = el)}
								>
									<img src={item.image} className="w-96 h-52 object-contain" />
									<p className="text-center text-lg font-semibold">{item.title}</p>
									<NavLink
										to="shop"
										className="w-full text-lg rounded-md bg-blue hover:bg-lightblue text-white p-3"
									>
										<button className="text-center w-full">Shop Now</button>
									</NavLink>
								</div>
							);
						})}
					</div>
					<button
						onClick={handleClickLeft}
						className="btn-left absolute top-1/2 left-0 -translate-y-1/2 w-12 h-12 rounded-full bg-black bg-opacity-20"
					>
						<i className="fa-solid fa-chevron-left fa-xl"></i>
					</button>
					<button
						onClick={handleClickRight}
						className="btn-right absolute top-1/2 right-0 -translate-y-1/2 w-12 h-12 rounded-full bg-black bg-opacity-20"
					>
						<i className="fa-solid fa-chevron-right fa-xl"></i>
					</button>
				</div>
			</div>
		</div>
	);
}

export default function MainBody({ products }) {
	const [featured, setFeatured] = useState([]);
	const [carouselItems, setCarouselItems] = useState([]);

	useEffect(() => {
		if (products) {
			let featArr = [];
			let carArr = [];
			featArr.push(products[2]);
			featArr.push(products[3]);
			featArr.push(products[16]);
			featArr.push(products[17]);
			carArr.push(products[1]);
			carArr.push(products[4]);
			carArr.push(products[5]);
			carArr.push(products[6]);
			carArr.push(products[7]);
			carArr.push(products[8]);
			carArr.push(products[9]);
			carArr.push(products[10]);
			carArr.push(products[11]);
			setFeatured([...featArr]);
			setCarouselItems([...carArr]);
		}
	}, [products]);

	return (
		<div className="main-body w-full flex flex-col items-center">
			<div className="px-3 max-w-8xl w-full font-montserrat">
				<LogoBar />
				<Featured featured={featured} />
				<Exclusive />
				<Carousel items={carouselItems} />
			</div>
			<div className="bg-blue w-full flex justify-center">
				<div className="news-letter px-3 max-w-8xl w-full py-16 flex flex-col items-center gap-10 md:flex-row md:justify-between font-afacad">
					<p className="text-white font-semibold text-4xl max-w-[360px] w-full text-center sm:text-start">
						Sign up to our newsletter & get 20% Off
					</p>
					<button className="bg-white w-48 py-3 text-center text-xl font-semibold">SIGN UP FOR FREE</button>
				</div>
			</div>
		</div>
	);
}
