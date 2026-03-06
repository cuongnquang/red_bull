import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import UIButton from "../components/UIButton";

export default function ChoosePlayerPage() {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleContinue = () => {
        if (selectedOption === "new") {
            navigate("/confirm-info");
        } else if (selectedOption === "existing") {
            navigate("/enter-phone");
        }
    };

    return (
        <>
        <Header logoSize="small"/>
        <div className="mt-20 flex flex-col items-center gap-15">
            <button 
                onClick={() => setSelectedOption("new")}
                className={`text-white text-3xl py-2 px-4 border border-black rounded-[20px] w-60 h-21 ${
                    selectedOption === "new" 
                        ? "bg-green-900" 
                        : "bg-green-700 hover:bg-green-700"
                }`}
            >
                Khách mới
            </button>
            <button 
                onClick={() => setSelectedOption("existing")}
                className={`text-white text-3xl py-2 px-4 border border-black rounded-[20px] w-60 h-21 ${
                    selectedOption === "existing" 
                        ? "bg-green-900" 
                        : "bg-green-700 hover:bg-green-700"
                }`}
            >
                Khách đang tham gia
            </button>
            <UIButton 
                label="Xác nhận" 
                onClick={handleContinue}
                disabled={!selectedOption}
                type="next"
                className="mt-30"
            />
        </div>
        </>
    );
}