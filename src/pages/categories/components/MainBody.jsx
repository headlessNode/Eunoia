import BreadCrumbs from '../../components/BreadCrumbs';
import PropTypes from 'prop-types';

export default function MainBody({ products, pageName }) {
	let displayName = pageName;
	if (displayName === 'kids') {
		displayName = 'kid';
	}
	return (
		<div className="main-body w-full flex flex-col items-center">
			<div className="max-w-8xl w-full font-afacad px-3">
				<div className="title flex flex-col items-center gap-8 py-32">
					<h1 className="uppercase text-7xl font-semibold">{`${displayName}'s collection`}</h1>
					<BreadCrumbs />
				</div>
			</div>
		</div>
	);
}

MainBody.propTypes = {
	products: PropTypes.array,
	pageName: PropTypes.string,
};
