import { useState } from 'react';
import copyIcon from "../../assets/images/copy.svg";
import checkIcon from "../../assets/images/check.svg";

export const CopyButton = ({ textToCopy }: { textToCopy: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (err) {
            console.error('Falha ao copiar!', err);
        }
    };

    return (
        <button onClick={handleCopy} className={`cursor-pointer
            flex flex-row justify-center items-center shadow-sm/20
            bg-stone-300 rounded-[20%] hover:scale-110
            transition-transform duration-200 active:bg-stone-400`}
            disabled={copied}>
            <img src={copied ? checkIcon : copyIcon} alt="Copy Icon"
                className={copied ? 'scale-90' : ''} />
        </button>
    );
};
