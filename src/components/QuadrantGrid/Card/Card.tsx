import { ReactNode } from 'react';

export const Card = ({ children }: { children: ReactNode }) => {
    return (
        {cards.map((card) => (
            <div key={card.id} className="relative">
                {children}
            </div>
        ))}
    );
}