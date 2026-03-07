import Header from "../../components/Header";
import {Scanner} from "@yudiel/react-qr-scanner";
import UIButton from "../../components/UIButton";



export default function ScanQRPage(){
    const handleScanResult = (result: string) => {
        console.log(result);
    }
    return (
        <>
        <Header logoSize="large"/>
        <div className="text-center p-8">
            <Scanner
                onScan={(result) => {
                    console.log(result);
                }}
                onError={(error) => {
                    console.error(error);
                }}
            />
            <UIButton 
                            label="Scan" 
                            onClick={() => handleScanResult("Sample Result")}
                            type="scan"
                            className="mt-10"
                        />
        </div>
        </>
    )
}
