export default function CSpinWheel() {
    return (
        <>
            <div className="w-91 h-91 rounded-full border-5 border-black relative flex">
                <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-43 h-43 bg-red-500 rounded-tl-full">1</div>
                <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-43 h-43 bg-green-500 rounded-tr-full">2</div>
                <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 w-43 h-43 bg-blue-500 rounded-br-full">3</div>
                <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2 w-43 h-43 bg-yellow-500 rounded-bl-full">4</div>
                <div >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-30 h-30 bg-orange-400 border-3 border-orange-500 rounded-full">

                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-26 h-26 bg-orange-400 border-3 border-orange-500 rounded-full">

                    </div>
                </div>
                <div className="w-0 h-0 -top-3 left-1/2 absolute transform -translate-x-1/2
border-l-35 border-l-transparent
border-r-35 border-r-transparent
border-t-45 border-t-red-700 drop-shadow-lg"></div>
                
            </div>
        </>    
    )
}