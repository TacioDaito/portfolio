import { useContext } from "react";
import { CardProps } from "../../constants/cards";
import { CardControlContext } from "../../hooks/useCardControl";
import photo from "../../assets/images/photo.jpg";

export const AboutMe = ({ card }: CardProps) => {
    
    const { isExpanded } = useContext(CardControlContext);
    
    return (
        <div className="flex flex-row items-center gap-6 select-none">
            <div className={`flex flex-col text-left
                ${isExpanded(card.id) ? 'text-2xl' : 'text-4xl'}`}>
                <p className="text-stone-50 mb-0.4">Tacio Kikuchi</p>
                <p className={`text-stone-200 ${isExpanded(card.id) ? 'text-xl animate-fade-in-fast'
                    : 'text-3xl'}`}>{`${isExpanded(card.id) ? `Desenvolvedor` : `Dev.`} Full Stack`}</p>
                {isExpanded(card.id) && <div>
                    <p className="text-sm mt-4 mb-0.5 text-stone-300 animate-fade-in-mid">
                        +3 Anos de Experiência</p>
                    <p className="text-sm text-stone-400 animate-fade-in-slow">
                        Cordial, Proativo, Paraense! </p>
                </div>}
            </div>
            {isExpanded(card.id) && <img src={photo} alt="Foto" className="aspect-3/4
                object-cover max-w-25 rounded-2xl noise-overlay shadow-xs/70 animate-fade-in-slow" />}
        </div>
    );

}