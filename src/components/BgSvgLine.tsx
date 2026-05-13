import { useState, useEffect, useCallback } from "react";

export const BgSvgLine = ({ lineCount, loopDuration }: { lineCount: number, loopDuration: number }) => {
    
    const randomArray = useCallback(() =>
        Array.from({ length: lineCount }, () => Math.floor(Math.random() * 360)), [lineCount]);
    const [random, setRandom] = useState(randomArray);
    
    useEffect(() => {
        const id = setInterval(() => setRandom(randomArray()), loopDuration);
        return () => clearInterval(id);
    }, [loopDuration, randomArray]);

    return (
        <>
            {random.map((rotation, key) => {
                return (
                    <svg key={key} width='10000' height='101' xmlns="http://www.w3.org/2000/svg"
                        className={`absolute origin-center overflow-visible animate-neon z-1
                            w-[400vw] stroke-5 stroke-dark-500`}
                        style={{ transform: `rotate(${rotation}deg)` }}
                        onAnimationIteration={() => setRandom(randomArray())}>
                        <line x1="0" y1="51" x2="10001" y2="51" />
                    </svg>
                )
            })}
        </>
    )
}
