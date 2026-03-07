import Header from "../components/Header";
import QR from "../components/QRCode";
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
            <div className="mt-15 flex flex-col gap-5 items-center">
                <p className="text-center text-[25px] font-bold text-blue-500 ">CHÚC MỪNG <br />BẠN NHẬN ĐƯỢC</p>
                <div className="w-full px-10 flex flex-col">
                    <p className="text-[25px] w-full">LON REDBULL x <a className="text-blue-500">1 </a></p>
                    <p className="text-[25px] w-full">LON REDBULL x <a className="text-blue-500">1 </a></p>
                    <p className="text-[25px] w-full">LON REDBULL x <a className="text-blue-500">1 </a></p>
                </div>
                <QR value="https://example.com" size='small'/>
                <p className='text-[1.5rem] ml-7 mr-7 text-center font-semibold text-blue-500'>CUNG CẤP MÃ QR CODE CHO PG ĐỂ ĐỔI THƯỞNG</p>
                <UIButton 
                label="Xác nhận" 
                onClick={handleAccept}
                type="next"
                className="mb-10"
                />
            </div>
        </>   
    )
}