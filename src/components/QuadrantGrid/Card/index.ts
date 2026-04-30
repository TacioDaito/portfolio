import { FC, ReactNode } from 'react';
import { Card as Parent } from './Card';
import { Content } from './Content';
import { ExpandedOverlay } from './ExpandedOverlay';

interface CardComponents extends FC<{ children: ReactNode }> {
    Content: typeof Content;
    ExpandedOverlay: typeof ExpandedOverlay;
}

const Card = Parent as CardComponents;
Card.Content = Content;
Card.ExpandedOverlay = ExpandedOverlay;
export default Card;