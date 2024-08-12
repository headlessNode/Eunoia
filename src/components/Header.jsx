import { NavLink } from 'react-router-dom';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

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

	return (
		<div ref={headerContainer} className="header-container px-3 py-5 w-full flex flex-col">
			<nav className="header font-montserrat flex justify-between items-center">
				<div className="w-full hidden lg:flex lg:justify-start lg:gap-8">
					<NavLink className="uppercase hover:underline">shop</NavLink>
					<NavLink className="uppercase hover:underline">men</NavLink>
					<NavLink className="uppercase hover:underline">women</NavLink>
					<NavLink className="uppercase hover:underline">kids</NavLink>
				</div>
				<div className="w-full flex justify-start lg:justify-center">
					<NavLink to="/" className="uppercase font-medium text-2xl">
						EUNOIA
					</NavLink>
				</div>
				<div className="w-full hidden lg:flex lg:justify-end lg:gap-8">
					<NavLink className="uppercase hover:underline">about</NavLink>
					<NavLink className="uppercase hover:underline">contact</NavLink>
					<button>
						<i className="fa-solid fa-magnifying-glass fa-xl"></i>
					</button>
					<NavLink>
						<i className="fa-solid fa-bag-shopping fa-xl"></i>
					</NavLink>
				</div>
				<div className="menu-icon lg:hidden" onClick={showMenu}>
					<svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
						<path d="M10 30h80M10 60h80" stroke="#000" strokeWidth="8" strokeLinecap="round" />
					</svg>
				</div>
			</nav>
			<div ref={menu} className={`menu relative ${isMenuActive ? 'flex flex-col gap-2' : 'hidden'}`}>
				<NavLink className="uppercase hover:underline">shop</NavLink>
				<NavLink className="uppercase hover:underline">men</NavLink>
				<NavLink className="uppercase hover:underline">women</NavLink>
				<NavLink className="uppercase hover:underline">kids</NavLink>
				<NavLink className="uppercase hover:underline">about</NavLink>
				<NavLink className="uppercase hover:underline">contact</NavLink>
			</div>
		</div>
	);
}
