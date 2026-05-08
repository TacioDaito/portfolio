import { useCardControl, CardControlContext } from '../hooks/useCardControl'
import { CARDS } from '@/constants/cards'
import { Card } from './Card'
import { DismissableLayer } from '@radix-ui/react-dismissable-layer'

export const CardGrid = () => {
	const { expandedCard, setExpandedCard, isExpanded, isOtherCardExpanded,
		handleKeyPressExpand } = useCardControl()

	return (
		<CardControlContext.Provider
			value={{
				expandedCard, setExpandedCard, isExpanded, isOtherCardExpanded,
				handleKeyPressExpand
			}}
		>
			<DismissableLayer onInteractOutside={() => setExpandedCard(null)}>
				<div className='flex items-center justify-center w-full h-full'>
					<div
						className='grid grid-cols-2 grid-rows-2 items-center 
							rounded-3xl aspect-[3.23/2] w-[50vw] bg-surface
							noise shadow-xl/20 animate-fade-in-fast'
					>
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
