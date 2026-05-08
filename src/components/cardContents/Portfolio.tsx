import { CardProps } from '../../constants/cards';
import { useContext } from 'react';
import { CardControlContext } from '../../hooks/useCardControl';
import {
    Carousel, CarouselContent, CarouselItem, CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel'
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

    return (
        <div className='flex justify-center items-center'>
            <Carousel plugins={[Autoplay({ delay: 4000, }),]}>
                <CarouselContent className='select-none mb-4 mt-2'>
                    {PORTFOLIOS.map((portfolio) => (
                        <CarouselItem key={portfolio.id} className='flex flex-row justify-center 
                            items-center hover:scale-103 transition-all duration-300'>
                            <img src={portfolio.imgSrc} alt={portfolio.alt} className='rounded-2xl 
                                w-[65%] shadow-md/30' />
                            {expanded && <>
                                <a href={portfolio.link} target='_blank' className='absolute w-[65%]
                                    h-full rounded-2xl'></a>
                                <p className='absolute px-1 bg-stone-900/60 font-normal
                                    rounded-xs bottom-1 w-max text-[0.6rem] text-stone-300 
                                    animate-fade-in-mid'>{portfolio.title}</p>
                            </>}
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {expanded && <CarouselPrevious className='text-stone-200 w-35 active:-translate-x-2
                    animate-fade-in-mid' />}
                {expanded && <CarouselNext className='text-stone-200 w-35 active:translate-x-2
                    animate-fade-in-mid' />}
            </Carousel>
        </div>
    );
}