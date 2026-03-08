interface UIButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    type?: "next" | "back" | 'scan';
    className?: string;
}

export default function uiButton({ label, onClick, disabled, type, className }: UIButtonProps) {
    const typeClass = type === "next" ? "text-white border-black bg-orange-600" : type === "back" ? "text-orange-600 bg-white border-orange-600" : "text-gray-200 bg-black border-orange-600";
    const defaultClass = "text-[1.2rem] font-semibold rounded-md  border w-[22vh] h-[12vw] hover:bg-orange-700 cursor-pointer duration-500 delay-300";
    return(
        <button 
            className={`${defaultClass} ${typeClass} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    )
}