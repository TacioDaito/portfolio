import { useContext } from "react";
import { CardProps } from "../../constants/cards";
import { CardControlContext } from "../../hooks/useCardControl";
import gmailLogo from "../../assets/images/gmail.svg";
import linkedInLogo from "../../assets/images/linkedin.svg";
import whatsAppLogo from "../../assets/images/whatsapp.svg";
import gitHubLogo from "../../assets/images/github.svg";

export const Contact = ({ card }: CardProps) => {

    const { isExpanded } = useContext(CardControlContext);
    const expanded = isExpanded(card.id);

    const baseClasses = {
        rootDiv: `text-left px-6`,
        contactDiv: `flex flex-row gap-4 items-center`,
        icon: `h-6 w-6`,
        email: `text-stone-100`,
        linkedin: `text-stone-200`,
        whatsapp: `text-stone-300`,
        github: `text-stone-400`,
    }
    const stateClasses = expanded ? {
        rootDiv: `flex flex-col gap-5 mb-4`,
        contactDiv: ``,
        icon: ``,
        email: `text-sm animate-fade-in-fast`,
        linkedin: `text-sm animate-fade-in-fast`,
        whatsapp: `text-sm animate-fade-in-fast`,
        github: `text-sm animate-fade-in-fast`,
    } : {
        rootDiv: `grid grid-cols-2 grid-rows-2 gap-x-8
            gap-y-8 mb-4`,
        contactDiv: ``,
        icon: `h-8 w-8`,
        email: `text-xl`,
        linkedin: `text-xl`,
        whatsapp: `text-xl`,
        github: `text-xl`,
    };
    const fullClasses = {
        rootDiv: `${baseClasses.rootDiv} ${stateClasses.rootDiv}`,
        contactDiv: `${baseClasses.contactDiv} ${stateClasses.contactDiv}`,
        icon: `${baseClasses.icon} ${stateClasses.icon}`,
        email: `${baseClasses.email} ${stateClasses.email}`,
        linkedin: `${baseClasses.linkedin} ${stateClasses.linkedin}`,
        whatsapp: `${baseClasses.whatsapp} ${stateClasses.whatsapp}`,
        github: `${baseClasses.github} ${stateClasses.github}`,
    };

    const contactText = expanded ? {
        email: `taciokikuchi@gmail.com`,
        linkedin: `linkedin.com/in/tacio-kikuchi-a2b675120`,
        whatsapp: `91 9 8173-7653`,
        github: `github.com/taciokikuchi`,
    } : {
        email: `Email`,
        linkedin: `LinkedIn`,
        whatsapp: `WhatsApp`,
        github: `GitHub`,
    };

    const ContactDiv = ({ iconSrc, fullClassesIcon, fullClassesText, altText, displayText }
        : { iconSrc: string, fullClassesIcon: string, fullClassesText: string, altText: string, displayText: string }) => (
        <div className={fullClasses.contactDiv}>
            <img src={iconSrc} alt={altText} className={fullClassesIcon} />
            <p className={fullClassesText}>{displayText}</p>
        </div>
    );

    return (
        <div className={fullClasses.rootDiv}>
            <ContactDiv iconSrc={gmailLogo} fullClassesIcon={fullClasses.icon}
                fullClassesText={fullClasses.email} altText="Gmail Logo" displayText={contactText.email} />
            <ContactDiv iconSrc={linkedInLogo} fullClassesIcon={fullClasses.icon}
                fullClassesText={fullClasses.linkedin} altText="LinkedIn Logo" displayText={contactText.linkedin} />
            <ContactDiv iconSrc={whatsAppLogo} fullClassesIcon={fullClasses.icon}
                fullClassesText={fullClasses.whatsapp} altText="WhatsApp Logo" displayText={contactText.whatsapp} />
            <ContactDiv iconSrc={gitHubLogo} fullClassesIcon={fullClasses.icon}
                fullClassesText={fullClasses.github} altText="GitHub Logo" displayText={contactText.github} />
        </div>
    );

}