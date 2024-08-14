export default function Hero() {
	return (
		<div className="hero absolute top-0 left-0 w-full h-screen -z-10 bg-hero-img bg-cover">
			<div className="hero-cta relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-8xl w-full font-montserrat">
				<h1 className="font-afacad font-bold text-5xl text-center tracking-wide text-white uppercase md:text-6xl lg:text-7xl lg:text-start lg:w-[35rem]">
					where style meets elegance
				</h1>
			</div>
		</div>
	);
}
