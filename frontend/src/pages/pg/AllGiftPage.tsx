import Header from "../../components/Header";
import UIButton from "../../components/UIButton";

export default function AllGiftPage() {
    return (
        <>
        <Header logoSize="large" />
        <div className="text-center flex flex-col items-center mt-10">
            <p className="text-2xl text-blue-500 font-bold">SỐ ĐIỆN THOẠI</p>
            <p className="text-6xl text-red-500 font-bold">09XX.XXX.XX</p>
            <p className="text-3xl font-bold text-blue-500">NHẬN ĐƯỢC</p>
            <div className="text-4xl flex flex-start flex-col items-start gap-3 mt-10 w-full pl-10">
                <p>Lon Redbull x <span className="text-blue-500">1</span></p>
                <p>Áo thun Redbull x <span className="text-blue-500">1</span></p>
                <p>Bình nước x <span className="text-blue-500">1</span></p>
            </div>
            <UIButton
                label="Đổi quà"
                onClick={() => {}}
                type="back"
                className="mt-20"
            />
        </div>
        </>
    );
}