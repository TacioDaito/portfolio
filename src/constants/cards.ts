export const CARDS = [
	{ id: 0, label: 'About Me', transformOrigin: 'origin-top-left' },
	{ id: 1, label: 'Skills', transformOrigin: 'origin-top-right' },
	{ id: 2, label: 'Portfolio', transformOrigin: 'origin-bottom-left' },
	{ id: 3, label: 'Contact', transformOrigin: 'origin-bottom-right' },
] as const;

export type CardId = typeof CARDS[number]['id'];
export type CardData = typeof CARDS[number];