import { useCardControl, CardControlContext } from '../hooks/useCardControl'
import { CARDS } from '@/constants/cards'
import { Card } from './Card'
import { DismissableLayer } from '@radix-ui/react-dismissable-layer'

export const CardGrid = () => {
	const { expandedCard, setExpandedCard, isExpanded, isOtherCardExpanded,
		handleKeyPressExpand } = useCardControl()

	return (
		<CardControlContext.Provider value={{
				expandedCard, setExpandedCard, isExpanded, isOtherCardExpanded,
				handleKeyPressExpand
		}}>
			<DismissableLayer onInteractOutside={() => setExpandedCard(null)}>
				<div className="p-6 relative flex items-center justify-center">
					<div className='grid grid-cols-2 grid-rows-2 items-center rounded-xl sm:rounded-3xl
						aspect-[2/3.23] md:aspect-[3.23/2] max-h-225 md:max-w-4xl min-w-70 md:min-w-3xl
						shadow-xl/20 animate-fade-in-fast bg-surface noise'>
						<>
							{CARDS.map((card) => (
								<div key={card.id}>
									<Card card={card} />
								</div>
							))}
						</>
					</div>
				</div>
			</DismissableLayer>
		</CardControlContext.Provider>
	)
}
