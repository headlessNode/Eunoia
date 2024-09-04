import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Menu({ isMenuActive }) {
	const menu = useRef(null);

	function menuAnimation(height, pathOne, pathTwo) {
		const tl = gsap
			.timeline()
			.to(menu.current, {
				transformOrigin: 'top center',
				height: height,
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
			? menuAnimation('auto', { d: 'M10 30 L50 70' }, { d: 'M10 70 L50 30' })
			: menuAnimation(0, { d: 'M10 40 L75 40' }, { d: 'M10 60 L75 60' });
	}, [isMenuActive]);

	return (
		<div
			ref={menu}
			className={`menu max-w-8xl w-full pb-5 bg-white px-3 font-medium ${isMenuActive ? 'flex flex-col gap-2' : 'hidden'} overflow-hidden`}
		>
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
			<NavLink to="/about" className="uppercase hover:underline">
				about
			</NavLink>
			<NavLink to="/contact" className="uppercase hover:underline">
				contact
			</NavLink>
		</div>
	);
}

Menu.propTypes = {
	isMenuActive: PropTypes.bool,
};
