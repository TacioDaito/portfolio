import { FC, ReactNode } from 'react';
import { QuadrantGrid as Parent } from './QuadrantGrid';
import Card from './Card';

interface QuadrantGridComponents extends FC<{ children: ReactNode }> {
    Card: typeof Card;
}

const QuadrantGrid = Parent as QuadrantGridComponents;
QuadrantGrid.Card = Card;
export default QuadrantGrid ;