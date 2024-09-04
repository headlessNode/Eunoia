import BreadCrumbs from '../../components/BreadCrumbs';

export default function MainBody() {
	return (
		<div className="main-body px-3 w-full flex flex-col items-center">
			<div className="max-w-8xl w-full font-afacad">
				<div className="title flex flex-col items-center gap-8 py-32">
					<h1 className="text-7xl font-semibold text-center">ABOUT US</h1>
					<BreadCrumbs />
				</div>
				<div>
					<img src="/images/about.avif" alt="image" className="w-full h-[400px] object-cover object-top" />
					<div className="pt-16 flex flex-col items-center sm:flex-row sm: justify-between">
						<div className="sm:w-1/5 h-40 flex flex-col justify-center gap-4">
							<h3 className="font-semibold text-2xl text-center sm:text-start">SHOP ONLINE</h3>
							<p className="text-center sm:text-start">
								Explore a vast collection of premium clothing from the comfort of your home.
							</p>
						</div>
						<div className="sm:w-1/5 h-40 flex flex-col justify-center gap-4">
							<h3 className="font-semibold text-2xl text-center sm:text-start">FREE SHIPPING</h3>
							<p className="text-center sm:text-start">
								Enjoy the convenience of free shipping on all orders, nationwide.
							</p>
						</div>
						<div className="sm:w-1/5 h-40 flex flex-col justify-center gap-4">
							<h3 className="font-semibold text-2xl text-center sm:text-start">RETURN POLICY</h3>
							<p className="text-center sm:text-start">
								Your satisfaction is our priority. Return any product you are not satisfied with.
							</p>
						</div>
						<div className="sm:w-1/5 h-40 flex flex-col justify-center gap-4">
							<h3 className="font-semibold text-2xl text-center sm:text-start">PAYMENT METHODS</h3>
							<p className="text-center sm:text-start">
								Choose from a variety of secure payment methods to complete your transactions.
							</p>
						</div>
					</div>
					<div className="py-32">
						<h3 className="text-center font-semibold text-3xl">
							{`At the heart of Serrena lies a distinctive philosophy that transcends trends and embraces the essence of enduring style. Our collections are a harmonious blend of sophistication, versatility, and modernity, carefully curated to enhance your personal expression. We believe that fashion should empower, inspire, and reflect the unique narrative of every individual. Serrena is not just about clothing; it's about embracing a lifestyle that embraces the artistry of fashion and the poetry of self-expression.`}
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}
