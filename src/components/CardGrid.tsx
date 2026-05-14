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
			<div className="m-10 relative flex items-center justify-center">
				<DismissableLayer onInteractOutside={() => setExpandedCard(null)}>
						<div className='grid grid-cols-2 grid-rows-2 rounded-4xl xs:rounded-5-6xl
							aspect-[2/3.23] landscape:aspect-[3.23/2] max-h-225 landscape:max-w-4xl bg-surface
							noise min-w-70 landscape:min-w-md animate-fade-in-fast xs:p-2 items-center '>
							{CARDS.map((card) => (
								<div key={card.id}>
									<Card card={card} />
								</div>
							))}
						</div>
				</DismissableLayer>
			</div>
		</CardControlContext.Provider>
	)
}
