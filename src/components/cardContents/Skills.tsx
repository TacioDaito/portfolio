import { useContext, useState } from 'react';
import { CardControlContext } from '../../hooks/useCardControl';
import { CardProps } from '../../constants/cards';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { logo } from '@/lib/imageImports';

const skills = [
    { src: logo('php'), labelA: 'PHP', labelB: '+3 Anos' },
    { src: logo('laravel'), labelA: 'Laravel', labelB: '+3 Anos' },
    { src: logo('javascript'), labelA: 'JavaScript', labelB: '+3 Anos' },
    { src: logo('vue'), labelA: 'Vue.js', labelB: '+2 Anos' },
    { src: logo('react'), labelA: 'React.js', labelB: '< 1 Ano' },
    { src: logo('nextjs'), labelA: 'Next.js', labelB: '< 1 Ano' },
    { src: logo('typescript'), labelA: 'TypeScript', labelB: '< 1 Ano' },
    { src: logo('mariadb'), labelA: 'MariaDB', labelB: '+3 Anos' },
    { src: logo('mysql'), labelA: 'MySQL', labelB: '+3 Anos' },
    { src: logo('postgres'), labelA: 'PostgreSQL', labelB: '+3 Anos' },
    { src: logo('mongo'), labelA: 'MongoDB', labelB: '< 1 Ano' },
    { src: logo('redis'), labelA: 'Redis', labelB: '< 1 Ano' },
    { src: logo('git'), labelA: 'Git', labelB: '+5 Anos' },
    { src: logo('docker'), labelA: 'Docker', labelB: '+1 Ano' },
    { src: logo('n8n'), labelA: 'n8n', labelB: '< 1 Ano' },
    { src: logo('aws'), labelA: 'AWS', labelB: '< 1 Ano' },
    { src: logo('tailwind'), labelA: 'Tailwind CSS', labelB: '+2 Anos' },
]

export const Skills = ({ card }: CardProps) => {

    const { isExpanded } = useContext(CardControlContext);
    const expanded = isExpanded(card.id);
    const [open, setOpen] = useState(false);

    const classes = {
        grid: `grid justify-items-center items-center w-full max-h-full 
            ${expanded
            ? `grid-cols-3 grid-rows-6 landscape:grid-cols-6 landscape:grid-rows-3 gap-y-1 xs:gap-y-3 
                    px-2 pb-2 xs:px-4 xs:pb-4`
            : `grid-cols-2 grid-rows-4 landscape:grid-cols-4 landscape:grid-rows-2 gap-y-4 xs:gap-y-8 
                    px-4 pb-4 xs:px-8 xs:pb-10 landscape:pb-6 animate-fade-in-fast`
            }`,
        logo: `drop-shadow-xs/30 group-hover:drop-shadow-sm/100 group-hover:drop-shadow-indigo-600
            transition-transform duration-300
            ${expanded ? 'h-3.5 xs:h-6' : 'h-6 xs:h-12'}`,
        div: expanded ? `flex flex-col gap-0.5 xs:gap-1 items-center animate-fade-in-fast 
            group text-xxxxs xs:text-xxs font-light` : `hidden`,
        labelA: expanded ? `relative transition-[opacity_0s,transform_0s] duration-300 ease-in-out
            w-max group-hover:-translate-y-full group-hover:opacity-0
            text-stone-300` : `hidden`,
        labelB: expanded ? `absolute translate-y-full opacity-0 transition-[opacity_0s,transform_0s]
            duration-300 w-max ease-in-out group-hover:translate-y-0 group-hover:opacity-100
            text-indigo-200` : `hidden`,
    };

    return (
        <div className={classes.grid}>
            {!expanded
                ? <>
                    {skills.slice(0, 7).map(skill => <img key={skill.labelA}
                        src={skill.src} alt={skill.labelA} className={classes.logo} />)}
                    <p className='text-lg xs:text-3xl text-stone-200'>+13</p>
                </>
                : <>
                    {skills.map(skill => (
                        <label key={skill.labelA} className='group flex cursor-pointer'>
                            <input type="checkbox" className='sr-only' />
                            <div className={classes.div}>
                                <img src={skill.src} alt={skill.labelA} className={classes.logo} />
                                <span className='relative flex flex-col items-center'>
                                    <span className={classes.labelA}>{skill.labelA}</span>
                                    <span className={classes.labelB}>{skill.labelB}</span>
                                </span>
                            </div>
                        </label>
                    ))}
                    <Tooltip open={open}>
                        <TooltipTrigger asChild onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)} onClick={() => setOpen(prev => !prev)} >
                            <div className={classes.div}><img src={logo('ellipsis')} alt='Outros'
                                className={classes.logo} />
                                <span className='text-stone-200'>Outros</span>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent className='flex flex-col text-sm shadow-lg/50 items-start'>
                            <span className='text-stone-200'>• SOLID, DRY, KISS, YAGNI</span>
                            <span className='text-stone-200'>• Arquitetura Monolítica Modular</span>
                            <span className='text-stone-200'>• Arquitetura de Microserviços</span>
                            <span className='text-stone-200'>• Domain-Driven Design (DDD)</span>
                            <span className='text-stone-200'>• Test-Driven Design (TDD)</span>
                            <span className='text-stone-200'>• Student Information Systems (SIS)</span>
                            <span className='text-stone-200'>• Software as a Service (SaaS)</span>
                            <span className='text-stone-200'>• Infraestrutura de Nuvem</span>
                        </TooltipContent>
                    </Tooltip>
                </>
            }
        </div>
    );
}