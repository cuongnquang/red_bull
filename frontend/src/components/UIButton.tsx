interface UIButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    type?: "next" | "back";
    className?: string;
}

export default function uiButton({ label, onClick, disabled, type, className }: UIButtonProps) {
    const typeClass = type === "next" ? "text-white border-black bg-orange-600" : "text-orange-600 bg-white border-orange-600";
    const defaultClass = "text-[20px] font-semibold rounded-md  border w-40 h-14 hover:bg-orange-700 cursor-pointer";
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