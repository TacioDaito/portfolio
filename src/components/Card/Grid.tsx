import { useCardControl } from '../../hooks/useCardControl';
import { Wrapper } from './Wrapper';

export const Grid = () => {
	const { expandedCard, setExpandedCard, isExpanded, handleKeyPressExpand } = useCardControl();

	return (
		<div className="grid grid-cols-2 grid-rows-2 gap-2 relative items-center bg-surface
      noise-overlay rounded-4xl aspect-[3.23/2] w-[50vw]">
			<Wrapper expandedCard={expandedCard} setExpandedCard={setExpandedCard} isExpanded={isExpanded}
				handleKeyPressExpand={handleKeyPressExpand} />
		</div>
	);
}