import type { CardId } from '../../types/card';

export interface QuadrantGridProps {
  expandedCard: CardId | null;
  onCardExpand: (id: CardId) => void;
  onCardClose: () => void;
}