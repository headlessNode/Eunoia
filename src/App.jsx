import TopBar from './components/TopBar';
import { NavLink } from 'react-router-dom';

function App() {
	return (
		<div className="flex flex-col items-center">
			<TopBar />
			<div className="wrapper max-w-8xl w-full border-2 h-screen">
				<div className="header font-montserrat px-3 py-5 flex justify-between items-center">
					<div className="flex gap-4">
						<NavLink className="uppercase hover:underline">shop</NavLink>
						<NavLink className="uppercase hover:underline">men</NavLink>
						<NavLink className="uppercase hover:underline">women</NavLink>
						<NavLink className="uppercase hover:underline">kids</NavLink>
					</div>
					<div>
						<NavLink to="/" className="uppercase font-medium text-2xl">
							EUNOIA
						</NavLink>
					</div>
					<div className="flex gap-4">
						<NavLink className="uppercase hover:underline">about</NavLink>
						<NavLink className="uppercase hover:underline">contact</NavLink>
						<button>search</button>
						<NavLink>cart</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
