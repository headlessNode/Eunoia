import { NavLink } from 'react-router-dom';

export default function Hero() {
	return (
		<div className="hero w-full h-full lg:absolute lg:h-screen lg:top-0 lg:left-0 flex flex-col lg:items-center bg-hero-img bg-cover bg-top lg:-z-10">
			<div className="hero-cta h-full py-64 md:px-3 flex flex-col gap-5 items-center justify-center md:items-start max-w-8xl w-full font-montserrat">
				<h1 className="font-afacad font-bold text-5xl text-center tracking-wide text-white uppercase md:text-6xl lg:text-7xl md:text-start lg:w-[35rem] md:w-[30rem] sm:w-1/2">
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
