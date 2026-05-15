import { logo } from '@/lib/imageImports';

export const RedirectButton = ({ link, className }: { link: string, className: string }) => {

    return (
        <a href={link} target='_blank' className={`cursor-pointer
            flex flex-row justify-center items-center shadow-sm/20
            bg-stone-300 rounded-[20%] hover:scale-110
            transition-transform duration-200 active:bg-stone-400
            ${className}`}>
            <img src={logo('redirect')} alt="Copy Icon" />
        </a>
    );
};
