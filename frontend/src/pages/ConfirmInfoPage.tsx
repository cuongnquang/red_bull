import Header from "../components/Header";
import UIButton from "../components/UIButton";
import { useNavigate } from "react-router-dom";

export default function ConfirmInfoPage() {
    const navigate = useNavigate();
    const handleContinue = () => {
            navigate("/player-info");
    };
    return (
        <>
        <Header logoSize="small"/>
        <div className="mt-5 flex flex-col items-center gap-2 p-6 text-justify">
            <p className='w-full text-[1.6rem] font-normal'>Thông tin cá nhân mà khách hàng cung cấp là cơ sở để xác nhận trúng thưởng và phục vụ cho việc đối chiếu trao thưởng</p>
            <p className='text-red-500 font-bold w-full text-[1.6rem]'> Vì vậy khách hàng cần kiểm tra lại thông tin chính xác trước khi bấm "XÁC NHẬN"</p>
            <p className='font-semibold w-full text-[1.5rem]'>Xem thể lệ chương trình <a href="#" className="text-blue-600 underline">tại đây</a></p>
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