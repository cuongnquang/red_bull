import QRCode from "react-qr-code";
interface QRProps {
    value: string;
    size?: 'small' | 'large';
}


export default function QR({ value, size}: QRProps) {
    const sizeClass = size === "small" ? "w-30 h-30" : "w-40 h-40";
  return (
    <div>
      <QRCode value={value} className={sizeClass}/>
    </div>
  );
}