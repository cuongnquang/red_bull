import Header from "../components/Header";
import UIButton from "../components/UIButton";
import { useNavigate } from "react-router-dom";

export default function TotalRewardsPage() {
    const navigate = useNavigate();
    const handleAccept = () => {
            navigate("/game");
    };
    return (
        <>
            <Header logoSize="small"/>
            <div className="mt-40 flex flex-col gap-10 items-center">
                <p className="text-center text-[25px] font-bold text-blue-500 ">CHÚC MỪNG <br />BẠN NHẬN ĐƯỢC</p>
                <div className="w-full px-10 flex flex-col gap-5">
                    <p className="text-[25px] w-full">LON REDBULL x <a className="text-blue-500">1 </a></p>
                    <p className="text-[25px] w-full">LON REDBULL x <a className="text-blue-500">1 </a></p>
                    <p className="text-[25px] w-full">LON REDBULL x <a className="text-blue-500">1 </a></p>
                </div>
                <div className="w-30 h-30 bg-black">
                </div>
                <p className='text-[30px] p-5 text-center font-semibold text-blue-500'>CUNG CẤP MÃ QR CODE CHO PG ĐỂ ĐỔI THƯỞNG</p>
                <UIButton 
                label="Xác nhận" 
                onClick={handleAccept}
                type="next"
                className="-mt-10 mb-10"
                />
            </div>
        </>   
    )
}