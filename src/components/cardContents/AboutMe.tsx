import { useContext } from 'react';
import { CardProps } from '../../constants/cards';
import { CardControlContext } from '../../hooks/useCardControl';
import photo from '../../assets/images/photo.jpg';

export const AboutMe = ({ card }: CardProps) => {

    const { isExpanded } = useContext(CardControlContext);
    const expanded = isExpanded(card.id);

    return (
        <div className='flex flex-col md:flex-row gap-4 xs:gap-8 md:gap-14 px-2 items-center justify-center'>
            <div className={`flex flex-col text-center md:text-left
                ${expanded ? 'gap-1 xs:gap-2' : 'gap-2 xs:gap-4'}`}>
                <p className={`gradient-text ${expanded ? 'text-lg xs:text-3xl' :
                    'text-3xl xs:text-5xl'}`}>Tacio Kikuchi</p>
                {expanded
                    ? <p className='text-stone-200 -mt-0.5 text-xxxs xs:mt-0 xs:text-xs
                        animate-fade-in-fast'>
                        Desenvolvedor Full Stack</p>
                    : <p className='text-xs xs:text-xl'>
                        <span className='text-stone-200'>Dev. </span>
                        <span className='text-stone-300'>Full </span>
                        <span className='text-stone-400'>Stack</span>
                    </p>
                }
                {expanded && <div className='text-xxxs xs:text-xs flex flex-col gap-1 xs:gap-2'>
                    <p className='text-stone-300 animate-fade-in-mid'>
                        Engenheiro da Computação</p>
                    <p className='font-normal mt-2 xs:mt-4 text-stone-300 animate-fade-in-mid'>
                        +3 Anos de Experiência</p>
                    <p className='font-normal text-stone-400 animate-fade-in-slow'>
                        Cordial, Proativo, Paraense! </p>
                </div>}
            </div>
            {expanded &&
                <label className='group cursor-pointer'>
                    <input type='checkbox' className='peer sr-only' />
                    <img src={photo} alt='Foto'
                        className='aspect-3/4 object-cover h-18 xs:h-32 md:h-35 rounded-lg xs:rounded-2xl
                        noise-overlay shadow-xs/70 animate-fade-in-slow hover:scale-120 hover:transition-all
                        peer-checked:scale-120 peer-checked:transition-all duration-300'/>
                </label>}
        </div>
    );

}