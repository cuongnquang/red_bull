import { RiBookOpenLine } from "react-icons/ri";
import Header from "../../components/Header";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { BiBox } from "react-icons/bi";
import { useNavigate } from "react-router-dom";


export default function PGGamePage(){
    const navigate = useNavigate();
    const handleScan = () => {
        navigate("/scan-qr");
    }
    return(
        <>
            <Header logoSize="large"/>
            <div className="grid grid-cols-2 w-full h-full p-10 gap-10 text-center">
                <div>
                   <p className="text-2xl text-blue-500 font-medium">GAME</p>
                   <button className="w-full h-full" onClick={handleScan}>
                        <IoGameControllerOutline className="w-full h-full"/>
                   </button>
                   
                </div>
                <div>
                    <p className="text-2xl text-blue-500 font-medium">WORK</p>
                    <button className="w-full h-full" onClick={handleScan}>
                        <FaComputer className="w-full h-full "/>
                    </button>
                    
                </div>
                <div>
                    <p className="text-2xl text-blue-500 font-medium">STUDY</p>
                    <button className="w-full h-full" onClick={handleScan}>
                        <RiBookOpenLine className="w-full h-full"/>
                    </button>
                    
                </div>
                <div>
                    <p className="text-2xl text-red-500 font-medium">GIFT</p>
                    <button className="w-full h-full" onClick={handleScan}>
                        <BiBox className="w-full h-full "/>
                    </button>
                    
                </div>
            </div>
        </>
    )
}