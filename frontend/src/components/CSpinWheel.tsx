interface CSpinWheelProps {
    size?: "small" | "large";
}

export default function CSpinWheel({ size = "large" }: CSpinWheelProps ) {
    const sizeClass = size === "small" ? "w-[30vw] h-[30vw]" : "w-[90vw] h-[90vw]";
    const sizeClassInner = size === "small" ? "w-[13vw] h-[13vw]" : "w-[42vw] h-[42vw]";
    const cicleSize = size === "small" ? "w-[10vw] h-[10vw]" : "w-[30vw] h-[30vw]";
    const borderSize = size === "small" ? "w-[5vw] h-[5vw]" : "w-[20vw] h-[20vw]";
    const tangleSize = size === "small" ? "border-l-15 border-r-15 border-t-20 -top-2" : "border-l-35 border-r-35 border-t-45 -top-3";
    return (
        <>
            <div className={`${sizeClass} rounded-full border-5 border-black relative flex`}>
                <div className={`absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 ${sizeClassInner} bg-red-500 rounded-tl-full`}>1</div>
                <div className={`absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 ${sizeClassInner} bg-green-500 rounded-tr-full`}>2</div>
                <div className={`absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 ${sizeClassInner} bg-blue-500 rounded-br-full`}>3</div>
                <div className={`absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2 ${sizeClassInner} bg-yellow-500 rounded-bl-full`}>4</div>
                <div >
                    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${cicleSize} bg-orange-400 border-3 border-orange-500 rounded-full`}>

                    </div>
                    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${borderSize} bg-orange-400 border-3 border-orange-500 rounded-full`}>
                    </div>
                </div>
                <div className={`w-0 h-0 left-1/2 absolute transform -translate-x-1/2 ${tangleSize} border-l-transparent border-r-transparent border-t-red-700 drop-shadow-lg`}></div>
                
            </div>
        </>    
    )
}