import { CardGrid } from './components/CardGrid'
import RootLayout from './layout'
import { BgSvgLine } from './components/BgSvgLine';

function App() {

	return (
		<RootLayout>
			<div className='fixed inset-0 grid place-items-center overflow-hidden'>
				<BgSvgLine lineCount={10} loopDuration={5000} />
				<div className='bg-dark-900 bg-overlay noise h-screen w-screen flex items-center justify-center'>
					<CardGrid />
				</div>
			</div>
		</RootLayout>
	);
}

export default App
