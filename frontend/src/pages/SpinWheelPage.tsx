import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import UIButton from "../components/UIButton";
import CSpinWheel from "../components/CSpinWheel";

export default function SpinWheelPage() {
    const navigate = useNavigate();
    const handleSpinWheel = () => {
            navigate("/lucky-spin-result");
    }
    return (
        <>
        <Header logoSize="small"/>
        <div className="flex flex-col mt-5 gap-5 items-center">
            <p className="text-[1.5rem] font-bold text-blue-500">BẠN CÓ <span className="text-green-400">1</span> LƯỢT QUAY</p>
            <CSpinWheel />
            <UIButton 
                label="Tiếp tục" 
                onClick={handleSpinWheel}
                type="next"
                className="mt-5 mb-10"
            />
        </div>
        </>    
    )
}