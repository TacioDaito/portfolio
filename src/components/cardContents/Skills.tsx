import { useContext } from "react";
import { CardControlContext } from "../../hooks/useCardControl";
import { CardProps } from "../../constants/cards";
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
import githubCopilotLogo from '../../assets/images/githubcopilot.svg'
import ellipsisLogo from '../../assets/images/ellipsis.svg'

export const Skills = ({ card }: CardProps) => {

    const { isExpanded } = useContext(CardControlContext);
    const expanded = isExpanded(card.id);

    const baseClasses = {
        grid: `grid justify-items-center items-center w-full px-4 mb-6`,
        logos: `drop-shadow-sm/50 group-hover:drop-shadow-sm/100
            group-hover:drop-shadow-indigo-600 transition-all duration-300`,
        container: `flex flex-col gap-1 items-center animate-fade-in-fast
            group `,
        text: 'text-stone-200'
    };
    const stateClasses = expanded
        ? { 
            grid: 'grid-cols-5 grid-rows-3 gap-x-2 gap-y-4', 
            logos: 'h-8',
            container: 'gap-2',
            text: 'text-[0.7vh]' 
          }
        : { 
            grid: 'grid-cols-3 grid-rows-2 gap-y-8', 
            logos: 'h-14',
            container: '',
            text: 'text-4xl' 
          };
    const fullClasses = {
        grid: `${baseClasses.grid} ${stateClasses.grid}`,
        logos: `${baseClasses.logos} ${stateClasses.logos}`,
        container: `${baseClasses.container} ${stateClasses.container}`,
        text: `${baseClasses.text} ${stateClasses.text}`
    };

    const SkillItem = ({ src, alt, label }: { src: string, alt: string, label: string }) => (
        <div className={fullClasses.container}>
            <img src={src} alt={alt} className={fullClasses.logos} />
            <p className={fullClasses.text}>{label}</p>
        </div>
    );

    return (
        <div className={fullClasses.grid}>
            {!expanded ? (
                <>
                    <img src={vueLogo} alt="Vue.js" className={fullClasses.logos}/>
                    <img src={phpLogo} alt="PHP" className={fullClasses.logos}/>
                    <img src={reactLogo} alt="React.js" className={fullClasses.logos}/>
                    <img src={dockerLogo} alt="Docker" className={fullClasses.logos}/>
                    <img src={postgresLogo} alt="PostgreSQL" className={fullClasses.logos} />
                    <p className={fullClasses.text}>+10</p>
                </>
            ) : (
                <>
                    <SkillItem src={vueLogo} alt="Vue.js" label="Vue.js" />
                    <SkillItem src={phpLogo} alt="PHP" label="PHP" />
                    <SkillItem src={reactLogo} alt="React.js" label="React.js" />
                    <SkillItem src={dockerLogo} alt="Docker" label="Docker" />
                    <SkillItem src={postgresLogo} alt="PostgreSQL" label="PostgreSQL" />
                    <SkillItem src={mariaDbLogo} alt="MariaDB" label="MariaDB" />
                    <SkillItem src={mySqlLogo} alt="MySQL" label="MySQL" />
                    <SkillItem src={mongoLogo} alt="MongoDB" label="MongoDB" />
                    <SkillItem src={laravelLogo} alt="Laravel" label="Laravel" />
                    <SkillItem src={nextjsLogo} alt="Next.js" label="Next.js" />
                    <SkillItem src={gitLogo} alt="Git" label="Git" />
                    <SkillItem src={tailwindLogo} alt="Tailwind CSS" label="Tailwind CSS" />
                    <SkillItem src={githubCopilotLogo} alt="GitHub Copilot" label="GitHub Copilot" />
                    <SkillItem src={postgresLogo} alt="PostgreSQL" label="PostgreSQL" />
                    <SkillItem src={ellipsisLogo} alt="Etc." label="Etc." />
                </>
            )}
        </div>
    );
}