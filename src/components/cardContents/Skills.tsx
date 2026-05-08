import { useContext } from 'react';
import { CardControlContext } from '../../hooks/useCardControl';
import { CardProps } from '../../constants/cards';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import phpLogo from '../../assets/images/php.svg'
import vueLogo from '../../assets/images/vue.svg'
import reactLogo from '../../assets/images/react.svg'
import dockerLogo from '../../assets/images/docker.svg'
import postgresLogo from '../../assets/images/postgres.svg'
import mariaDbLogo from '../../assets/images/mariadb.svg'
import laravelLogo from '../../assets/images/laravel.svg'
import mongoLogo from '../../assets/images/mongo.svg'
import nextjsLogo from '../../assets/images/nextjs.svg'
import mySqlLogo from '../../assets/images/mysql.svg'
import gitLogo from '../../assets/images/git.svg'
import tailwindLogo from '../../assets/images/tailwind.svg'
import javaScriptLogo from '../../assets/images/javascript.svg'
import awsLogo from '../../assets/images/aws.svg'
import typeScriptLogo from '../../assets/images/typescript.svg'
import redisLogo from '../../assets/images/redis.svg'
import n8nLogo from '../../assets/images/n8n.svg'
import ellipsisLogo from '../../assets/images/ellipsis.svg'

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

    const skills = [
        { src: phpLogo, alt: 'PHP', labelB: '+3 Anos' },
        { src: laravelLogo, alt: 'Laravel', labelB: '+2 Anos' },
        { src: javaScriptLogo, alt: 'JavaScript', labelB: '+3 Anos' },
        { src: vueLogo, alt: 'Vue.js', labelB: '+2 Anos' },
        { src: reactLogo, alt: 'React.js', labelB: '< 1 Ano' },
        { src: nextjsLogo, alt: 'Next.js', labelB: '< 1 Ano' },
        { src: typeScriptLogo, alt: 'TypeScript', labelB: '< 1 Ano' },
        { src: mariaDbLogo, alt: 'MariaDB', labelB: '+3 Anos' },
        { src: mySqlLogo, alt: 'MySQL', labelB: '+3 Anos' },
        { src: postgresLogo, alt: 'PostgreSQL', labelB: '+3 Anos' },
        { src: mongoLogo, alt: 'MongoDB', labelB: '< 1 Ano' },
        { src: redisLogo, alt: 'Redis', labelB: '< 1 Ano' },
        { src: gitLogo, alt: 'Git', labelB: '+5 Anos' },
        { src: dockerLogo, alt: 'Docker', labelB: '+1 Ano' },
        { src: n8nLogo, alt: 'n8n', labelB: '< 1 Ano' },
        { src: awsLogo, alt: 'AWS', labelB: '< 1 Ano' },
        { src: tailwindLogo, alt: 'Tailwind CSS', labelB: '+2 Anos' }
    ];

    return (
        <div className={classes.grid}>
            {!expanded
                ? <>
                    {skills.slice(0, 7).map(skill => <img key={skill.alt}
                        src={skill.src} alt={skill.alt} className={classes.logo} />)}
                    <p className='text-xl'><span className='text-stone-100'>+</span>
                        <span className='text-stone-200'>1</span>
                        <span className='text-stone-300'>3</span>
                        <span className='text-stone-400'>!</span>
                    </p>
                </>
                : <>
                    {skills.map(skill => (
                        <div key={skill.alt} className={classes.div}>
                            <img src={skill.src} alt={skill.alt} className={classes.logo} />
                            <span className='relative flex flex-col items-center'>
                                <span className={classes.labelA}>{skill.alt}</span>
                                <span className={classes.labelB}>{skill.labelB}</span>
                            </span>
                        </div>
                    ))}
                    <Tooltip>
                        <TooltipTrigger>
                            <div className={classes.div}><img src={ellipsisLogo} alt='Outros' className={classes.logo} />
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