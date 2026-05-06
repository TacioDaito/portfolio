import { Card } from './Card';
import { CARDS } from '../constants/cards';

export const CardMapper = () => {
	return (
		<>
			{CARDS.map((card) => (
				<div key={card.id}>
					<Card card={card} />
				</div>
			))}
		</>
	);
}