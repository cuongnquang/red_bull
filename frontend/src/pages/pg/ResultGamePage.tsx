import { MdOutlineDone } from "react-icons/md";
import { RxReload } from "react-icons/rx";
import Header from "../../components/Header";
import UIButton from "../../components/UIButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ResultGamePage() {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const navigate = useNavigate();
    const handleContinue = () => {
        if (selectedOption === "done") {
            navigate("/pg-game");
        } else if (selectedOption === "restart") {
            navigate("/pg-game");
        }
    }
    return (
        <>
            <Header logoSize="large" />
            <div className="flex flex-col items-center">
<div className="flex gap-20 flex-row justify-center items-center mt-30">
                <div onClick={() => setSelectedOption("done")}>
                    <p className="text-2xl mb-5">DONE</p>
                    <div className="bg-green-300 rounded-full w-20 h-20 flex items-center justify-center focus:bg-green-500 hover:bg-green-400">
                        <MdOutlineDone className="text-green-600 scale-400"/>
                    </div>
                </div>
                <div onClick={() => setSelectedOption("restart")}>
                    <p className="text-2xl mb-5">RESTART</p>
                    <div className=" rounded-full w-20 h-20 flex items-center justify-center hover:bg-gray-200">
                        <RxReload className="text-blue-600 scale-400" />
                    </div>
                </div>
            </div>
            <UIButton 
                label="Xác nhận" 
                onClick={handleContinue}
                type="next"
                className="mt-25"
            />
            </div>
            
        </>
    );
}
