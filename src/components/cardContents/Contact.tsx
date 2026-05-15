import { useContext } from 'react';
import { CardProps } from '../../constants/cards';
import { CardControlContext } from '../../hooks/useCardControl';
import { CopyButton } from '@/components/ui/copyButton';
import { RedirectButton } from '@/components/ui/redirectButton';
import { logo } from '@/lib/imageImports';

const CONTACTS = [{
    id: 0, iconSrc: logo('gmail'), alt: 'Gmail Logo', label: 'Email',
    value: 'taciokikuchi@gmail.com', link: 'mailto:taciokikuchi@gmail'
}, {
    id: 1, iconSrc: logo('linkedin'), alt: 'LinkedIn Logo', label: 'LinkedIn',
    value: 'linkedin.com/in/tacio-kikuchi-a2b675120',
    link: 'https://linkedin.com/in/tacio-kikuchi-a2b675120/?locale=pt-BR'
}, {
    id: 2, iconSrc: logo('whatsapp'), alt: 'WhatsApp Logo', label: 'WhatsApp',
    value: '(91) 98173-7653', link: 'https://wa.me/5591981737653'
}, {
    id: 3, iconSrc: logo('github'), alt: 'GitHub Logo', label: 'GitHub',
    value: 'github.com/TacioDaito', link: 'https://github.com/TacioDaito'
}];

export const Contact = ({ card }: CardProps) => {
    const { isExpanded } = useContext(CardControlContext);
    const expanded = isExpanded(card.id);

    return (
        <div className={`text-left px-[14%] pb-[5%] landscape:pb-[2%]
            ${expanded
                ? `flex flex-col gap-3 landscape:gap-2`
                : `grid grid-rows-4 landscape:grid-cols-2 landscape:grid-rows-2 gap-4 xs:gap-8 
                    animate-fade-in-fast`}
            `}
        >
            {CONTACTS.map(({ id, iconSrc, alt, label, value, link }) => (
                <div key={id} className="flex flex-col">
                    <div className='flex flex-row gap-1 xs:gap-2 items-center'>
                        <img src={iconSrc} alt={alt} className={`drop-shadow-sm/30
                            ${expanded ? `h-2 w-2 xs:h-4 xs:w-4` : `h-5 w-5 xs:h-8 xs:w-8`}`} />
                        <p className={`text-stone-200 leading-none ${expanded ? `text-xxxs xs:text-xs`
                            : `text-xs xs:text-xl`}`}>
                            {label}
                        </p>
                        {expanded && <>
                            <CopyButton className='h-1.5 w-1.5 xs:h-3 xs:w-3 shrink-0 
                                animate-fade-in-fast' textToCopy={value} />
                            <RedirectButton className='h-1.5 w-1.5 xs:h-3 xs:w-3 shrink-0 
                                animate-fade-in-fast' link={link} />
                        </>}
                    </div>
                    {expanded && <div>
                        <p className={`text-stone-300 font-light wrap-anywhere animate-fade-in-fast
                        ${expanded ? `text-xxxs xs:text-xs` : `text-xs xs:text-xl`}`}>
                            {value}
                        </p>
                    </div>}
                </div>
            ))}
            {expanded && <p className='text-stone-400 text-xxxs xs:text-xs text-center
                font-light animate-fade-in-slow'>
                Localizado em Ananindeua, Pará
            </p>}
        </div>
    );
};