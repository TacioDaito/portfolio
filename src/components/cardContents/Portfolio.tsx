import { CardProps } from '../../constants/cards';
import portfolioImg from '../../assets/images/portfolio.jpg';
import { useContext } from 'react';
import { CardControlContext } from '../../hooks/useCardControl';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

export const Portfolio = ({ card }: CardProps) => {
    const { isExpanded } = useContext(CardControlContext);
    const expanded = isExpanded(card.id);

    return (
        <div className='flex justify-center items-center'>
            {!expanded && <img src={portfolioImg} alt='Imagem Portfólio'
                className='rounded-2xl w-[65%] shadow-md/30 mb-4' />}
            {expanded && <div className='animate-fade-in-mid'>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>1</CarouselItem>
                        <CarouselItem>2</CarouselItem>
                        <CarouselItem>3</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>}
        </div>
    );
}