import logo from "../assets/logo.png";

interface HeaderProps {
  logoSize?: "small" | "large";
}


export default function Header({ logoSize = "large" }: HeaderProps) {
  const sizeClass = logoSize === "small" ? "w-90" : "w-130";
  const textClass = logoSize === "small" ? "text-[64px] top-29" : "text-[88px] top-38";
  const heightClass = logoSize === "small" ? "-top-10" : "-top-20";
    return (
        <header className={`text-white flex flex-col items-center fixed left-0 w-full bg-white ${heightClass}`}>
            <img className={`${sizeClass} max-w-none`} src={logo} alt="Red Bull Logo"/>
            <h1 className={`${textClass} font-bold text-red-600 fixed`}>Red Bull</h1>
        </header>
    )
}