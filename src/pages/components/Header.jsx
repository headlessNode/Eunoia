import Menu from './Menu';
import { NavLink } from 'react-router-dom';
import { useRef, useState } from 'react';

export default function Header() {
	const headerContainer = useRef(null);
	const [isMenuActive, setIsMenuActive] = useState(false);

	function showMenu() {
		if (isMenuActive) {
			setIsMenuActive(false);
		} else {
			setIsMenuActive(true);
		}
	}

	return (
		<div className="w-full flex flex-col items-center">
			<div
				ref={headerContainer}
				className="header-container w-full bg-white px-3 pt-7 pb-4 flex flex-col items-center gap-4"
			>
				<nav className="header max-w-8xl w-full font-montserrat flex justify-between items-center">
					<div className="w-full hidden lg:flex lg:justify-start lg:gap-8">
						<NavLink to="/shop" className="uppercase hover:underline">
							shop
						</NavLink>
						<NavLink to="/category/men" className="uppercase hover:underline">
							men
						</NavLink>
						<NavLink to="/category/women" className="uppercase hover:underline">
							women
						</NavLink>
						<NavLink to="/category/kids" className="uppercase hover:underline">
							kids
						</NavLink>
					</div>
					<div className="w-full flex justify-start lg:justify-center">
						<NavLink to="/" className="uppercase font-medium text-2xl">
							EUNOIA
						</NavLink>
					</div>
					<div className="w-full hidden lg:flex lg:justify-end lg:gap-8">
						<NavLink to="/about" className="uppercase hover:underline">
							about
						</NavLink>
						<NavLink to="/contact" className="uppercase hover:underline">
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
				<Menu isMenuActive={isMenuActive} />
			</div>
		</div>
	);
}
