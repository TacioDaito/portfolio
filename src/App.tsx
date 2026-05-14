import { CardGrid } from './components/CardGrid'
import RootLayout from './layout'
import { BgSvgLine } from './components/BgSvgLine';

function App() {

	return (
		<RootLayout>
			<div className='fixed inset-0 -z-10 pointer-events-none grid place-items-center
				noise bg-dark-900'>
				<div className='bg-dark-900 w-dvw h-dvh bg-overlay noise absolute' />
				<BgSvgLine lineCount={10} loopDuration={5000} />
			</div>

			<div className='min-h-dvh w-full flex items-center justify-center'>
				<CardGrid />
			</div>
		</RootLayout>
	);
}

export default App
