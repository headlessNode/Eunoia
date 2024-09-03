import Header from '../components/Header';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { ShopContext } from '../../App';
import { useLoaderData, useParams } from 'react-router-dom';
import { useEffect, useState, useContext, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function MainBody() {
	const { id } = useParams();
	const data = useLoaderData();
	const [prd, setPrd] = useState({});
	const [cnfrmTxt, setCnfrmTxt] = useState('');
	const { addToCart } = useContext(ShopContext);
	const quantity = useRef(null);
	const inputContainer = useRef(null);
	const container = useRef(null);
	const banner = useRef(null);
	const { contextSafe } = useGSAP({ scope: container.current });

	useEffect(() => {
		const pd = data.filter((item) => item.id === id);
		setPrd(pd.pop());
	}, [data, id]);

	const showBanner = contextSafe(() => {
		gsap.timeline()
			.to(banner.current, {
				x: 224,
				ease: 'linear',
				duration: 0.4,
			})
			.to(banner.current, {
				x: -224,
				ease: 'linear',
				duration: 0.3,
				delay: 2,
			});
	});

	function addItemToCart() {
		const value = quantity.current.value !== '' ? parseInt(quantity.current.value) : '';
		if (value >= 1 && value <= 10) {
			const item = {
				prd: prd,
				amount: parseInt(quantity.current.value),
			};
			addToCart(item);
			setCnfrmTxt('Added to Cart');
			showBanner();
		} else {
			if (value === '') {
				setCnfrmTxt('Please choose a valid amount.');
				showBanner();
			} else {
				setCnfrmTxt('Limited Stock.');
				showBanner();
			}
		}
	}

	return (
		<div ref={container} className="main-body w-full flex flex-col items-center">
			<div ref={banner} className="fixed top-1/3 -left-56 w-56 p-2 bg-blue confirmation">
				<p className="text-white">{cnfrmTxt}</p>
			</div>
			<div className="max-w-8xl w-full font-afacad px-3">
				<div className="my-24 flex flex-col items-center sm:flex-row sm:items-start gap-7">
					<img src={prd.image} alt={prd.name} className="w-96 object-cover" />
					<div className="specs flex flex-col gap-6">
						<div className="flex flex-col gap-4">
							<h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl">{prd.name}</h1>
							<p className="font-semibold text-2xl">{`$${prd.price}`}</p>
							<p className="text-xl">{prd.description}</p>
						</div>
						<div ref={inputContainer} className="flex gap-4">
							<input
								ref={quantity}
								type="number"
								name="quantity"
								id="quantity"
								className="px-2 text-center border border-black w-16"
								placeholder="0"
								min={1}
								max={10}
							/>
							<button
								onClick={addItemToCart}
								className="bg-blue uppercase text-white p-4 hover:bg-lightblue"
							>
								add to cart
							</button>
						</div>
						<div className="flex flex-col gap-3">
							<h3 className="uppercase font-semibold text-2xl">size and fit</h3>
							<ul className="list-disc list-inside">
								<li className="text-xl">{'Regular Fit'}</li>
								<li className="text-xl">{"Chest 30''"}</li>
								<li className="text-xl">{"Waist 25.5''"}</li>
								<li className="text-xl">{"Hips 35''"}</li>
								<li className="text-xl">{"Height 5'8''"}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Product() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<Header />
			<MainBody />
			<NewsLetter />
			<Footer />
		</div>
	);
}
