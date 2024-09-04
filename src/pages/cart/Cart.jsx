import Header from '../components/Header';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { ShopContext } from '../../App';
import { useContext, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function MainBody() {
	const { cartItems, modifyCart } = useContext(ShopContext);
	const [totalPrice, setTotalPrice] = useState(0);
	const quantity = useRef(null);
	const banner = useRef(null);
	const container = useRef(null);
	const { contextSafe } = useGSAP({ scope: container.current });

	useEffect(() => {
		const cartCpy = [...cartItems];
		let tPrice = totalPrice;
		cartCpy.forEach((item) => {
			tPrice = item.amount * item.prd.price;
		});
		setTotalPrice(tPrice);
	}, [cartItems, totalPrice]);

	const showBanner = contextSafe(() => {
		gsap.timeline()
			.to(banner.current, {
				x: 224,
				ease: 'power.in',
				duration: 0.4,
			})
			.to(banner.current, {
				x: -224,
				ease: 'power.out',
				duration: 0.4,
				delay: 1.5,
				onComplete: () => {
					modifyCart([]);
				},
			});
	});

	function editCart() {
		quantity.current.classList.remove('hidden');
		quantity.current.classList.add('flex');
		quantity.current.classList.add('justify-between');
		quantity.current.classList.add('items-center');
	}

	function handleChange(e, id) {
		const value = parseInt(e.target.value, 10);

		if (!isNaN(value) && value >= 0 && value <= 10) {
			let cartCopy = [...cartItems];
			const prd = cartCopy.filter((item) => item.prd.id === id).pop();
			prd.amount = value;
			modifyCart(cartCopy);
		}
	}

	function handleRemoveItem(id) {
		let cartCopy = [...cartItems];
		cartCopy = cartCopy.filter((item) => item.prd.id !== id);
		modifyCart(cartCopy);
	}

	if (cartItems.length === 0) {
		return (
			<div ref={container} className="main-body px-3 w-full flex flex-col items-center">
				<div ref={banner} className="fixed top-1/3 -left-56 w-56 p-2 bg-blue confirmation">
					<p className="text-white">Thank you for purchasing.</p>
				</div>
				<div className="max-w-8xl w-full font-afacad pb-32">
					<div className="title py-24">
						<h1 className="text-center font-semibold text-5xl uppercase">Your Cart</h1>
					</div>
					<div className="flex flex-col items-center gap-8">
						<p className="text-3xl text-center">Your cart is currently empty.</p>
						<NavLink to="/shop">
							<button className="uppercase bg-blue text-white p-3 hover:bg-lightblue">
								continue shopping
							</button>
						</NavLink>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div ref={container} className="main-body w-full flex flex-col items-center">
				<div ref={banner} className="fixed top-1/3 -left-56 w-56 p-2 bg-blue confirmation">
					<p className="text-white">Thank you for purchasing.</p>
				</div>
				<div className="max-w-8xl w-full font-afacad px-3 pb-32">
					<div className="title py-24">
						<h1 className="text-center font-semibold text-5xl uppercase">Your Cart</h1>
					</div>
					<div className="pb-20 flex flex-col">
						<div className="flex justify-between border-b border-black py-6 px-2">
							<p className="w-2/3">Product</p>
							<div className="flex justify-between w-1/3">
								<p>Price</p>
								<p className="hidden sm:flex">Quantity</p>
								<p className="hidden sm:flex">Total</p>
							</div>
						</div>
						{cartItems.map((item) => {
							return (
								<div
									key={item.prd.id}
									className="flex flex-col gap-4 py-8 border-b border-black border-opacity-20"
								>
									<div className="w-full flex justify-between items-center">
										<div className="w-2/3 flex items-center">
											<img
												className="w-1/6 object-contain"
												src={item.prd.image}
												alt={item.prd.name}
											/>
											<div className="px-4 sm:flex sm:flex-col sm:gap-4">
												<p className="text-2xl">{item.prd.name}</p>
												<button
													onClick={() => handleRemoveItem(item.prd.id)}
													className="hidden sm:block p-2 w-32 bg-blue text-white hover:bg-lightblue"
												>
													Remove
												</button>
											</div>
										</div>
										<div className="flex justify-between w-1/3">
											<p className="text-center text-2xl">{`$${item.prd.price}`}</p>
											<input
												type="number"
												name="quantity"
												id="quantity"
												className="hidden sm:block border border-black py-1 w-9 h-9 text-center"
												value={item.amount}
												onChange={(e) => handleChange(e, item.prd.id)}
												min={1}
												max={10}
											/>
											<p className="hidden sm:block text-2xl">{`$${totalPrice}`}</p>
										</div>
									</div>
									<div className="w-full flex flex-col gap-4 sm:hidden">
										<div className="flex justify-between">
											<button
												onClick={editCart}
												className="p-2 w-32 bg-blue text-white text-center py-2 hover:bg-lightblue"
											>
												EDIT
											</button>
											<button
												onClick={() => handleRemoveItem(item.prd.id)}
												className="p-2 w-32 bg-blue text-white hover:bg-lightblue"
											>
												Remove
											</button>
										</div>
										<div ref={quantity} className="w-full hidden">
											<p>Quantity</p>
											<input
												type="number"
												name="quantity"
												id="quantity"
												onChange={(e) => handleChange(e, item.prd.id)}
												value={item.amount}
												min={1}
												max={10}
												className="border border-black py-1 w-9 h-9 text-center"
											/>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					<div className="flex flex-col gap-12 md:flex-row md:justify-between">
						<div className="md:w-[472px] flex flex-col items-center gap-4">
							<p className="w-full text-lg text-black text-opacity-50">{`Is this a gift? Please let us know if you would like your items wrapped. If you have multiple items in an order, please note they will be bundled together unless otherwise specified in the notes to wrap items individually. If you would like a message included with your gift, simply add it in the box below. Please click on the "Update" button once completed to ensure your message is saved.`}</p>
							<textarea
								name="message"
								id="message"
								cols="50"
								rows="10"
								className="w-full resize-y border border-black p-3"
							></textarea>
						</div>
						<div className="flex flex-col gap-4 items-center">
							<div className="w-[314px] lg:w-[416px] flex justify-between">
								<p className="text-3xl">Subtotal</p>
								<p className="text-3xl">{`$${totalPrice}`}</p>
							</div>
							<div className="w-full sm:w-[314px] lg:w-[416px]">
								<p className="text-center text-black text-opacity-50">
									Tax included and shipping calculated at checkout
								</p>
							</div>
							<div className="w-full sm:w-[314px] lg:w-[416px] flex flex-col items-center gap-8 lg:flex-row">
								<NavLink
									className="w-52 px-3 bg-blue text-white py-2 flex justify-center hover:bg-lightblue"
									to="/shop"
								>
									<button className="uppercase">continue shopping</button>
								</NavLink>
								<button
									onClick={showBanner}
									className="w-52 px-3 bg-blue text-white py-2 uppercase hover:bg-lightblue"
								>
									checkout
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default function Cart() {
	return (
		<div>
			<Header />
			<MainBody />
			<NewsLetter />
			<Footer />
		</div>
	);
}
