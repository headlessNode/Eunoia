import { NavLink } from 'react-router-dom';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Header() {
	const [isMenuActive, setIsMenuActive] = useState(false);
	const menu = useRef(null);
	const headerContainer = useRef(null);

	function showMenu() {
		if (isMenuActive) {
			setIsMenuActive(false);
		} else {
			setIsMenuActive(true);
		}
	}

	function menuAnimation(scale, pathOne, pathTwo) {
		const tl = gsap
			.timeline()
			.to(menu.current, {
				transformOrigin: 'top center',
				scaleY: scale,
				ease: 'power1.in',
				duration: 0.3,
			})
			.to(
				'.menu-icon .svg-line-one',
				{
					attr: pathOne,
					duration: 0.3,
					ease: 'linear',
				},
				'<'
			)
			.to(
				'.menu-icon .svg-line-two',
				{
					attr: pathTwo,
					duration: 0.3,
					ease: 'linear',
				},
				'<'
			);
		return tl;
	}

	useGSAP(() => {
		isMenuActive
			? menuAnimation(1, { d: 'M10 30 L50 70' }, { d: 'M10 70 L50 30' })
			: menuAnimation(0, { d: 'M10 40 L75 40' }, { d: 'M10 60 L75 60' });
	}, [isMenuActive]);

	return (
		<div ref={headerContainer} className="header-container px-3 py-5 w-full flex flex-col z-10">
			<nav className="header font-montserrat flex justify-between items-center">
				<div className="w-full hidden lg:flex lg:justify-start lg:gap-8">
					<NavLink to="shop" className="uppercase hover:underline">
						shop
					</NavLink>
					<NavLink to="category/men" className="uppercase hover:underline">
						men
					</NavLink>
					<NavLink to="category/women" className="uppercase hover:underline">
						women
					</NavLink>
					<NavLink to="category/kids" className="uppercase hover:underline">
						kids
					</NavLink>
				</div>
				<div className="w-full flex justify-start lg:justify-center">
					<NavLink to="/" className="uppercase font-medium text-2xl">
						EUNOIA
					</NavLink>
				</div>
				<div className="w-full hidden lg:flex lg:justify-end lg:gap-8">
					<NavLink to="about" className="uppercase hover:underline">
						about
					</NavLink>
					<NavLink to="contact" className="uppercase hover:underline">
						contact
					</NavLink>
					<button>
						<i className="fa-solid fa-magnifying-glass fa-xl"></i>
					</button>
					<NavLink>
						<i className="fa-solid fa-bag-shopping fa-xl"></i>
					</NavLink>
				</div>
				<div className="menu-icon lg:hidden" onClick={showMenu}>
					<svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
						<path
							className="svg-line-one"
							d="M10 40 L75 40"
							stroke="#000"
							strokeWidth="8"
							strokeLinecap="round"
						/>
						<path
							className="svg-line-two"
							stroke="#000"
							strokeWidth="8"
							strokeLinecap="round"
							d="M10 60 L75 60"
						/>
					</svg>
				</div>
			</nav>
			<div
				ref={menu}
				className={`menu py-5 font-medium relative ${isMenuActive ? 'flex flex-col gap-2' : 'hidden'}`}
			>
				<NavLink to="shop" className="uppercase hover:underline">
					shop
				</NavLink>
				<NavLink to="category/men" className="uppercase hover:underline">
					men
				</NavLink>
				<NavLink to="category/women" className="uppercase hover:underline">
					women
				</NavLink>
				<NavLink to="category/kids" className="uppercase hover:underline">
					kids
				</NavLink>
				<NavLink to="about" className="uppercase hover:underline">
					about
				</NavLink>
				<NavLink to="contact" className="uppercase hover:underline">
					contact
				</NavLink>
			</div>
		</div>
	);
}
