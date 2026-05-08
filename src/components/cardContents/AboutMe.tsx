import { useContext } from 'react';
import { CardProps } from '../../constants/cards';
import { CardControlContext } from '../../hooks/useCardControl';
import photo from '../../assets/images/photo.jpg';

export const AboutMe = ({ card }: CardProps) => {

    const { isExpanded } = useContext(CardControlContext);
    const expanded = isExpanded(card.id);

    return (
        <div className={`flex flex-row gap-16 items-center
            ${expanded ? 'animate-fade-in-fast' : ''}`}>
            <div className={`flex flex-col text-left ${expanded ? 'gap-1' : 'gap-2'}`}>
                <p className={`text-stone-100 ${expanded ? 'text-3xl' :
                    'text-5xl'}`}>Tacio Kikuchi</p>
                {expanded
                    ? <p className={`text-stone-200 ${expanded ? 'text-xs animate-fade-in-fast'
                        : 'text-xl'}`}>Desenvolvedor Full Stack</p>
                    : <p className='text-xl'><span className='text-stone-200'>Dev. </span>
                        <span className='text-stone-300'>Full </span>
                        <span className='text-stone-400'>Stack</span>
                    </p>
                }
                {expanded && <div>
                    <p className='text-xs text-stone-300 animate-fade-in-mid'>
                        Engenheiro da Computação</p>
                    <p className='text-xs mt-6 mb-0.5 text-stone-300 animate-fade-in-mid'>
                        +3 Anos de Experiência</p>
                    <p className='text-xs text-stone-400 animate-fade-in-slow'>
                        Cordial, Proativo, Paraense! </p>
                </div>}
            </div>
            {expanded && <img src={photo} alt='Foto'
                className='aspect-3/4 object-cover h-35 rounded-2xl
                noise-overlay shadow-xs/70 animate-fade-in-slow hover:scale-120
                transition-all duration-300' />}
        </div>
    );

}