import { useContext } from "react";
import { CardProps } from "../../constants/cards";
import { CardControlContext } from "../../hooks/useCardControl";
import photo from "../../assets/photo.jpg";

export const AboutMe = ({ card }: CardProps) => {
    
    const { isExpanded } = useContext(CardControlContext);
    
    return (
        <div className="flex flex-row items-center gap-6">
            <div className={`flex flex-col text-left
                ${isExpanded(card.id) ? 'text-2xl' : 'text-4xl'}`}>
                <p className="text-stone-50 mb-0.4">Tacio Kikuchi</p>
                <p className={`text-stone-300 ${isExpanded(card.id) ? 'text-xl' : 'text-3xl'}`}>
                    {`${isExpanded(card.id) ? `Desenvolvedor`
                    : `Dev.`} Full Stack`}</p>
                {isExpanded(card.id) &&
                    <p className="text-sm mt-4 mb-0.5 text-stone-400">+3 Anos de Experiência</p>}
                {isExpanded(card.id) &&
                    <p className="text-sm text-stone-500">Cordial, Proativo, Paraense! </p>}
            </div>
            {isExpanded(card.id) && <img src={photo} alt="Foto" className="aspect-3/4
                object-cover max-w-25 rounded-2xl noise-overlay shadow-sm/30" />}
        </div>
    );

}