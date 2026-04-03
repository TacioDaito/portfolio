export type CardId = 'about' | 'skills' | 'portfolio' | 'contact';

export interface CardData {
  id: CardId;
  label: string;
}