import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import UIButton from "../../components/UIButton";

export default function HistoryPage() {
    const navigate = useNavigate();
    const handleAccept = () =>{
        navigate('/gift')
    }
    return (
        <>
            <Header logoSize="large" />
            <div className="flex flex-col items-center mt-20 p-5">
                <span className="font-bold text-4xl text-red-500">HISTORY</span>
                <table className="w-full mt-10 text-center mb-10">
                    <tr className="text-blue-500 text-xl">
                        <th>Time</th>
                        <th>Quantity</th>
                    </tr>
                    <tr className="text-lg text-left align-top">
                        <td>10:00 01/01/2024</td>
                        <td>
                            <p><span className="text-blue-500">2</span> x Lon Redbull</p>
                            <p><span className="text-blue-500">1</span> x Áo thun Redbull</p>
                            <div className=" flex items-center justify-center w-full">
                                <span className="w-20 h-30 bg-green-500"></span> 
                            </div>
                        </td>
                    </tr>                    
                </table>
                <UIButton
                    label="Xác nhận"
                    onClick={handleAccept}
                    type="back"
                    className="mt-10"
                />
            </div>
        </>

    )
}