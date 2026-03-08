import { useState } from "react";
import Header from "../components/Header";
import UIButton from "../components/UIButton";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function EnterPhonePage() {
    const navigate = useNavigate();
    const [phone, setPhone] = useState('');

    const handleContinue = () => {
        if (!phone.trim()) {
            toast.error("Vui lòng nhập số điện thoại.");
            return;
        }
        if (!/^0\d{9,10}$/.test(phone.trim())) {
            toast.error("Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại Việt Nam hợp lệ (bắt đầu bằng 0, 10-11 chữ số).");
            return;
        }
        // Giả sử kiểm tra nếu phone đã đăng ký (hardcode ví dụ)
        if (phone.trim() === "0123456789") {
            navigate("/game");
        } else {
            toast.error("Số điện thoại chưa được đăng ký. Vui lòng đăng ký trước.");
        }
    };
    const handleBack = () => {
            navigate("/");
    };
    return (
        <>
            <Header logoSize="large"/>
            <div className="mt-20 flex flex-col items-center p-7">
                <input type="tel" placeholder="NHẬP SỐ ĐIỆN THOẠI" value={phone} onChange={(e) => setPhone(e.target.value)} className="bg-blue-700 text-white placeholder:text-gray-200 border-2 border-black text-[1.5rem] h-15 text-left placeholder:text-center placeholder:opacity-100 p-5 mt-4 w-full"/>
                <UIButton 
                    label="Tiếp tục" 
                    onClick={handleContinue}
                    type="next"
                    className="mt-10"
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