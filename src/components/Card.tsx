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
	const expanded = isExpanded(card.id);
	const baseClasses = `
		flex flex-col justify-center items-center text-shadow-xs/30 font-medium
		rounded-3xl transition-all duration-400 aspect-[3.23/2]
		w-[95%] m-auto bg-surface noise relative
	`;
	const stateClasses = expanded
		? `shadow-lg/100 shadow-glow-lg scale-206 ${card.transformOrigin} z-50`
		: isOtherCardExpanded(card.id) ? `pointer-events-none animate-fade-out`
		: `shadow-bottom-sm/40 hover:scale-102 hover:border-primary-700
		hover:shadow-glow-lg animate-fade-in-slow cursor-pointer`;

	return (
		<div
			onClick={() => setExpandedCard(card.id)} className={`${baseClasses} ${stateClasses}`}
			tabIndex={0} onKeyDown={(event) => handleKeyPressExpand(event, card.id)}
			aria-label={`${expanded ? 'Expanded' : 'Open'} ${card.label} section`}
			role={expanded ? 'dialog' : 'button'} aria-modal={expanded}
		>
			{card.label === 'Sobre Mim' && <AboutMe card={card} />}
			{card.label === 'Portfólio' && <Portfolio card={card} />}
			{card.label === 'Competências' && <Skills card={card} />}
			{card.label === 'Contato' && <Contact card={card} />}
			<div className={`absolute bottom-[0.5vw] text-indigo-400 transition-all font-saira
			duration-400 ${expanded ? 'text-xs' : 'text-base'}`}>{card.label}</div>
		</div>
	);

}