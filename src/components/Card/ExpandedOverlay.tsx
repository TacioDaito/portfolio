import OutsideClickHandler from 'react-outside-click-handler';
import { CardData } from '../../constants/cards';
import { SetExpandedCard } from '../../hooks/useCardControl';

interface ExpandedOverlayProps {
	card: CardData,
	setExpandedCard: SetExpandedCard,
}

export function ExpandedOverlay( { card, setExpandedCard }: ExpandedOverlayProps ) {
	return (
		<OutsideClickHandler onOutsideClick={() => setExpandedCard(null)}>
			<div
				className="
					fixed inset-1 z-50 rounded-4xl shadow-glow-lg flex items-center 
					justify-center text-primary-50 text-2xl font-medium cursor-pointer 
					bg-surface animate-expand aspect-[3.23/2] w-[40vw] m-auto
				"
				role="dialog"
				aria-modal="true"
				aria-label={`${card.label} section expanded`}
				style={{ boxSizing: 'border-box' }}
			>
				<span className="text-center p-4">{card.label}</span>
			</div>
		</OutsideClickHandler>
	);
}