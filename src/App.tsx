import { CardGrid } from './components/CardGrid'
import RootLayout from './layout'

function App() {
	return (
		<RootLayout>
			<div className='bg-dark-900 bg-overlay noise h-screen w-screen flex items-center justify-center'>
				<CardGrid />
			</div>
		</RootLayout>
		);
}

export default App
