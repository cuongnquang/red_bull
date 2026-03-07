import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import QR from "../components/QRCode";
import { RiBookOpenLine } from "react-icons/ri";
import { FaComputer } from "react-icons/fa6";
import { IoGameControllerOutline } from "react-icons/io5";
import CSpinWheel from "../components/CSpinWheel";

export default function GamePage() {
    const navigate = useNavigate();
    const handleSpinWheel = () => {
            navigate("/spin-wheel");
    };
    return (
        <>
        <Header logoSize="small"/>
        <div className="flex flex-col mt-10 gap-10 items-center">
            <div>
                <p className="text-[2rem] text-center">Mã hành trình</p>
                <p className="text-[2rem] text-center font-bold">123456</p>
            </div>
            <QR value="https://www.facebook.com/profile.php?id=100057433429427" size='large'/>
            
            <div className="flex flex-row gap-5">
                <div className="w-[20vw] h-[10vh] ">
                   <RiBookOpenLine className="w-full h-full text-gray-300"/>
                </div>
                <div className="w-[20vw] h-[10vh]">
                    <FaComputer className="w-full h-full text-gray-300"/>
                </div>
                <div className="w-[20vw] h-[10vh]">
                    <IoGameControllerOutline className="w-full h-full text-gray-300 "/>
                </div>
            </div>
            <button className="mb-10" onClick={handleSpinWheel}>
                <CSpinWheel size="small"/>
            </button>
        </div>
        </>  
    )
}