import BreadCrumbs from '../../components/BreadCrumbs';

export default function MainBody() {
	return (
		<div className="main-body w-full flex flex-col items-center">
			<div className="max-w-8xl w-full font-afacad px-3">
				<div className="title flex flex-col items-center gap-8 py-32">
					<h1 className="text-7xl font-semibold">{"MEN'S COLLECTION"}</h1>
					<BreadCrumbs />
				</div>
			</div>
		</div>
	);
}
