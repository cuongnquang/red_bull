import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import UIButton from "../../components/UIButton";

export default function LoginPage(){
    const navigate = useNavigate();
    const handleLogin=()=>{
        navigate('/pg-game')
    }
    return(
        <>
        <Header logoSize="large"/>
        <div className="items-center flex flex-col p-10 mt-10">
            <input type="text" placeholder="NHẬP HỌ VÀ TÊN" className="bg-blue-700 text-white placeholder:text-gray-200 border-2 border-black text-[1.2rem] h-[4rem] text-left placeholder:text-center placeholder:opacity-100 p-5 w-full"/>
            <input type="text" placeholder="NHẬP SỐ ĐIỆN THOẠI" className="bg-blue-700 text-white placeholder:text-gray-200 border-2 border-black text-[1.2rem] h-[4rem] text-left placeholder:text-center placeholder:opacity-100 p-5 mt-4 w-full"/>
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