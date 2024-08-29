import { useLocation, NavLink } from 'react-router-dom';

export default function BreadCrumbs() {
	const location = useLocation();
	const pathname = location.pathname.split('/').filter((x) => x);

	return (
		<div className="bread-crumbs flex gap-2 items-center font-montserrat">
			<p className="text-lg">Home</p>
			<svg
				viewBox="0 0 25 25"
				width={20}
				height={20}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				stroke="#000000"
				strokeWidth="1.5"
			>
				<path
					d="M7.6728 22L16.1434 13.0294C16.4081 12.75 16.4081 12.3088 16.1434 12.0147L7.65808 3"
					stroke="#0000000"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
			<NavLink to={pathname} className="capitalize text-xl text-blue hover:underline">
				{pathname}
			</NavLink>
		</div>
	);
}
