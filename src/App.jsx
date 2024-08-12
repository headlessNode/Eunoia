import TopBar from './components/TopBar';
import Header from './components/Header';

function App() {
	return (
		<div className="flex flex-col items-center">
			<TopBar />
			<div className="wrapper max-w-8xl w-full border-2 h-screen">
				<Header />
			</div>
		</div>
	);
}

export default App;
