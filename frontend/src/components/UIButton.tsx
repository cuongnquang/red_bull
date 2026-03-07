interface UIButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    type?: "next" | "back";
    className?: string;
}

export default function uiButton({ label, onClick, disabled, type, className }: UIButtonProps) {
    const typeClass = type === "next" ? "text-white border-black bg-orange-600" : "text-orange-600 bg-white border-orange-600";
    const defaultClass = "text-[1.2rem] font-semibold rounded-md  border w-[22vh] h-[12vw] hover:bg-orange-700 cursor-pointer";
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