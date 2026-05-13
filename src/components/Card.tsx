import { useContext } from 'react';
import { CardProps } from "../constants/cards";
import { CardControlContext } from '../hooks/useCardControl';
import { AboutMe } from './cardContents/AboutMe';
import { Skills } from './cardContents/Skills';
import { Portfolio } from './cardContents/Portfolio';
import { Contact } from './cardContents/Contact';

const CardContents = {
	'Sobre Mim': AboutMe, 'Portfólio': Portfolio,
	'Competências': Skills, 'Contato': Contact
};

export function Card({ card }: CardProps) {
	
	const { setExpandedCard, isExpanded, isOtherCardExpanded, handleKeyPressExpand }
	= useContext(CardControlContext);
	const expanded = isExpanded(card.id);
	const CardContent = CardContents[card.label];

	const classes = `flex flex-col justify-center items-center text-shadow-sm/40 font-medium 
	rounded-lg sm:rounded-xl [transition:scale_400ms,transform-origin_400ms,box-shadow_200ms]
	aspect-[2/3.23] md:aspect-[3.23/2] w-[95%] m-auto bg-surface noise relative active:shadow-glow-lg/80
		${expanded ? `shadow-lg/100 shadow-glow-lg scale-205 z-50 ${card.transformOrigin}`
			: isOtherCardExpanded(card.id) ? 'pointer-events-none animate-fade-out'
			: `shadow-bottom-sm/40 hover:scale-102 hover:shadow-glow-xl animate-fade-in-mid cursor-pointer`
		}`;

	return (
		<div
			onClick={() => setExpandedCard(card.id)} onKeyDown={(event) => handleKeyPressExpand(event, card.id)}
			className={classes} aria-label={`${expanded ? 'Expanded' : 'Open'} ${card.label} section`}
			role={expanded ? 'dialog' : 'button'} aria-modal={expanded} tabIndex={0} 
		>
			<CardContent card={card} />
			<div className={`absolute bottom-1 xs:bottom-3 md:bottom-[0.5vw] text-indigo-400 transition-all font-saira
			duration-400 ${expanded ? 'text-xxxxs xs:text-xxs' : 'text-xxs xs:text-base'}`}>{card.label}</div>
		</div>
	);

}