import { NavLink } from 'react-router-dom';

export default function Footer() {
	return (
		<div className="footer relative w-full flex justify-center">
			<div className="max-w-8xl w-full px-3 pt-20 pb-28 flex flex-col gap-5 md:flex-row md:justify-between font-montserrat">
				<div className="w-56 flex flex-col gap-3">
					<p className="font-semibold text-xl">Eunoia</p>
					<p>Your trusted fashion companion</p>
				</div>
				<div className="flex flex-col gap-3">
					<p className="font-semibold text-xl">NAVIGATION</p>
					<div className="flex flex-col gap-3">
						<NavLink to="/" className="hover:underline">
							Home
						</NavLink>
						<NavLink to="/shop" className="hover:underline">
							Shop
						</NavLink>
						<NavLink to="/about" className="hover:underline">
							About
						</NavLink>
						<NavLink to="/contact" className="hover:underline">
							Contact
						</NavLink>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<p className="font-semibold text-xl">CATEGORIES</p>
					<div className="flex flex-col gap-3">
						<NavLink to="/men" className="hover:underline">
							Men
						</NavLink>
						<NavLink to="/women" className="hover:underline">
							Women
						</NavLink>
						<NavLink to="/kids" className="hover:underline">
							Kids
						</NavLink>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<p className="font-semibold text-xl">SOCIALS</p>
					<div className="flex gap-3">
						<NavLink to="/">
							<i className="fa-brands fa-facebook text-black text-2xl"></i>
						</NavLink>
						<NavLink to="/">
							<i className="fa-brands fa-instagram text-black text-2xl"></i>
						</NavLink>
						<NavLink to="/">
							<i className="fa-brands fa-x-twitter text-black text-2xl"></i>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}
