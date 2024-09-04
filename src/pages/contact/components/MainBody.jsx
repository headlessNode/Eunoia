import BreadCrumbs from '../../components/BreadCrumbs';

export default function MainBody() {
	return (
		<div className="main-body w-full flex flex-col items-center">
			<div className="max-w-8xl w-full font-afacad px-3">
				<div className="title flex flex-col items-center gap-8 py-32">
					<h1 className="text-6xl sm:text-7xl font-semibold text-center">CONTACT US</h1>
					<BreadCrumbs />
				</div>
				<div className="pb-32 flex flex-col items-center gap-24 md:flex-row md:justify-between">
					<div className="flex flex-col gap-12">
						<div>
							<h2 className="font-semibold text-4xl">{`Need any help?`}</h2>
							<h2 className="font-semibold text-4xl">{`We're here for you.`}</h2>
						</div>
						<div className="flex flex-col gap-3">
							<h3 className="font-semibold text-2xl">Call Us</h3>
							<p className="text-xl">+96746737637</p>
							<p className="text-xl">+96746737637</p>
						</div>
						<div className="flex flex-col gap-3">
							<h3 className="font-semibold text-2xl">Mail</h3>
							<p className="text-xl">hello@serrena.com</p>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<input
							type="text"
							name="name"
							id="name"
							className=" w-full sm:w-96 h-10 px-2 rounded-lg text-xl text-black text-opacity-50 placeholder-black placeholder-opacity-50 bg-black bg-opacity-10"
							placeholder="Name"
						/>
						<input
							type="email"
							name="email"
							id="email"
							className="w-full sm:w-96 h-10 px-2 rounded-lg text-xl text-black text-opacity-50 bg-black bg-opacity-10 placeholder-black placeholder-opacity-50"
							placeholder="Email"
						/>
						<textarea
							name="message"
							id="message"
							cols="30"
							rows="10"
							className="w-full sm:w-96 px-2 py-2 resize-y rounded-lg text-xl text-black text-opacity-50 bg-black bg-opacity-10 placeholder-black placeholder-opacity-50"
							placeholder="Message"
						></textarea>
						<button className="bg-black text-white text-xl py-4 rounded-lg">Sign Up</button>
					</div>
				</div>
			</div>
		</div>
	);
}
