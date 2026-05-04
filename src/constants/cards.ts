export const CARDS = [
	{ id: 0, label: 'About Me', transformOrigin: 'top left' },
	{ id: 1, label: 'Skills', transformOrigin: 'top right' },
	{ id: 2, label: 'Portfolio', transformOrigin: 'bottom left' },
	{ id: 3, label: 'Contact', transformOrigin: 'bottom right' },
] as const;

export type CardId = typeof CARDS[number]['id'];
export type CardData = typeof CARDS[number];