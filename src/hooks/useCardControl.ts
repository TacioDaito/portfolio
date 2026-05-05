import { useState, useEffect, KeyboardEvent as ReactKeyBoardEvent, createContext } from 'react';
import type { CardId } from '../constants/cards';

type ExpandedCard = CardId | null;
type SetExpandedCard = (cardId: CardId | null) => void;
type IsExpanded = (cardId: CardId) => boolean;
type IsOtherCardExpanded = (cardId: CardId) => boolean;
type HandleKeyPressExpand = (e: ReactKeyBoardEvent, cardId: CardId) => void;

interface CardControlContextProps {
	expandedCard: ExpandedCard;
	setExpandedCard: SetExpandedCard;
	isExpanded: IsExpanded;
	isOtherCardExpanded: IsOtherCardExpanded;
	handleKeyPressExpand: HandleKeyPressExpand;
}

export const CardControlContext = createContext<CardControlContextProps>({
	expandedCard: null,
	setExpandedCard: () => { throw new Error('setExpandedCard called outside CardControlProvider'); },
	isExpanded: () => { throw new Error('isExpanded called outside CardControlProvider'); },
	isOtherCardExpanded: () => { throw new Error('isOtherCardExpanded called outside CardControlProvider'); },
	handleKeyPressExpand: () => { throw new Error('handleKeyPressExpand called outside CardControlProvider'); },
});

export const useCardControl = () => {

	const [expandedCard, setExpandedCard] = useState<CardId | null>(null);
	const isExpanded = (cardId: CardId) => expandedCard === cardId;
	const isOtherCardExpanded = (cardId: CardId) => expandedCard !== null && expandedCard !== cardId;
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
	});

	return {
		expandedCard,
		setExpandedCard,
		isExpanded,
		isOtherCardExpanded,
		handleKeyPressExpand,
	};

}