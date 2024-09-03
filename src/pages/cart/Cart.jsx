import Header from '../components/Header';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { ShopContext } from '../../App';
import { useContext, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

function MainBody() {
	const { cartItems, modifyCart } = useContext(ShopContext);
	const quantity = useRef(null);

	function editCart() {
		quantity.current.classList.remove('hidden');
		quantity.current.classList.add('flex');
		quantity.current.classList.add('justify-between');
		quantity.current.classList.add('items-center');
	}

	function handleChange(e, id) {
		if (e.target.value !== '' && e.target.value !== '0') {
			let cartCopy = [...cartItems];
			const prd = cartCopy.filter((item) => item.prd.id === id).pop();
			prd.amount = parseInt(e.target.value);
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
			<div className="main-body w-full flex flex-col items-center">
				<div className="max-w-8xl w-full font-afacad px-3">
					<div className="title py-24">
						<h1 className="text-center font-semibold text-5xl uppercase">Your Cart</h1>
					</div>
					<div className="pb-32 flex flex-col items-center gap-8">
						<p className="text-3xl text-center">Your cart is currently empty.</p>
						<NavLink to="/shop">
							<button className="uppercase bg-blue text-white p-3">continue shopping</button>
						</NavLink>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="main-body w-full flex flex-col items-center">
				<div className="max-w-8xl w-full font-afacad px-3">
					<div className="title py-24">
						<h1 className="text-center font-semibold text-5xl uppercase">Your Cart</h1>
					</div>
					<div className="pb-32 flex flex-col">
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
													className="hidden sm:block p-2 w-32 bg-blue text-white"
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
												className="hidden sm:block border border-black py-1 w-8 h-8 text-center"
												value={item.amount}
												onChange={(e) => handleChange(e, item.prd.id)}
												min={1}
												max={10}
											/>
											<p className="hidden sm:block text-2xl">{`$${item.prd.price * item.amount}`}</p>
										</div>
									</div>
									<div className="w-full flex flex-col gap-4 sm:hidden">
										<div className="flex justify-between">
											<button
												onClick={editCart}
												className="p-2 w-32 bg-blue text-white text-center py-2"
											>
												EDIT
											</button>
											<button
												onClick={() => handleRemoveItem(item.prd.id)}
												className="p-2 w-32 bg-blue text-white"
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
												className="border border-black py-1 w-8 text-center"
											/>
										</div>
									</div>
								</div>
							);
						})}
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
