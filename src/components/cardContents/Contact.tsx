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
    textClass: `text-stone-300`, expandedClass: `animate-fade-in-mid`
}, {
    id: 2, iconSrc: whatsAppLogo, alt: `WhatsApp Logo`, label: `WhatsApp`,
    value: `(91) 98173-7653`, textClass: `text-stone-200`,
    expandedClass: `animate-fade-in-mid`
}, {
    id: 3, iconSrc: gitHubLogo, alt: `GitHub Logo`, label: `GitHub`,
    value: `github.com/taciokikuchi`, textClass: `text-stone-400`,
    expandedClass: `animate-fade-in-slow`
}];

export const Contact = ({ card }: CardProps) => {
    const { isExpanded } = useContext(CardControlContext);
    const expanded = isExpanded(card.id);

    return (
        <div className={`text-left mb-2 ${expanded
            ? `flex flex-col gap-4` : `grid grid-cols-2 grid-rows-2 gap-8 
            animate-fade-in-fast`}`}
        >
            {CONTACTS.map(({ id, iconSrc, alt, label, value, textClass,
                expandedClass }) => (
                <div key={id} className={`flex flex-row gap-4 items-center 
                    ${expanded ? expandedClass : ``}`}>
                    {expanded && <div className={`h-4 w-4`}>
                        <CopyButton textToCopy={value} />
                    </div>}
                    <img src={iconSrc} alt={alt} className={expanded
                        ? `h-5 w-5` : `h-8 w-8`} />
                    <p className={`${textClass} ${expanded ? `text-xs`
                        : `text-xl`}`}>
                        {expanded ? value : label}
                    </p>
                </div>
            ))}
            {expanded && <p className={`text-stone-400 text-xs text-center 
                mt-4 animate-fade-in-slow`}>Localizado em Ananindeua, Pará</p>}
        </div>
    );
};