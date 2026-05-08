import { useState } from 'react';
import copyIcon from "../../assets/images/copy.svg";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export const CopyButton = ({ textToCopy }: { textToCopy: string }) => {
    const [copied, setCopied] = useState(false);
    const [tooltipVisible, setTooltipVisible] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTooltipVisible(true);
            setTimeout(() => {
                setTooltipVisible(false);
            }, 2000);
            setTimeout(() => {
                setCopied(false)
            }, 3000);
        } catch (err) {
            console.error('Falha ao copiar!', err);
        }
    };

    return (
        <Tooltip open={tooltipVisible} onOpenChange={setTooltipVisible}>
            <TooltipTrigger asChild>
                <button onMouseEnter={() => setTooltipVisible(true)}
                    onMouseLeave={() => !copied && setTooltipVisible(false)}
                    onClick={handleCopy} className={`cursor-pointer
                    flex flex-row justify-center items-center
                    bg-stone-300 rounded-[20%] hover:scale-104
                    transition-all duration-200
                    active:bg-stone-400`} >
                    <img src={copyIcon} alt="Copy Icon" />
                </button>
            </TooltipTrigger>
            <TooltipContent>
                <p className='select-none'>{copied ? 'Copiado!' : 'Copiar'}</p>
            </TooltipContent>
        </Tooltip>
    );
};
