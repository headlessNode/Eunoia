export default function NewsLetter() {
	return (
		<div className="bg-blue w-full flex justify-center">
			<div className="news-letter px-3 max-w-8xl w-full py-16 flex flex-col items-center gap-10 md:flex-row md:justify-between font-afacad">
				<p className="text-white font-semibold text-4xl max-w-[360px] w-full text-center sm:text-start">
					Sign up to our newsletter & get 20% Off
				</p>
				<button className="bg-white w-48 py-3 text-center text-xl font-semibold">SIGN UP FOR FREE</button>
			</div>
		</div>
	);
}
