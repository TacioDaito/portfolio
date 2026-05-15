import { memo } from 'react';
import { CarouselItem } from '@/components/ui/carousel';

interface PortfolioEntry {
    id: number;
    imgSrc: string;
    alt: string;
    title: string;
    link: string;
    stackSrc: string[];
}

interface PortfolioCarouselItemProps {
    portfolios: PortfolioEntry[];
    expanded: boolean;
}

export const PortfolioCarouselItem = memo(function PortfolioCarouselItem(
    { portfolios, expanded }: PortfolioCarouselItemProps
) {
    return portfolios.map((portfolio: PortfolioEntry) => (
        <CarouselItem key={portfolio.id} className='flex justify-center'>
            {expanded && <div className="absolute top-1 flex flex-row gap-1 xs:gap-2 z-100 w-max">
                {portfolio.stackSrc.map((stack, index) => (
                    <img src={stack} alt={portfolio.title}
                        key={index} className='w-2 xs:w-4 animate-fade-in-fast
                        bg-stone-900/70 rounded-xs p-px xs:p-0.5' />
                ))}
            </div>}
            <div className={`transition-transform duration-300 flex justify-center relative items-center w-[80%]
                ${expanded ? 'hover:scale-103 landscape:w-[65%]' : 'landscape:w-[60%]'}`}>
                <img src={portfolio.imgSrc} alt={portfolio.alt}
                    className={`rounded-lg xs:rounded-2xl h-full shadow-sm/30`} />
                {expanded && <>
                    <a href={portfolio.link} target='_blank' className='absolute
                        inset-0 rounded-lg xs:rounded-2xl cursor-pointer'></a>
                </>}
            </div>
            {expanded && <p className='absolute px-1 bg-stone-900/70 font-normal
                rounded-xs bottom-1 w-max text-xxxxs xs:text-xxs text-stone-300
                animate-fade-in-fast'>{portfolio.title}
            </p>}
        </CarouselItem>
    ));
});