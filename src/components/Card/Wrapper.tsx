import { Content } from './Content';
import { ExpandedOverlay } from './ExpandedOverlay';
import { CARDS } from '../../constants/cards';
import { ExpandedCard, SetExpandedCard, IsExpanded, HandleKeyPressExpand } from '../../hooks/useCardControl';

interface CardProps {
	expandedCard: ExpandedCard,
	setExpandedCard: SetExpandedCard,
	isExpanded: IsExpanded,
	handleKeyPressExpand: HandleKeyPressExpand,
}

export const Wrapper = ({ expandedCard, setExpandedCard, isExpanded, handleKeyPressExpand }: CardProps) => {
	return (
		<>
			{CARDS.map((card) => (
				<div key={card.id} className="relative">
					<Content card={card} expandedCard={expandedCard} setExpandedCard={setExpandedCard}
						isExpanded={isExpanded} handleKeyPressExpand={handleKeyPressExpand}/>
					{isExpanded(card.id) && <ExpandedOverlay card={card} setExpandedCard={setExpandedCard} />}
				</div>
			))}
		</>
	);
}