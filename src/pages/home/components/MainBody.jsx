import LogoBar from './LogoBar';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Featured({ featured }) {
	return (
		<div className="best-seller mt-16 flex flex-col gap-12">
			<h2 className="uppercase text-black text-2xl font-semibold">best seller</h2>
			<div className="products flex flex-wrap justify-center items-center gap-16">
				{featured.map((item) => {
					return (
						<div
							className="product w-72 h-96 flex flex-col justify-between rounded-2xl shadow-2xl p-5"
							key={`${item.id}`}
						>
							<img src={`${item.image}`} className="w-96 h-52 object-contain" />
							<p className="text-center text-sm font-semibold">{item.title}</p>
							<NavLink to="shop" className="w-full rounded-md bg-blue hover:bg-lightblue text-white p-3">
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

export default function MainBody({ products }) {
	const [featured, setFeatured] = useState([]);

	useEffect(() => {
		if (products) {
			let featArr = [];
			featArr.push(products[2]);
			featArr.push(products[3]);
			featArr.push(products[16]);
			featArr.push(products[17]);
			setFeatured([...featArr]);
		}
	}, [products]);

	return (
		<div className="main-body w-full flex flex-col items-center">
			<div className="px-3 max-w-8xl w-full font-montserrat">
				<LogoBar />
				<Featured featured={featured} />
				<Exclusive />
				<div className="bg-blue absolute left-0 w-full flex justify-center">
					<div className="news-letter px-3 max-w-8xl w-full py-16 flex flex-col items-center gap-10 md:flex-row md:justify-between font-afacad">
						<p className="text-white font-semibold text-4xl max-w-[360px] w-full text-center sm:text-start">
							Sign up to our newsletter & get 20% Off
						</p>
						<button className="bg-white w-48 py-3 text-center text-xl font-semibold">
							SIGN UP FOR FREE
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
