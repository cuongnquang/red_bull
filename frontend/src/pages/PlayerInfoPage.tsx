import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Header from "../components/Header";
import UIButton from "../components/UIButton";

export default function PlayerInfoPage() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [agreed, setAgreed] = useState(false);

    const handleContinue = () => {
        if (!name.trim()) {
            toast.error("Vui lòng nhập họ và tên.");
            return;
        }
        if (!phone.trim()) {
            toast.error("Vui lòng nhập số điện thoại.");
            return;
        }
        if (!/^0\d{9,10}$/.test(phone.trim())) {
            toast.error("Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại Việt Nam hợp lệ (bắt đầu bằng 0, 10-11 chữ số).");
            return;
        }
        if (!agreed) {
            toast.error("Vui lòng đồng ý với các điều khoản và điều kiện.");
            return;
        }
        navigate("/verify-otp");
    };
    return (
        <>
        <Header logoSize="large"/>
        <div className="flex flex-col items-center p-7 w-full text-justify">
            <input 
                type="text" 
                placeholder="NHẬP HỌ VÀ TÊN" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-blue-700 text-white placeholder:text-gray-200 border-2 border-black text-[1.2rem] h-[4rem] text-left placeholder:text-center placeholder:opacity-100 p-5 w-full"
            />
            <input 
                type="tel" 
                placeholder="NHẬP SỐ ĐIỆN THOẠI" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-blue-700 text-white placeholder:text-gray-200 border-2 border-black text-[1.2rem] h-[4rem] text-left placeholder:text-center placeholder:opacity-100 p-5 mt-4 w-full"
            />
            <p className="text-2xl text-[1.8rem] mt-8"> 
                <input 
                    type="checkbox" 
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="scale-200 ml-2 mr-2 accent-green-300 cursor-pointer"
                /> 
                Tôi đồng ý với các điều khoản và điều kiện của Chính sách bảo vệ dữ liệu cá nhân của RedBull
            </p>  
            <UIButton 
                label="Xác nhận" 
                onClick={handleContinue}
                type="next"
                className="mt-5"
            />
        </div>
        </>  
    )
}