import { CardProps } from '../../constants/cards';
import { useContext } from 'react';
import { CardControlContext } from '../../hooks/useCardControl';
import { useCarouselControl } from '@/hooks/useCarouselControl';
import {
    Carousel, CarouselContent, CarouselItem, CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import sisprolImg from '@/assets/images/sisprol.jpg';
import opiniaoImg from '../../assets/images/opiniao.jpg';
import esocialbrasilImg from '../../assets/images/esocialbrasil.jpg';
import tarefadorImg from '../../assets/images/tarefador.jpg';
import wipImg from '../../assets/images/wip.jpg';

const PORTFOLIOS = [{
    id: 0, imgSrc: sisprolImg, alt: 'Imagem SISPROL',
    title: 'SISPROL - Contribuinte', link: 'https://sisprol.ufpa.br/view/inicio/'
}, {
    id: 1, imgSrc: opiniaoImg, alt: 'Imagem Minha Opinião',
    title: 'Minha Opinião - Lead', link: 'https://avaliacao.ufpa.br/'
}, {
    id: 2, imgSrc: esocialbrasilImg, alt: 'Imagem eSocial Brasil',
    title: 'eSocial Brasil - Contribuinte', link: 'https://www.esocialbrasil.com.br/'
}, {
    id: 3, imgSrc: tarefadorImg, alt: 'Imagem Tarefador',
    title: 'Tarefador - Solo', link: 'https://github.com/TacioDaito/tarefador'
}, {
    id: 4, imgSrc: wipImg, alt: 'Imagem WIP',
    title: 'Folkeep - Solo', link: 'https://github.com/TacioDaito/folkeep'
}]

export const Portfolio = ({ card }: CardProps) => {
    const { isExpanded } = useContext(CardControlContext);
    const expanded = isExpanded(card.id);
    const { count, api, setApi, isActive } = useCarouselControl();

    return (
        <div className='flex justify-center items-center pb-2 xs:pb-4 md:pb-2'>
            <Carousel setApi={setApi} plugins={[Autoplay({ delay: 4000, }),]}>
                <CarouselContent className='select-none'>
                    {PORTFOLIOS.map((portfolio) => (
                        <CarouselItem key={portfolio.id} className='flex flex-row justify-center 
                            items-center hover:scale-103 transition-all duration-300'>
                            <img src={portfolio.imgSrc} alt={portfolio.alt} className={`rounded-lg xs:rounded-2xl 
                                w-[85%]shadow-md/40 w-[85%] ${expanded ? 'md:w-[65%]' : 'md:w-[60%]'}`} />
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
                <div className="flex justify-center gap-2 mt-2 xs:mt-4">
                    {Array.from({ length: count }).map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-1 xs:w-3 xs:h-1.5 rounded-full shadow-sm/40 transition-all duration-300
                                ${isActive(index) ? "bg-stone-200 scale-130" : "bg-stone-600"}
                                ${expanded ? '' : 'pointer-events-none'}`}
                            onClick={() => api?.scrollTo(index)}
                        />
                    ))}
                </div>
                {expanded && <CarouselPrevious className='hidden md:inline-flex text-stone-200 w-35 active:-translate-x-2
                    animate-fade-in-mid cursor-pointer' />}
                {expanded && <CarouselNext className='hidden md:inline-flex text-stone-200 w-35 active:translate-x-2
                    animate-fade-in-mid cursor-pointer' />}
            </Carousel>
        </div>
    );
}