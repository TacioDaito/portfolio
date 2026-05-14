import { useContext } from 'react';
import { CardProps } from "../constants/cards";
import { CardControlContext } from '../hooks/useCardControl';
import { AboutMe } from './cardContents/AboutMe';
import { Skills } from './cardContents/Skills';
import { Portfolio } from './cardContents/Portfolio';
import { Contact } from './cardContents/Contact';
import closeIcon from '@/assets/images/close.svg';

const CardContents = {
	'Sobre Mim': AboutMe, 'Portfólio': Portfolio,
	'Competências': Skills, 'Contato': Contact
};

export function Card({ card }: CardProps) {
	
	const { setExpandedCard, isExpanded, isOtherCardExpanded, handleKeyPressExpand }
	= useContext(CardControlContext);
	const expanded = isExpanded(card.id);
	const CardContent = CardContents[card.label];

	const classes = `flex flex-col justify-center items-center text-shadow-xs/30 font-medium touch-manipulation 
	rounded-4xl xs:rounded-5xl transition-[transform, opacicity] duration-400 will-change-transform max-h-106
	aspect-[2/3.23] landscape:aspect-[3.23/2] w-[95%] bg-surface noise relative active:shadow-glow-lg/80
		${expanded ? `shadow-lg/100 shadow-glow-lg scale-205 z-50 rounded-xl xs:rounded-a
			${card.transformOrigin}`
			: isOtherCardExpanded(card.id) ? 'pointer-events-none animate-fade-out'
			: `shadow-bottom-sm/40 hover:scale-102 hover:shadow-glow-xl animate-fade-in-fast cursor-pointer`
		}`;

	return (
		<div className='flex justify-center items-center'>
			<div onClick={() => setExpandedCard(card.id)} onKeyDown={(event) => handleKeyPressExpand(event, card.id)}
				className={classes} aria-label={`${expanded ? 'Expanded' : 'Open'} ${card.label} section`}
				role={expanded ? 'dialog' : 'button'} aria-modal={expanded} tabIndex={0}>
				
				<CardContent card={card} />

				<div className={`absolute bottom-1 xs:bottom-3 md:bottom-[0.5vw] text-indigo-400 
					font-saira
					${expanded ? 'text-xxxxs xs:text-xxs' : 'text-xxs xs:text-base'}`}>{card.label}</div>

			</div>

			{expanded && <div className='absolute w-16 xs:w-24 md:w-26 -bottom-10 landscape:-bottom-16 right-1/2
				md:right-1/2 px-4 xs:px-6 rounded-lg xs:rounded-xl translate-x-1/2 z-100 text-shadow-sm/20 shadow-sm/30 
				bg-surface noise animate-fade-in-mid cursor-pointer flex items-center justify-center select-none'
				onClick={() => setExpandedCard(null)}>
				<img src={closeIcon} alt='Fechar' className='text-white' />

			</div>}
		</div>
	);

}