const prints = import.meta.glob('../assets/images/*.jpg', {
    eager: true,
    import: 'default'
}) as Record<string, string>

const logos = import.meta.glob('../assets/images/*.svg', {
    eager: true,
    import: 'default'
}) as Record<string, string>

Object.values(prints).forEach(src => {
    const img = new Image();
    img.src = src;
});

Object.values(logos).forEach(src => {
    const img = new Image();
    img.src = src;
});

export const print = (name: string) => prints[`../assets/images/${name}.jpg`]
export const logo = (name: string) => logos[`../assets/images/${name}.svg`]