import TopBar from './TopBar';
import Menu from './Menu';
import { NavLink } from 'react-router-dom';
import { ShopContext } from '../../../App';
import { forwardRef, useRef, useState, useContext } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Header = forwardRef(function Header(props, ref) {
	const headerContainer = useRef(null);
	const topBar = useRef(null);
	const [isMenuActive, setIsMenuActive] = useState(false);
	const { cartItems } = useContext(ShopContext);

	function showMenu() {
		if (isMenuActive) {
			setIsMenuActive(false);
		} else {
			setIsMenuActive(true);
		}
	}

	useGSAP(() => {
		const mq = gsap.matchMedia();

		mq.add('(min-width: 1024px)', () => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ref.current,
					start: 'top 40%',
					//onEnter, onLeave, onEnterBack, onLeaveBack
					toggleActions: 'play none none reverse',
					markers: true,
				},
			});
			tl.to(headerContainer.current, {
				background: '#FFFFFF',
			});
		});
	});

	return (
		<div className="fixed w-full flex flex-col items-center z-10">
			<TopBar ref={topBar} />
			<div
				ref={headerContainer}
				className="header-container w-full bg-white lg:bg-whiteTransparent px-3 py-4 flex flex-col items-center gap-4"
			>
				<nav className="header max-w-8xl w-full font-montserrat flex justify-between items-center">
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
						<NavLink to="/cart" className="relative">
							<div className="relative">
								<i className="fa-solid fa-bag-shopping fa-xl"></i>
								<div className="absolute top-3 left-2 bg-lightblue text-white h-4 w-4 flex justify-center items-center font-semibold text-sm rounded-sm">
									<p>{cartItems.length}</p>
								</div>
							</div>
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
});

export default Header;
