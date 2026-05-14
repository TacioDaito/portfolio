import { CardProps } from '../../constants/cards';
import { useContext } from 'react';
import { CardControlContext } from '../../hooks/useCardControl';
import { useCarouselControl } from '@/hooks/useCarouselControl';
import {
    Carousel, CarouselContent, CarouselItem, CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
const prints = import.meta.glob('../../assets/images/*.jpg', {
    eager: true,
    import: 'default'
}) as Record<string, string>
const logos = import.meta.glob('../../assets/images/*.svg', {
    eager: true,
    import: 'default'
}) as Record<string, string>

const print = (name: string) => prints[`../../assets/images/${name}.jpg`]
const logo = (name: string) => logos[`../../assets/images/${name}.svg`]

const PORTFOLIOS = [{
    id: 0, imgSrc: print('esocialbrasil'), alt: 'Imagem eSocial Brasil',
    title: 'eSocial Brasil - Contribuinte', link: 'https://www.esocialbrasil.com.br/',
    stackSrc: [logo('laravel'), logo('vue'), logo('php'), logo('javascript'), logo('mariadb'),
        logo('mongo'), logo('redis'), logo('docker')
    ]
}, {
    id: 1, imgSrc: print('sov'), alt: 'SOV',
    title: 'SOV - Contribuinte', link: 'https://sov.proeg.ufpa.br/',
    stackSrc: [logo('laravel'), logo('php'), logo('javascript'),logo('mariadb')]
}, {
    id: 2, imgSrc: print('sisprol'), alt: 'Imagem SISPROL',
    title: 'SISPROL - Contribuinte', link: 'https://sisprol.ufpa.br/view/inicio/',
    stackSrc: [logo('php'), logo('javascript'), logo('mariadb')]
}, {
    id: 3, imgSrc: print('ppc'), alt: 'PPC',
    title: 'PPC - Contribuinte', link: 'https://ppc.proeg.ufpa.br/view/inicio/visitante.php',
    stackSrc: [logo('php'), logo('javascript'), logo('mariadb')]
}, {
    id: 4, imgSrc: print('opiniao'), alt: 'Imagem Minha Opinião',
    title: 'Minha Opinião - Lead', link: 'https://avaliacao.ufpa.br/',
    stackSrc: [logo('laravel'), logo('vue'), logo('php'), logo('typescript'), logo('mariadb')]
}, {
    id: 5, imgSrc: print('tarefador'), alt: 'Imagem Tarefador',
    title: 'Tarefador - Solo', link: 'https://github.com/TacioDaito/tarefador',
    stackSrc: [logo('laravel'), logo('vue'), logo('php'), logo('javascript'), logo('mariadb'),
        logo('mongo'), logo('tailwind'), logo('docker')
    ]
}, {
    id: 6, imgSrc: print('wip'), alt: 'Imagem WIP',
    title: 'Folkeep - Solo', link: 'https://github.com/TacioDaito/folkeep',
    stackSrc: [logo('laravel'), logo('react'), logo('nextjs'), logo('php'), logo('typescript'),
        logo('postgres'), logo('mongo'), logo('redis'), logo('docker'),]
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
                        <CarouselItem key={portfolio.id} className='flex justify-center'>
                            {expanded && <div className="absolute top-1 flex flex-row gap-1 xs:gap-2 z-100 w-max">
                                {portfolio.stackSrc.map((stack, index) => (
                                    <img src={stack} alt={portfolio.title}
                                        key={index} className='w-2 xs:w-4 animate-fade-in-fast
                                            bg-stone-900/70 rounded-xs p-px xs:p-0.5' />
                                ))}
                            </div>}
                            <div className={`transition-transform duration-300 flex justify-center relative
                                items-center w-[80%] ${expanded ? 'hover:scale-103 landscape:w-[65%]' : 'landscape:w-[60%]'}`}>
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