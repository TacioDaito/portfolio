export const CARDS = [
	{ id: 0, label: 'Sobre Mim', transformOrigin: 'origin-top-left' },
	{ id: 1, label: 'Competências', transformOrigin: 'origin-top-right' },
	{ id: 2, label: 'Portfólio', transformOrigin: 'origin-bottom-left' },
	{ id: 3, label: 'Contato', transformOrigin: 'origin-bottom-right' },
] as const;

export type CardId = typeof CARDS[number]['id'];
export type CardData = typeof CARDS[number];
export interface CardProps { card: CardData }