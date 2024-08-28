import LogoBar from './LogoBar';
import { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import horizontalLoop from './HorizontalLoop';

function Featured({ featured }) {
	const featuredRef = useRef(null);
	const { contextSafe } = useGSAP({ scope: featuredRef.current });

	const showOverlay = contextSafe((e) => {
		const item = e.target.parentNode;
		const overlay = item.querySelector('.overlay');
		overlay.classList.remove('hidden');
		overlay.classList.add('flex');
		overlay.classList.add('justify-center');
		overlay.classList.add('items-center');
		gsap.to(overlay, {
			opacity: 1,
			duration: 0.3,
			ease: 'linear',
		});
	});

	const hideOverlay = contextSafe((e) => {
		const item = e.target.parentNode;
		const overlay = item.querySelector('.overlay');
		gsap.to(overlay, {
			opacity: 0,
			duration: 0.3,
			ease: 'linear',
			onComplete: () => {
				overlay.classList.add('hidden');
				overlay.classList.remove('flex');
				overlay.classList.remove('justify-center');
				overlay.classList.remove('items-center');
			},
		});
	});

	return (
		<div className="best-seller mt-16 flex flex-col gap-12 font-afacad">
			<h2 className="uppercase text-black text-5xl font-semibold">best seller</h2>
			<div ref={featuredRef} className="products flex flex-wrap justify-center items-center gap-5">
				{featured.map((item) => {
					return (
						<div className="product w-72 flex flex-col gap-4 flex-shrink-0" key={`${item.id}`}>
							<div onMouseEnter={showOverlay} onMouseLeave={hideOverlay} className="relative">
								<div>
									<img src={item.image} alt={item.name} className="w-full h-[432px] object-cover" />
									<div className="overlay hidden opacity-0 w-full h-full absolute top-0 left-0 bg-black bg-opacity-25">
										<NavLink to="shop" className="w-28 text-l bg-white p-3">
											<button className="text-center w-full">Shop Now</button>
										</NavLink>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start text-lg font-semibold">
								<p className="text-nowrap text-ellipsis overflow-hidden">{item.name}</p>
								<p className="text-nowrap text-ellipsis overflow-hidden">${item.price}</p>
							</div>
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

function Carousel({ carouselItems }) {
	const carousel = useRef(null);
	const { contextSafe } = useGSAP({ scope: carousel.current });
	const itemsRef = useRef([]);
	const [refsReady, setRefsReady] = useState(false);
	const timeline = useRef();

	useEffect(() => {
		if (itemsRef.current.length > 0) {
			const arr = gsap.utils.toArray(itemsRef.current);
			console.log(arr);
			timeline.current = horizontalLoop(arr, { repeat: -1, paddingRight: 16 });
		}
	}, [refsReady]);

	const setItemsRef = (el, i) => {
		if (el && !itemsRef.current[i]) {
			itemsRef.current[i] = el;
			if (i === carouselItems.length - 1) {
				setRefsReady(true);
			}
		}
	};

	const showOverlay = contextSafe((e) => {
		const item = e.target.parentNode;
		const overlay = item.querySelector('.overlay');
		overlay.classList.remove('hidden');
		overlay.classList.add('flex');
		overlay.classList.add('justify-center');
		overlay.classList.add('items-center');
		gsap.to(overlay, {
			opacity: 1,
			duration: 0.3,
			ease: 'linear',
		});
	});

	const hideOverlay = contextSafe((e) => {
		const item = e.target.parentNode;
		const overlay = item.querySelector('.overlay');
		gsap.to(overlay, {
			opacity: 0,
			duration: 0.3,
			ease: 'linear',
			onComplete: () => {
				overlay.classList.add('hidden');
				overlay.classList.remove('flex');
				overlay.classList.remove('justify-center');
				overlay.classList.remove('items-center');
			},
		});
	});

	const showNext = contextSafe(() => {
		timeline.current.next({ duration: 1, ease: 'power1.inOut' });
	});

	const showPrevious = contextSafe(() => {
		timeline.current.previous({ duration: 1, ease: 'power1.inOut' });
	});

	return (
		<div className="pb-32 w-full flex flex-col gap-12 font-afacad">
			<div className="flex justify-start">
				<h1 className="text-5xl font-semibold">YOU MAY ALSO LIKE</h1>
			</div>
			<div className="flex justify-center">
				<div
					ref={carousel}
					className="relative w-72 sm:w-[592px] min-[940px]:w-[896px] xl:w-[1200px] carousel overflow-hidden"
				>
					<div className="flex gap-4">
						{carouselItems.map((item, i) => {
							return (
								<div
									ref={(el) => setItemsRef(el, i)}
									className="carousel-item w-72 flex flex-col gap-4 flex-shrink-0"
									key={`${item.id}`}
								>
									<div onMouseEnter={showOverlay} onMouseLeave={hideOverlay} className="relative">
										<div>
											<img
												src={item.image}
												alt={item.name}
												className="w-full h-[432px] object-cover"
											/>
											<div className="overlay hidden opacity-0 w-full h-full absolute top-0 left-0 bg-black bg-opacity-25">
												<NavLink to="shop" className="w-28 text-l bg-white p-3">
													<button className="text-center w-full">Shop Now</button>
												</NavLink>
											</div>
										</div>
									</div>
									<div className="flex flex-col items-start text-lg font-semibold">
										<p className="text-nowrap text-ellipsis overflow-hidden">{item.name}</p>
										<p className="text-nowrap text-ellipsis overflow-hidden">${item.price}</p>
									</div>
								</div>
							);
						})}
					</div>
					<button
						onClick={showPrevious}
						className="absolute top-1/2 left-4 -translate-y-full btn-prev w-10 h-10 rounded-full bg-white bg-opacity-50 flex justify-center items-center"
					>
						<i className="fa-solid fa-chevron-left"></i>
					</button>
					<button
						onClick={showNext}
						className="absolute top-1/2 right-4 -translate-y-full btn-next w-10 h-10 rounded-full bg-white bg-opacity-50 flex justify-center items-center"
					>
						<i className="fa-solid fa-chevron-right"></i>
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
			featArr.push(products[0]);
			featArr.push(products[24]);
			featArr.push(products[3]);
			featArr.push(products[23]);
			carArr.push(products[30]);
			carArr.push(products[1]);
			carArr.push(products[22]);
			carArr.push(products[25]);
			carArr.push(products[4]);
			carArr.push(products[27]);
			carArr.push(products[19]);
			carArr.push(products[2]);
			setFeatured([...featArr]);
			setCarouselItems([...carArr]);
		}
	}, [products]);

	return (
		<div className="main-body px-3 w-full flex flex-col items-center">
			<div className="max-w-8xl w-full font-montserrat">
				<LogoBar />
				<Featured featured={featured} />
				<Exclusive />
				<Carousel carouselItems={carouselItems} />
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

MainBody.propTypes = {
	products: PropTypes.array,
};

Carousel.propTypes = {
	carouselItems: PropTypes.array,
};

Featured.propTypes = {
	featured: PropTypes.array,
};
