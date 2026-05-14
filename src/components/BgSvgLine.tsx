import { useState, useEffect, useCallback } from "react";

export const BgSvgLine = ({ lineCount, loopDuration }: { lineCount: number, loopDuration: number }) => {
    
    const randomArray = useCallback(() =>
        Array.from({ length: lineCount }, () => (
            {
                rotation: Math.floor(Math.random() * 360),
                stroke: Math.floor(Math.random() * 10 + 1)
            })), [lineCount]);
    const [random, setRandom] = useState(randomArray);
    
    useEffect(() => {
        const id = setInterval(() => setRandom(randomArray()), loopDuration);
        return () => clearInterval(id);
    });

    return (
        <>
            {random.map((randomPair: { rotation: number, stroke: number }, key) => {
                return (
                    <svg key={key} width='10000' height='101' xmlns="http://www.w3.org/2000/svg"
                        className={`absolute origin-center overflow-visible animate-neon z-1
                            w-[400vw] stroke-dark-300`}
                        style={{
                            transform: `rotate(${randomPair.rotation}deg)`,
                            strokeWidth: `${randomPair.stroke}px`
                        }}
                        onAnimationIteration={() => setRandom(randomArray())}>
                        <line x1="0" y1="51" x2="10001" y2="51" />
                        <line x1="0" y1="51" x2="10001" y2="51"
                            className="stroke-indigo-500 blur-[3px] opacity-30"
                            style={{ strokeWidth: `${randomPair.stroke * 2}px` }}
                        />
                    </svg>
                )
            })}
        </>
    )
}
