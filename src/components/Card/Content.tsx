import { CardData } from "../../constants/cards";
import { useContext } from 'react';
import { CardControlContext } from '../../hooks/useCardControl';

interface ContentProps {
	card: CardData;
}

export function Content({ card }: ContentProps) {
	const { expandedCard, setExpandedCard, isExpanded, handleKeyPressExpand } = useContext(CardControlContext);

	const baseClasses = `
		quadrant-card flex items-center justify-center text-primary-50 text-2xl 
		font-medium rounded-4xl cursor-pointer transition-all duration-300 
		ease aspect-[3.23/2] w-[90%] mx-auto
	`;

	const stateClasses = isExpanded(card.id) ? 'hidden pointer-events-none'
		: expandedCard ? 'hidden pointer-events-none'
			: 'hover:scale-[1.02] hover:border-primary-700 hover:shadow-glow';

	return (
		<button
			onClick={() => setExpandedCard(card.id)} className={`${baseClasses} ${stateClasses}`}
			tabIndex={0} aria-label={`Open ${card.label} section`}
			onKeyDown={(event) => handleKeyPressExpand(event, card.id)}>
			<span className="text-center p-4">{card.label}</span>
		</button>
	);
}