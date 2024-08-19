import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
	const btn = useRef(null);
	const circle = useRef(null);
	const text = useRef(null);
	const { contextSafe } = useGSAP({ scope: btn.current });

	const handleMouseEnter = contextSafe(() => {
		gsap.timeline({ duration: 0.3, ease: 'linear' })
			.to(circle.current, {
				attr: {
					r: 160,
				},
			})
			.to(
				text.current,
				{
					attr: {
						fill: '#FFFFFF',
					},
				},
				'<'
			);
	});

	const handleMouseLeave = contextSafe(() => {
		gsap.timeline()
			.to(circle.current, {
				attr: {
					r: 5,
				},
			})
			.to(
				text.current,
				{
					attr: {
						fill: '#000000',
					},
				},
				'<'
			);
	});

	return (
		<div className="hero max-w-8xl w-full h-full flex flex-col lg:items-center">
			<div className="hero-cta w-full h-full font-montserrat px-3 flex flex-col gap-10 items-center justify-center md:items-start">
				<h1 className="font-afacad font-bold text-5xl text-center tracking-wide text-white uppercase md:text-6xl lg:text-7xl md:text-start lg:w-[35rem] md:w-[30rem] sm:w-1/2">
					where style meets elegance
				</h1>
				<NavLink
					to="shop"
					className="rounded-full overflow-hidden"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<svg ref={btn} viewBox="0 0 160 60" width={160} height={60}>
						<rect width={160} height={60} rx={25} ry={25} fill="#FFFFFF" />
						<circle ref={circle} r={5} cy={30} cx={20} fill="#4170e8" />
						<text
							ref={text}
							className="font-montserrat font-medium"
							transform="translate(85, 36)"
							textAnchor="middle"
							fill="#000000"
						>
							SHOP NOW
						</text>
					</svg>
				</NavLink>
			</div>
		</div>
	);
}
