import { Content } from './Content';
import { ExpandedOverlay } from './ExpandedOverlay';
import { CARDS } from '../../constants/cards';
import { useContext } from 'react';
import { CardControlContext } from '../../hooks/useCardControl';

export const Wrapper = () => {

	const { isExpanded } = useContext(CardControlContext);

	return (
		<>
			{CARDS.map((card) => (
				<div key={card.id} className="relative">
					<Content card={card} />
					{isExpanded(card.id) && <ExpandedOverlay card={card} />}
				</div>
			))}
		</>
	);

}