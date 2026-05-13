import { useContext } from 'react';
import { CardProps } from '../../constants/cards';
import { CardControlContext } from '../../hooks/useCardControl';
import { CopyButton } from '@/components/ui/copyButton';
import gmailLogo from '../../assets/images/gmail.svg';
import linkedInLogo from '../../assets/images/linkedin.svg';
import whatsAppLogo from '../../assets/images/whatsapp.svg';
import gitHubLogo from '../../assets/images/github.svg';

const CONTACTS = [{
    id: 0, iconSrc: gmailLogo, alt: `Gmail Logo`, label: `Email`,
    value: `taciokikuchi@gmail.com`, textClass: `text-stone-100`,
    expandedClass: `animate-fade-in-fast`
}, {
    id: 1, iconSrc: linkedInLogo, alt: `LinkedIn Logo`, label: `LinkedIn`,
    value: `linkedin.com/in/tacio-kikuchi-a2b675120`,
    textClass: `text-stone-200`, expandedClass: `animate-fade-in-mid`
}, {
    id: 2, iconSrc: whatsAppLogo, alt: `WhatsApp Logo`, label: `WhatsApp`,
    value: `(91) 98173-7653`, textClass: `text-stone-300`,
    expandedClass: `animate-fade-in-mid`
}, {
    id: 3, iconSrc: gitHubLogo, alt: `GitHub Logo`, label: `GitHub`,
    value: `github.com/taciokikuchi`, textClass: `text-stone-300`,
    expandedClass: `animate-fade-in-slow`
}];

export const Contact = ({ card }: CardProps) => {
    const { isExpanded } = useContext(CardControlContext);
    const expanded = isExpanded(card.id);

    return (
        <div className={`text-left px-3 xs:px-6 pb-2 xs:pb-6 md:pb-2
            ${expanded
                ? `flex flex-col gap-2 xs:gap-4 md:gap-4`
                : `grid grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-4 xs:gap-8 
                    animate-fade-in-fast`}
            `}
        >
            {CONTACTS.map(({ id, iconSrc, alt, label, value, textClass,
                expandedClass }) => (
                <div key={id} className={`flex flex-row gap-1.5 xs:gap-2.5 items-center 
                    ${expanded ? expandedClass : ``}`}>
                    {expanded && <div className={`h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-3 sm:w-3 shrink-0`}>
                        <CopyButton textToCopy={value} />
                    </div>}
                    <img src={iconSrc} alt={alt} className={`drop-shadow-md/40 
                        ${expanded ? `h-3 w-3 xs:h-4.5 xs:w-4.5` : `h-5 w-5 xs:h-8 xs:w-8`}`} />
                    <p className={`${textClass} wrap-anywhere ${expanded ? `text-xxxs xs:text-xs`
                        : `text-xs xs:text-xl`}`}>
                        {expanded ? value : label}
                    </p>
                </div>
            ))}
            {expanded &&
                <div className='flex flex-col gap-1 justify-center animate-fade-in-slow'>
                    <a className={`text-stone-400 text-xxxs xs:text-xs text-center
                    font-normal mt-1 xs:mt-4 md:mt-2 hover:text-stone-200 transition-colors
                    duration-300 cursor-pointer`} target='_blank'
                    href='https://drive.google.com/file/d/16bXTgpfXiofE_2d_uHLGXArLckGlVb-Q/view?usp=sharing'>
                        Clique aqui para ver meu CV!
                    </a>
                    <p className={`text-stone-400 text-xxxs xs:text-xs text-center
                    font-normal`}>
                    Localizado em Ananindeua, Pará
                    </p>
                </div>
            }
        </div>
    );
};