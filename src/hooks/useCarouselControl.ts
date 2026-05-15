import { useState, useEffect } from 'react';
import { CarouselApi } from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/useIsMobile';

export const useCarouselControl = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const isActive = (index: number) => Math.max(0, current - 1) === index;
    const isMobile = useIsMobile();


    useEffect(() => {
        if (!api) return;
        setCount(api.scrollSnapList().length);
        const handleSelect = () => setCurrent(api.selectedScrollSnap() + 1);
        api.on("select", handleSelect);

        return () => {
            api.off("select", handleSelect);
        }
    }, [api]);

    useEffect(() => {
        if (!api) return;
        if (!isMobile) return;

        const onSelect = () => {
            api.scrollTo(api.selectedScrollSnap(), true);
        };

        api.on("scroll", onSelect);
        return () => { api.off("scroll", onSelect) };
    }, [api, isMobile]);

    return { api, setApi, current, count, isActive };
};