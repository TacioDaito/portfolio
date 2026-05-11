import { useContext } from 'react';
import { CardControlContext } from '../../hooks/useCardControl';
import { CardProps } from '../../constants/cards';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
const logos = import.meta.glob('../../assets/images/*.svg', {
    eager: true,
    import: 'default'
}) as Record<string, string>

const logo = (name: string) => logos[`../../assets/images/${name}.svg`]

const skills = [
    { src: logo('php'), labelA: 'PHP', labelB: '+3 Anos' },
    { src: logo('laravel'), labelA: 'Laravel', labelB: '+2 Anos' },
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

    const classes = {
        grid: `grid justify-items-center items-center w-full mb-2 ${expanded
            ? 'grid-cols-6 grid-rows-3 gap-y-4 px-10' : `grid-cols-4 grid-rows-2 gap-y-8
            animate-fade-in-fast p-16`}`,
        logo: `drop-shadow-sm/50 group-hover:drop-shadow-sm/100 group-hover:drop-shadow-indigo-600
            transition-all duration-300 ${expanded ? 'h-7' : 'h-12'}`,
        div: expanded ? `gap-2 flex flex-col gap-1 items-center animate-fade-in-fast 
            group text-[0.6rem] font-normal` : `hidden`,
        labelA: expanded ? `relative transition-all duration-400 ease-in-out w-max
            group-hover:-translate-y-full group-hover:opacity-0 text-stone-300` : `hidden`,
        labelB: expanded ? `absolute translate-y-full opacity-0 transition-all w-max
            duration-400 ease-in-out group-hover:translate-y-0 group-hover:opacity-100
            text-indigo-200` : `hidden`,
    };

    return (
        <div className={classes.grid}>
            {!expanded
                ? <>
                    {skills.slice(0, 7).map(skill => <img key={skill.labelA}
                        src={skill.src} alt={skill.labelA} className={classes.logo} />)}
                    <p className='text-xl'><span className='text-stone-100'>+</span>
                        <span className='text-stone-200'>1</span>
                        <span className='text-stone-300'>3</span>
                        <span className='text-stone-400'>!</span>
                    </p>
                </>
                : <>
                    {skills.map(skill => (
                        <div key={skill.labelA} className={classes.div}>
                            <img src={skill.src} alt={skill.labelA} className={classes.logo} />
                            <span className='relative flex flex-col items-center'>
                                <span className={classes.labelA}>{skill.labelA}</span>
                                <span className={classes.labelB}>{skill.labelB}</span>
                            </span>
                        </div>
                    ))}
                    <Tooltip>
                        <TooltipTrigger>
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