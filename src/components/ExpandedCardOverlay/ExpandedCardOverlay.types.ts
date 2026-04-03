import type { CardData } from '../../types/card';

export interface ExpandedCardOverlayProps {
  card: CardData;
  onClose: () => void;
}