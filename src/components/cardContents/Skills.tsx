import { useContext } from "react";
import { CardControlContext } from "../../hooks/useCardControl";
import { CardProps } from "../../constants/cards";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
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

    const baseClasses = {
        grid: `grid justify-items-center items-center w-full px-4 mb-6`,
        logos: `drop-shadow-sm/50 group-hover:drop-shadow-sm/100
            group-hover:drop-shadow-indigo-600 transition-all duration-300`,
        logoContainer: ``,
        labelContainer: ``,
        labelA: ``,
        labelB: ``
    };
    const stateClasses = expanded
        ? {
            grid: 'grid-cols-6 grid-rows-3 gap-y-4',
            logos: 'h-8',
            logoContainer: `gap-2 flex flex-col gap-1 items-center
                animate-fade-in-fast group text-[0.7vh]`,
            labelContainer: `relative flex flex-col items-center w-full`,
            labelA: `relative transition-all duration-400
                ease-in-out group-hover:-translate-y-full group-hover:opacity-0 text-stone-200`,
            labelB: `absolute translate-y-full opacity-0 transition-all duration-400
                ease-in-out group-hover:translate-y-0 group-hover:opacity-100 text-indigo-200`
        }
        : {
            grid: 'grid-cols-3 grid-rows-2 gap-y-8 px-12',
            logos: 'h-14',
            logoContainer: 'hidden',
            labelContainer: 'hidden',
            labelA: 'hidden',
            labelB: 'hidden'
        };
    const fullClasses = {
        grid: `${baseClasses.grid} ${stateClasses.grid}`,
        logos: `${baseClasses.logos} ${stateClasses.logos}`,
        logoContainer: `${baseClasses.logoContainer} ${stateClasses.logoContainer}`,
        labelContainer: `${baseClasses.labelContainer} ${stateClasses.labelContainer}`,
        labelA: `${baseClasses.labelA} ${stateClasses.labelA}`,
        labelB: `${baseClasses.labelB} ${stateClasses.labelB}`
    };

    const SkillItem = ({ src, alt, labelA, labelB }
        : { src: string, alt: string, labelA: string, labelB: string }) => (
        <div className={fullClasses.logoContainer}>
            <img src={src} alt={alt} className={fullClasses.logos} />
            <span className={fullClasses.labelContainer}>
                <span className={fullClasses.labelA}>{labelA}</span>
                <span className={fullClasses.labelB}>{labelB}</span>
            </span>
        </div>
    );

    return (
        <div className={fullClasses.grid}>
            {!expanded ?
                <>
                    <img src={phpLogo} alt="PHP" className={fullClasses.logos} />
                    <img src={laravelLogo} alt="Laravel" className={fullClasses.logos} />
                    <img src={javaScriptLogo} alt="JavaScript" className={fullClasses.logos} />
                    <img src={vueLogo} alt="Vue.js" className={fullClasses.logos} />
                    <img src={reactLogo} alt="React.js" className={fullClasses.logos} />
                    <p className="text-4xl text-stone-200">+13</p>
                </> :
                <>
                    <SkillItem src={phpLogo} alt="PHP" labelA="PHP" labelB="+3 Anos" />
                    <SkillItem src={laravelLogo} alt="Laravel" labelA="Laravel" labelB="+2 Anos" />
                    <SkillItem src={javaScriptLogo} alt="JavaScript" labelA="JavaScript" labelB="+3 Anos" />
                    <SkillItem src={vueLogo} alt="Vue.js" labelA="Vue.js" labelB="+2 Anos" />
                    <SkillItem src={reactLogo} alt="React.js" labelA="React.js" labelB="< 1 Ano" />
                    <SkillItem src={nextjsLogo} alt="Next.js" labelA="Next.js" labelB="< 1 Ano" />
                    <SkillItem src={typeScriptLogo} alt="TypeScript" labelA="TypeScript" labelB="< 1 Ano" />
                    <SkillItem src={mariaDbLogo} alt="MariaDB" labelA="MariaDB" labelB="+3 Anos" />
                    <SkillItem src={mySqlLogo} alt="MySQL" labelA="MySQL" labelB="+3 Anos" />
                    <SkillItem src={postgresLogo} alt="PostgreSQL" labelA="PostgreSQL" labelB="+1 Ano" />
                    <SkillItem src={mongoLogo} alt="MongoDB" labelA="MongoDB" labelB="+1 Ano" />
                    <SkillItem src={redisLogo} alt="Redis" labelA="Redis" labelB="+1 Ano" />
                    <SkillItem src={gitLogo} alt="Git" labelA="Git" labelB="+5 Anos" />
                    <SkillItem src={dockerLogo} alt="Docker" labelA="Docker" labelB="+1 Ano" />
                    <SkillItem src={n8nLogo} alt="n8n" labelA="n8n" labelB="< 1 Ano" />
                    <SkillItem src={awsLogo} alt="AWS" labelA="AWS" labelB="< 1 Anos" />
                    <SkillItem src={tailwindLogo} alt="Tailwind CSS" labelA="Tailwind CSS" labelB="+2 Ano" />
                    <Tooltip>
                        <TooltipTrigger>
                            <div className={fullClasses.logoContainer}><img src={ellipsisLogo} alt="Outros" className={fullClasses.logos} />
                                <span className="text-stone-200">Outros</span>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent className="flex flex-col text-sm shadow-lg/50 items-start
                            select-none">
                            <span className="text-stone-200">• SOLID, DRY, KISS, YAGNI</span>
                            <span className="text-stone-200">• Arquitetura Monolítica Modular</span>
                            <span className="text-stone-200">• Arquitetura de Microserviços</span>
                            <span className="text-stone-200">• Domain-Driven Design (DDD)</span>
                            <span className="text-stone-200">• Test-Driven Design (TDD)</span>
                            <span className="text-stone-200">• Student Information Systems (SIS)</span>
                            <span className="text-stone-200">• Software as a Service (SaaS)</span>
                            <span className="text-stone-200">• Infraestrutura de Nuvem</span>
                        </TooltipContent>
                    </Tooltip>
                </>
            }
        </div>
    );
}