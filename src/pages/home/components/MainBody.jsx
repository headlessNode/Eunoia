import LogoBar from './LogoBar';
import { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

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
		<div className="main-body px-3 max-w-8xl w-full h-screen font-montserrat">
			<LogoBar />
			<Featured featured={featured} />
		</div>
	);
}
