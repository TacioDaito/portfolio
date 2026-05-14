import { CardProps } from '../../constants/cards';
import { useContext } from 'react';
import { CardControlContext } from '../../hooks/useCardControl';
import { useCarouselControl } from '@/hooks/useCarouselControl';
import {
    Carousel, CarouselContent, CarouselItem, CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
const logos = import.meta.glob('../../assets/images/*.jpg', {
    eager: true,
    import: 'default'
}) as Record<string, string>

const logo = (name: string) => logos[`../../assets/images/${name}.jpg`]

const PORTFOLIOS = [{
    id: 0, imgSrc: logo('esocialbrasil'), alt: 'Imagem eSocial Brasil',
    title: 'eSocial Brasil - Contribuinte', link: 'https://www.esocialbrasil.com.br/'
}, {
    id: 1, imgSrc: logo('sov'), alt: 'SOV',
    title: 'SOV - Contribuinte', link: 'https://sov.proeg.ufpa.br/'
}, {
    id: 2, imgSrc: logo('sisprol'), alt: 'Imagem SISPROL',
    title: 'SISPROL - Contribuinte', link: 'https://sisprol.ufpa.br/view/inicio/'
}, {
    id: 3, imgSrc: logo('ppc'), alt: 'PPC',
    title: 'PPC - Contribuinte', link: 'https://ppc.proeg.ufpa.br/view/inicio/visitante.php'
}, {
    id: 4, imgSrc: logo('opiniao'), alt: 'Imagem Minha Opinião',
    title: 'Minha Opinião - Lead', link: 'https://avaliacao.ufpa.br/'
}, {
    id: 5, imgSrc: logo('tarefador'), alt: 'Imagem Tarefador',
    title: 'Tarefador - Solo', link: 'https://github.com/TacioDaito/tarefador'
}, {
    id: 6, imgSrc: logo('wip'), alt: 'Imagem WIP',
    title: 'Folkeep - Solo', link: 'https://github.com/TacioDaito/folkeep'
}]

export const Portfolio = ({ card }: CardProps) => {
    const { isExpanded } = useContext(CardControlContext);
    const expanded = isExpanded(card.id);
    const { count, api, setApi, isActive } = useCarouselControl();

    return (
        <div className='flex justify-center items-center pb-2 xs:pb-4 md:pb-2'>
            <Carousel setApi={setApi} plugins={[Autoplay({ delay: 4000, }),]}>
                <CarouselContent className='select-none my-1'>
                    {PORTFOLIOS.map((portfolio) => (
                        <CarouselItem key={portfolio.id}
                            className={`flex flex-row justify-center items-center 
                            transition-transform duration-300 ${expanded ? 'hover:scale-103' : ''}`}>
                            <img src={portfolio.imgSrc} alt={portfolio.alt}
                                className={`rounded-lg xs:rounded-2xl h-full shadow-sm/30 w-[80%]
                                    ${expanded ? 'landscape:w-[65%]' : 'landscape:w-[60%]'}`} />
                            {expanded && <>
                                <a href={portfolio.link} target='_blank' className='absolute
                                w-[85%] md:w-[65%] h-full rounded-lg xs:rounded-2xl'></a>
                                <p className='absolute px-1 bg-stone-900/60 font-normal
                                    rounded-xs bottom-1 w-max text-xxxxs xs:text-xxs text-stone-300 
                                    animate-fade-in-mid'>{portfolio.title}</p>
                            </>}
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex justify-center gap-2 mt-1 xs:mt-2">
                    {Array.from({ length: count }).map((_, index) => (
                        <button
                            className={`w-2 h-1 xs:w-3 xs:h-1.5 rounded-full shadow-sm/40 
                                transition-transform duration-300 hover:scale-130
                                ${isActive(index) ? "bg-stone-200 scale-130" : "bg-stone-600"}
                                ${expanded ? 'cursor-pointer' : 'pointer-events-none'}`}
                            key={index} onClick={() => api?.scrollTo(index)}
                        />
                    ))}
                </div>
                {expanded && <CarouselPrevious className='hidden landscape:inline-flex text-stone-200 w-35 active:-translate-x-2
                    animate-fade-in-mid cursor-pointer' />}
                {expanded && <CarouselNext className='hidden landscape:inline-flex text-stone-200 w-35 active:translate-x-2
                    animate-fade-in-mid cursor-pointer' />}
            </Carousel>
        </div>
    );
}