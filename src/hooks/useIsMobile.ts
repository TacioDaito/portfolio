import { useState, useEffect } from 'react';

export const useIsMobile = (breakpoint: number = 512): boolean => {
    const [isMobile, setIsMobile] = useState<boolean>(
        () => window.matchMedia(`(max-width: ${breakpoint}px)`).matches
    );

    useEffect(() => {
        const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
        const handler = (event: MediaQueryListEvent) => setIsMobile(event.matches);
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, [breakpoint]);

    return isMobile;
}