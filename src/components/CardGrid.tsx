
import { useCardControl, CardControlContext } from '../hooks/useCardControl';
import { CardMapper } from './CardMapper';

export const CardGrid = () => {

	const { expandedCard, setExpandedCard, isExpanded, isOtherCardExpanded
		, handleKeyPressExpand } = useCardControl();

	return (
		<CardControlContext.Provider value={{
			expandedCard, setExpandedCard
			, isExpanded, isOtherCardExpanded, handleKeyPressExpand
		}}>
			<div className="grid grid-cols-2 grid-rows-2 gap-2 relative items-center
				bg-surface noise-overlay rounded-4xl aspect-[3.23/2] w-[50vw]
				shadow-md/30">
				<CardMapper />
			</div>
		</CardControlContext.Provider>
	);

}