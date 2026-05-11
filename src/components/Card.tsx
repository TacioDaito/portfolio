import { useContext } from 'react';
import { CardProps } from "../constants/cards";
import { CardControlContext } from '../hooks/useCardControl';
import { AboutMe } from './cardContents/AboutMe';
import { Skills } from './cardContents/Skills';
import { Portfolio } from './cardContents/Portfolio';
import { Contact } from './cardContents/Contact';

const cardContentMap = {
	'Sobre Mim': AboutMe, 'Portfólio': Portfolio,
	'Competências': Skills, 'Contato': Contact
};

export function Card({ card }: CardProps) {
	
	const { setExpandedCard, isExpanded, isOtherCardExpanded, handleKeyPressExpand }
	= useContext(CardControlContext);
	const expanded = isExpanded(card.id);

	const classes = `flex flex-col justify-center items-center text-shadow-xs/30 font-medium 
	rounded-3xl transition-[width, height] duration-400 aspect-[2/3.23] md:aspect-[3.23/2]
	w-[95%] m-auto bg-surface noise relative
		${expanded ? `shadow-lg/100 shadow-glow-lg scale-205 ${card.transformOrigin} z-50`
			: isOtherCardExpanded(card.id) ? 'pointer-events-none animate-fade-out'
			: `shadow-bottom-sm/40 hover:scale-102 hover:border-primary-700
				hover:shadow-glow-lg animate-fade-in-mid cursor-pointer`
		}`;

	return (
		<div
			onClick={() => setExpandedCard(card.id)} onKeyDown={(event) => handleKeyPressExpand(event, card.id)}
			className={classes} aria-label={`${expanded ? 'Expanded' : 'Open'} ${card.label} section`}
			role={expanded ? 'dialog' : 'button'} aria-modal={expanded} tabIndex={0} 
		>
			{cardContentMap[card.label]({ card })}
			<div className={`absolute bottom-[0.5vw] text-indigo-400 transition-all font-saira
			duration-400 ${expanded ? 'text-[0.625rem]' : 'text-base'}`}>{card.label}</div>
		</div>
	);

}