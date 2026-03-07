import Header from "../components/Header";
import UIButton from "../components/UIButton";
import { useNavigate } from "react-router-dom";

export default function EnterPhonePage() {
    const navigate = useNavigate();
    const handleContinue = () => {
            navigate("/game");
    };
    const handleBack = () => {
            navigate("/");
    };
    return (
        <>
            <Header logoSize="large"/>
            <div className="mt-20 flex flex-col items-center p-7">
                <input type="text" placeholder="NHẬP SỐ ĐIỆN THOẠI" className="bg-blue-700 text-white placeholder:text-gray-200 border-2 border-black text-[1.5rem] h-15 text-left placeholder:text-center placeholder:opacity-100 p-5 mt-4 w-full"/>
                <UIButton 
                    label="Tiếp tục" 
                    onClick={handleContinue}
                    type="next"
                    className="mt-20"
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