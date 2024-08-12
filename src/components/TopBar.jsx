import { useRef, forwardRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const TopBar = forwardRef(function TopBar(props, ref) {
	const linksContainer = useRef(null);

	function horizontalLoop(items, config) {
		items = gsap.utils.toArray(items);
		config = config || {};
		let tl = gsap.timeline({ repeat: config.repeat, paused: config.paused, defaults: { ease: 'none' } }),
			length = items.length,
			startX = items[0].offsetLeft,
			times = [],
			widths = [],
			xPercents = [],
			curIndex = 0,
			pixelsPerSecond = (config.speed || 1) * 100,
			snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
			totalWidth,
			curX,
			distanceToStart,
			distanceToLoop,
			item,
			i;
		gsap.set(items, {
			// convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
			xPercent: (i, el) => {
				let w = (widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px')));
				xPercents[i] = snap(
					(parseFloat(gsap.getProperty(el, 'x', 'px')) / w) * 100 + gsap.getProperty(el, 'xPercent')
				);
				return xPercents[i];
			},
		});
		gsap.set(items, { x: 0 });
		totalWidth =
			items[length - 1].offsetLeft +
			(xPercents[length - 1] / 100) * widths[length - 1] -
			startX +
			items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], 'scaleX') +
			(parseFloat(config.paddingRight) || 0);
		for (i = 0; i < length; i++) {
			item = items[i];
			curX = (xPercents[i] / 100) * widths[i];
			distanceToStart = item.offsetLeft + curX - startX;
			distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, 'scaleX');
			tl.to(
				item,
				{
					xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
					duration: distanceToLoop / pixelsPerSecond,
				},
				0
			)
				.fromTo(
					item,
					{ xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100) },
					{
						xPercent: xPercents[i],
						duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
						immediateRender: false,
					},
					distanceToLoop / pixelsPerSecond
				)
				.add('label' + i, distanceToStart / pixelsPerSecond);
			times[i] = distanceToStart / pixelsPerSecond;
		}
		function toIndex(index, vars) {
			vars = vars || {};
			Math.abs(index - curIndex) > length / 2 && (index += index > curIndex ? -length : length); // always go in the shortest direction
			let newIndex = gsap.utils.wrap(0, length, index),
				time = times[newIndex];
			if (time > tl.time() !== index > curIndex) {
				// if we're wrapping the timeline's playhead, make the proper adjustments
				vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
				time += tl.duration() * (index > curIndex ? 1 : -1);
			}
			curIndex = newIndex;
			vars.overwrite = true;
			return tl.tweenTo(time, vars);
		}
		tl.next = (vars) => toIndex(curIndex + 1, vars);
		tl.previous = (vars) => toIndex(curIndex - 1, vars);
		tl.current = () => curIndex;
		tl.toIndex = (index, vars) => toIndex(index, vars);
		tl.times = times;
		return tl;
	}

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
		<div ref={ref} className="top-bar relative w-full px-5 py-1 font-montserrat font-medium text-sm bg-blue">
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
			</div>
		</div>
	);
});

export default TopBar;
