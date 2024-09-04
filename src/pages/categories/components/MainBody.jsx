import { useEffect, useState, useRef } from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Products({ products, categories }) {
	const [itemsToShow, setItemsToShow] = useState([]);
	const ref = useRef(null);
	const { contextSafe } = useGSAP({ scope: ref.current });

	useEffect(() => {
		setItemsToShow([...products]);
	}, [products]);

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

	function handleClick(e) {
		if (e.target.textContent === 'all') {
			setItemsToShow([...products]);
		} else {
			let tmp = [];
			products.forEach((product) => {
				if (product.type === e.target.textContent) {
					tmp.push(product);
				}
			});
			setItemsToShow([...tmp]);
		}
	}

	return (
		<div className="pb-32 flex flex-col gap-6">
			<div className="categories flex gap-4 text-lg">
				{categories.map((category, index) => (
					<button key={index} onClick={handleClick} className="uppercase bg-none p-3 hover:underline">
						{category}
					</button>
				))}
			</div>
			<div ref={ref} className="products flex flex-wrap justify-center gap-6">
				{itemsToShow.map((item) => {
					return (
						<div className="product w-72 flex flex-col gap-4 flex-shrink-0" key={`${item.id}`}>
							<div onMouseEnter={showOverlay} onMouseLeave={hideOverlay} className="relative">
								<div>
									<img src={item.image} alt={item.name} className="w-full h-[432px] object-cover" />
									<div className="overlay hidden opacity-0 w-full h-full absolute top-0 left-0 bg-black bg-opacity-25">
										<NavLink
											to={`/product/${item.id}`}
											className="w-28 text-l bg-white p-3 hover:bg-blue hover:text-white"
										>
											<button className="text-center w-full">Buy Now</button>
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

export default function MainBody({ products, pageName }) {
	const [categories, setCategories] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	let [displayName, setDisplayName] = useState(pageName);

	useEffect(() => {
		let filteredProducts = [];
		let categoryOptions = [];

		if (displayName === 'women') {
			filteredProducts = products.filter((product) => product.category === 'women');
			categoryOptions = ['all', 'shirt', 'suit', 'dress'];
		} else if (displayName === 'men') {
			filteredProducts = products.filter((product) => product.category === 'men');
			categoryOptions = ['all', 'jacket', 'pants', 't-shirt'];
		} else {
			filteredProducts = products.filter((product) => product.category === 'kids');
			setDisplayName('kid');
			categoryOptions = ['all', 'jacket', 'pants', 't-shirt'];
		}

		setFilteredProducts(filteredProducts);
		setCategories(categoryOptions);
	}, [displayName, products]);

	return (
		<div className="main-body w-full flex flex-col items-center">
			<div className="max-w-8xl w-full font-afacad px-3">
				<div className="title flex flex-col items-center gap-8 py-32">
					<h1 className="uppercase text-6xl sm:text-7xl font-semibold text-center">{`${displayName}'s collection`}</h1>
					<BreadCrumbs />
				</div>
				<Products products={filteredProducts} categories={categories} />
			</div>
		</div>
	);
}

MainBody.propTypes = {
	products: PropTypes.array,
	pageName: PropTypes.string,
};

Products.propTypes = {
	products: PropTypes.array,
	categories: PropTypes.array,
};
