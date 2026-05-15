import { useContext } from 'react';
import { CardProps } from '../../constants/cards';
import { CardControlContext } from '../../hooks/useCardControl';
import { print } from '@/lib/imageImports';

export const AboutMe = ({ card }: CardProps) => {

    const { isExpanded } = useContext(CardControlContext);
    const expanded = isExpanded(card.id);

    return (
        <div className='flex flex-col landscape:flex-row gap-3 xs:gap-8 
            landscape:gap-14 px-2 xs:px-6 items-center justify-center'>
            <div className={`flex flex-col text-center landscape:text-left
                ${expanded ? 'gap-1 xs:gap-2' : 'gap-2 xs:gap-4'}`}>
                <p className={`gradient-text ${expanded ? 'text-lg xs:text-3xl' :
                    'text-3xl xs:text-5xl'}`}>Tacio Kikuchi</p>
                {expanded
                    ? <p className='text-stone-200 -mt-0.5 xs:mt-0 text-xxxs xs:text-xs
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
                    <a className={`font-normal text-stone-400 cursor-pointer hover:text-stone-200 
                        transition-colors duration-300 animate-fade-in-slow`} target='_blank'
                        href='https://drive.google.com/file/d/16bXTgpfXiofE_2d_uHLGXArLckGlVb-Q/view?usp=sharing'>
                        Clique aqui para ver meu CV!
                    </a>
                </div>}
            </div>
            {expanded &&
                <label className='group cursor-pointer'>
                    <input type='checkbox' className='peer sr-only' />
                    <img src={print('photo')} alt='Foto'
                        className='aspect-3/4 object-cover h-18 xs:h-32 landscape:h-35 rounded-lg xs:rounded-2xl
                        noise-overlay shadow-xs/70 animate-fade-in-slow hover:scale-120 hover:transition-transform
                        peer-checked:scale-120 peer-checked:transition-transform duration-300'/>
                </label>}
        </div>
    );

}