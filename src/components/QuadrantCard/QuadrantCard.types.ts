import type { CardData } from '../../types/card';

export interface QuadrantCardProps {
  card: CardData;
  isExpanded: boolean;
  isAnyExpanded: boolean;
  onExpand: () => void;
}