import { useRef, forwardRef } from 'react';
import { useGSAP } from '@gsap/react';
import horizontalLoop from './HorizontalLoop';

const TopBar = forwardRef(function TopBar(props, ref) {
	const linksContainer = useRef(null);

	useGSAP(
		() => {
			const items = Array.from(linksContainer.current.children);
			const tl = horizontalLoop(items, { speed: 1, repeat: -1, paddingRight: 80 });
			items.forEach((item) => {
				item.addEventListener('mouseenter', () => tl.pause());
				item.addEventListener('mouseleave', () => tl.resume());
			});
			return () => {
				items.forEach((item) => {
					item.removeEventListener('mouseenter', tl.pause);
					item.removeEventListener('mouseleave', tl.resume);
				});
			};
		},
		{ scope: linksContainer }
	);

	return (
		<div ref={ref} className="top-bar w-full px-3 xl:px-7 py-1 font-montserrat font-medium text-sm bg-blue">
			<div ref={linksContainer} className="links flex gap-20 whitespace-nowrap overflow-hidden">
				<a href="#" className="text-white text-center uppercase w-full hover:underline">
					get upto 65% off
				</a>
				<a href="#" className="text-white text-center uppercase w-full hover:underline">
					free shipping on orders $50+
				</a>
				<a href="#" className="text-white text-center uppercase w-full hover:underline">
					get your $20 bonus reward
				</a>
				<a href="#" className="text-white text-center uppercase w-full hover:underline">
					get upto 65% off
				</a>
				<a href="#" className="text-white text-center uppercase w-full hover:underline">
					free shipping on orders $50+
				</a>
				<a href="#" className="text-white text-center uppercase w-full hover:underline">
					get your $20 bonus reward
				</a>
				<a href="#" className="text-white text-center uppercase w-full hover:underline">
					get upto 65% off
				</a>
				<a href="#" className="text-white text-center uppercase w-full hover:underline">
					free shipping on orders $50+
				</a>
				<a href="#" className="text-white text-center uppercase w-full hover:underline">
					get your $20 bonus reward
				</a>
			</div>
		</div>
	);
});

export default TopBar;
