import OutsideClickHandler from 'react-outside-click-handler';
import { CardData } from "../../constants/cards";
import { useContext } from 'react';
import { CardControlContext } from '../../hooks/useCardControl';

interface ContentProps {
	card: CardData;
}

export function Content({ card }: ContentProps) {

	const { setExpandedCard, isExpanded, isOtherCardExpanded, handleKeyPressExpand }
		= useContext(CardControlContext);
	const baseClasses = `
		quadrant-card flex items-center justify-center text-primary-50 text-2xl 
		font-medium rounded-4xl cursor-pointer transition-all duration-300 
		ease aspect-[3.23/2] w-[90%] m-auto
	`;
	const stateClasses = isExpanded(card.id)
		? `shadow-glow-lg scale-213 ${card.transformOrigin}`
		: isOtherCardExpanded(card.id) ? 'hidden pointer-events-none'
		: 'hover:scale-[1.02] hover:border-primary-700 hover:shadow-glow';

	return (
		<OutsideClickHandler onOutsideClick={() => setExpandedCard(null)}>
			<button
				onClick={() => setExpandedCard(card.id)}
				className={`${baseClasses} ${stateClasses}`}
				tabIndex={0}
				aria-label={`${isExpanded(card.id) ? 'Expanded' : 'Open'} ${card.label} section`}
				onKeyDown={(event) => handleKeyPressExpand(event, card.id)}
				role={isExpanded(card.id) ? 'dialog' : undefined}
				aria-modal={isExpanded(card.id)}
			>
				<span className="text-center p-4">{card.label}</span>
			</button>
		</OutsideClickHandler>
	);

}