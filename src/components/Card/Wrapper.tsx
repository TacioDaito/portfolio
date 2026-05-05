import { Content } from './Content';
import { CARDS } from '../../constants/cards';

export const Wrapper = () => {
	return (
		<>
			{CARDS.map((card) => (
				<div key={card.id} className="relative">
					<Content card={card} />
				</div>
			))}
		</>
	);
}