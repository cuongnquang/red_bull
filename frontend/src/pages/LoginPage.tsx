import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Header from "../components/Header";
import UIButton from "../components/UIButton";

export default function LoginPage(){
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin=()=>{
        if (!username.trim()) {
            toast.error("Vui lòng nhập tên đăng nhập.");
            return;
        }
        if (!password.trim()) {
            toast.error("Vui lòng nhập mật khẩu.");
            return;
        }
        // Giả sử kiểm tra credentials (hardcode ví dụ)
        if (username.trim() === "admin" && password.trim() === "123456") {
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/pg-game');
        } else {
            toast.error("Tên đăng nhập hoặc mật khẩu không đúng.");
        }
    }
    return(
        <>
        <Header logoSize="large"/>
        <div className="items-center flex flex-col p-10 mt-10">
            <input type="text" placeholder="TÊN ĐĂNG NHẬP" value={username} onChange={(e) => setUsername(e.target.value)} className="bg-blue-700 text-white placeholder:text-gray-200 border-2 border-black text-[1.2rem] h-[4rem] text-left placeholder:text-center placeholder:opacity-100 p-5 w-full"/>
            <input type="password" placeholder="MẬT KHẨU" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-blue-700 text-white placeholder:text-gray-200 border-2 border-black text-[1.2rem] h-[4rem] text-left placeholder:text-center placeholder:opacity-100 p-5 mt-4 w-full"/>
            <UIButton 
                            label="Đăng nhập" 
                            onClick={handleLogin}
                            type="next"
                            className="mt-20"
                        />
        </div>
        </>
    )
}