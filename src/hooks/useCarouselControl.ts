import { useState, useEffect } from 'react';
import { CarouselApi } from '@/components/ui/carousel';
export const useCarouselControl = () => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    const isActive = (index: number) => current - 1 === index;

    useEffect(() => {
        if (!api) return
        setCount(api.scrollSnapList().length)
        const handleSelect = () => setCurrent(api.selectedScrollSnap() + 1)
        api.on("select", handleSelect)

        return () => {
            api.off("select", handleSelect)
        }
    }, [api])

    return { api, setApi, current, count, isActive }
};