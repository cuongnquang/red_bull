import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import UIButton from "../../components/UIButton";

export default function SaveImagePage(){
    const navigate = useNavigate();
    const handleSaveImage = () => {
        navigate('/pg/gift');
    }
    return(
        <>
        <Header logoSize="large"/>
        <div>
            <UIButton 
                label='Luu hình ảnh'
                onClick={handleSaveImage}
                type="next"
                className=""
            />
        </div>
        </>
        
    )
}