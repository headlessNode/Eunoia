import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import horizontalLoop from './HorizontalLoop';

export default function MainBody() {
	const logosContainer = useRef(null);

	useGSAP(
		() => {
			const items = Array.from(logosContainer.current.children);
			const tl = horizontalLoop(items, { speed: 1, repeat: -1, paddingRight: 128 });
		},
		{ scope: logosContainer }
	);

	return (
		<div className="main-body px-3 max-w-8xl w-full h-screen">
			<div
				ref={logosContainer}
				className="logos w-full flex justify-center items-center gap-32 px-3 py-16 overflow-hidden"
			>
				<img src="/images/logos/logo-01.svg" alt="Logo" />
				<img src="/images/logos/logo-02.svg" alt="Logo" />
				<img src="/images/logos/logo-03.svg" alt="Logo" />
				<img src="/images/logos/logo-04.svg" alt="Logo" />
				<img src="/images/logos/logo-05.svg" alt="Logo" />
				<img src="/images/logos/logo-06.svg" alt="Logo" />
			</div>
		</div>
	);
}
