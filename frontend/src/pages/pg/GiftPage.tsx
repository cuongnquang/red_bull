import { BsCamera } from "react-icons/bs";
import Header from "../../components/Header";
import UIButton from "../../components/UIButton";
import { GrHistory } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function GiftPage() {
    const navigate = useNavigate();
     const [selectedOption, setSelectedOption] = useState<string | null>(null);
        const handleAccept = () => {
        if (selectedOption === "camera") {
            navigate("/save-image");
        } else if (selectedOption === "history") {
            navigate("/history");
        }
        else {
            navigate("/pg-game")
        }
    };
    return(
        <>
            <Header logoSize="large" />
            <div className="flex flex-col items-center mt-20">
                <span className="font-medium text-red-600 text-4xl">GIFT</span>
                <div className="flex gap-10 mt-10
                ">
                    <button onClick={() => setSelectedOption('camera')}>
                        <BsCamera className="text-[10rem] hover:bg-gray-500 focus:border-red-500 focus:border" />
                    </button>
                    <button onClick={()=>setSelectedOption('history')}>
                        <GrHistory className="text-[9rem] hover:bg-gray-500 focus:border-red-500 focus:border" />
                    </button>
                </div>
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