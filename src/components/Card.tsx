import OutsideClickHandler from 'react-outside-click-handler';
import { useContext } from 'react';
import { CardProps } from "../constants/cards";
import { CardControlContext } from '../hooks/useCardControl';
import { AboutMe } from './cardContents/AboutMe';
import { Skills } from './cardContents/Skills';
import { Portfolio } from './cardContents/Portfolio';
import { Contact } from './cardContents/Contact';

export function Card({ card }: CardProps) {

	const { setExpandedCard, isExpanded, isOtherCardExpanded, handleKeyPressExpand }
		= useContext(CardControlContext);
	const baseClasses = `
		flex flex-col justify-center items-center text-primary-50 text-2xl 
		font-medium rounded-4xl cursor-pointer transition-all duration-300 
		ease aspect-[3.23/2] w-[90%] m-auto
	`;
	const stateClasses = isExpanded(card.id)
		? `shadow-glow-sm/30 scale-211 ${card.transformOrigin}`
		: isOtherCardExpanded(card.id) ? 'hidden pointer-events-none'
		: 'shadow-md/30 hover:scale-[1.02] hover:border-primary-700 hover:shadow-glow';

	return (
		<OutsideClickHandler onOutsideClick={() => setExpandedCard(null)}>
			<button
				onClick={() => setExpandedCard(card.id)} className={`${baseClasses} ${stateClasses}`}
				tabIndex={0} onKeyDown={(event) => handleKeyPressExpand(event, card.id)}
				aria-label={`${isExpanded(card.id) ? 'Expanded' : 'Open'} ${card.label} section`}
				role={isExpanded(card.id) ? 'dialog' : undefined} aria-modal={isExpanded(card.id)}
			>
				{card.label === 'Sobre Mim' && <AboutMe card={card} />}
				{card.label === 'Competências' && <Skills card={card} />}
				{card.label === 'Portfólio' && <Portfolio card={card} />}
				{card.label === 'Contato' && <Contact card={card} />}
				<div className="absolute text-sm text-gray-400 mt-55">{ card.label }</div>
			</button>
		</OutsideClickHandler>
	);

}