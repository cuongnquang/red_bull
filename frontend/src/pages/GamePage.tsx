import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import QR from "../components/QRCode";

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
            <QR value="https://example.com" size='large'/>
            
            <div className="flex flex-row gap-5">
                <div className="w-[20vw] h-[10vh] bg-blue-500 "></div>
                <div className="w-[20vw] h-[10vh] bg-green-500 "></div>
                <div className="w-[20vw] h-[10vh] bg-red-500"></div>
            </div>
            <button className="w-[10rem] h-[10rem] rounded-full bg-yellow-500 mb-10" onClick={handleSpinWheel}></button>
        </div>
        </>  
    )
}