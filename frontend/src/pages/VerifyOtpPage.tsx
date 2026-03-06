import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import UIButton from "../components/UIButton";

export default function VerifyOtpPage() {
    const navigate = useNavigate();
    const handleAccept = () => {
            navigate("/game");
    };
    const handleBack = () => {
            navigate("/player-info");
    };
    return (
        <>
            <Header logoSize="large"/>
            <div className='mt-60 flex flex-col items-center p-7 w-full text-justify'>
                <input type="text" placeholder="Nhập Mã OTP" className="bg-blue-700 text-white placeholder:text-gray-200 border-2 border-black text-[25px] h-15 text-left placeholder:text-center placeholder:opacity-100 p-5 w-full"/>
                <p className="font-bold text-[22px] p-2 mt-2">Xem thể lệ chương trình <a href="#" className="text-blue-600 underline">tại đây</a></p>
                <UIButton 
                    label="Xác nhận" 
                    onClick={handleAccept}
                    type="next"
                    className="mt-30"
                />
                <UIButton 
                    label="Quay trở lại" 
                    onClick={handleBack}
                    type="back"
                    className="mt-5"
                />
            </div>
        </>    
    )
}