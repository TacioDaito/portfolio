import { useState, useEffect, KeyboardEvent as ReactKeyBoardEvent } from 'react';
import type { CardId } from '../constants/cards';

export type ExpandedCard = CardId | null;
export type SetExpandedCard = (cardId: CardId | null) => void;
export type IsExpanded = (cardId: CardId) => boolean;
export type HandleKeyPressExpand = (e: ReactKeyBoardEvent, cardId: CardId) => void;

export const useCardControl = () => {

	const [expandedCard, setExpandedCard] = useState<CardId | null>(null);
	const isExpanded = (cardId: CardId) => expandedCard === cardId;

	const handleKeyPressExpand = (e: ReactKeyBoardEvent, cardId: CardId) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			setExpandedCard(cardId);
		}
	};

	useEffect(() => {
		const handleKeyPressEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && expandedCard !== null) {
				setExpandedCard(null);
			}
		}
		window.addEventListener('keydown', handleKeyPressEscape);
		return () => window.removeEventListener('keydown', handleKeyPressEscape);
	}, [expandedCard]);

	return {
		expandedCard,
		setExpandedCard,
		isExpanded,
		handleKeyPressExpand,
	};
}