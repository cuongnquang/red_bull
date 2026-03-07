import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import UIButton from "../components/UIButton";

export default function LuckySpinResultPage() {
    const navigate = useNavigate();
    const handleAccpet = () => {
       navigate("/total-rewards");
    }
    return (
        <>
            <Header logoSize="small"/>
            <div className="flex flex-col gap-5 p-5 items-center text-center">
                <p className="text-[2rem] font-bold text-blue-500">CHÚC MỪNG BẠN ĐÃ NHẬN ĐƯỢC</p>
                <p className="text-[1.8rem] font-bold text-red-500"><a className="text-green-500">1 </a>LON REDBULL EXTRA</p>
                <div className='bg-green-300 p-5 rounded-lg'>
                    <img src="/path/to/prize-image.jpg" alt="Giải thưởng" className=" mx-auto" />
                </div>
                <UIButton 
                    label="Tiếp tục" 
                    onClick={handleAccpet}
                    type="next"
                    className="mt-30"
                />
            </div>
        </>   
    )
}