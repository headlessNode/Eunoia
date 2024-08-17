import { NavLink } from 'react-router-dom';

export default function Hero() {
	return (
		<div className="hero w-full absolute h-screen top-0 left-0 flex flex-col -z-10">
			<img
				src="/images/hero-img.jpg"
				alt="Hero background image"
				className="w-full h-full absolute object-cover object-top -z-10"
			/>
			<div className="hero-cta flex flex-col gap-5 items-center lg:items-start absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 max-w-8xl w-full font-montserrat">
				<h1 className="font-afacad font-bold text-5xl text-center tracking-wide text-white uppercase md:text-6xl lg:text-7xl lg:text-start lg:w-[35rem]">
					where style meets elegance
				</h1>
				<NavLink to="shop">
					<button className="text-white text-xl tracking-wider font-montserrat font-medium uppercase bg-blue px-16 py-4">
						shop
					</button>
				</NavLink>
			</div>
		</div>
	);
}
