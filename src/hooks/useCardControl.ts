import { useState, useEffect, useCallback, createContext } from 'react';
import type { CardId } from '../types/card';

type GridContextType = {
    expandedCard: CardId | null;
    onCardExpand: (id: CardId) => void;
    onCardClose: () => void;
};

export const GridContext = createContext<GridContextType>({
        expandedCard: null,
        onCardExpand: () => {},
        onCardClose: () => {},
    });

export const useCardControl = () => {
    const [expandedCard, setExpandedCard] = useState<CardId | null>(null);

    const handleCardExpand = useCallback((id: CardId) => {
        setExpandedCard(id);
    }, []);

    const handleCardClose = useCallback(() => {
        setExpandedCard(null);
    }, []);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape' && expandedCard !== null) {
            setExpandedCard(null);
        }
    }, [expandedCard]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    return {
        expandedCard,
        handleCardExpand,
        handleCardClose,
    };
}