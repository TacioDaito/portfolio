export const CARDS = [
	{ id: 0, label: 'About Me' },
	{ id: 1, label: 'Skills' },
	{ id: 2, label: 'Portfolio' },
	{ id: 3, label: 'Contact' },
] as const;

export type CardId = typeof CARDS[number]['id'];
export type CardData = typeof CARDS[number];