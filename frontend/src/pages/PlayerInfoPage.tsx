import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import UIButton from "../components/UIButton";

export default function PlayerInfoPage() {
    const navigate = useNavigate();
    const handleContinue = () => {
            navigate("/verify-otp");
    };
    return (
        <>s
        <Header logoSize="large"/>
        <div className="mt-50 flex flex-col items-center p-7 w-full text-justify">
            <input type="text" placeholder="NHẬP HỌ VÀ TÊN" className="bg-blue-700 text-white placeholder:text-gray-200 border-2 border-black text-[25px] h-15 text-left placeholder:text-center placeholder:opacity-100 p-5 w-full"/>
            <input type="text" placeholder="NHẬP SỐ ĐIỆN THOẠI" className="bg-blue-700 text-white placeholder:text-gray-200 border-2 border-black text-[25px] h-15 text-left placeholder:text-center placeholder:opacity-100 p-5 mt-4 w-full"/>
            <p className="text-2xl p-5 text-[28px] mt-8"> <input type="checkbox" className="scale-200 ml-2 accent-green-300 cursor-pointer"/> Tôi đồng ý với các điều khoản và điều kiện của Chính sách bảo vệ dữ liệu cá nhân của RedBull</p>  
            <UIButton 
                label="Xác nhận" 
                onClick={handleContinue}
                type="next"
                className="bottom-10"
            />
        </div>
        </>  
    )
}