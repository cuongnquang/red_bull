import logo from "../assets/logo.png";

interface HeaderProps {
  logoSize?: "small" | "large";
}


export default function Header({ logoSize = "large" }: HeaderProps) {
  const sizeClass = logoSize === "small" ? "w-90 h-50" : "w-130 h-75";
  const textClass = logoSize === "small" ? "text-[64px] top-30" : "text-[90px] top-50";
  const heightClass = logoSize === "small" ? "-top-10" : "-top-20";
    return (
        <header className={`text-white flex flex-col items-center sticky top-0 left-0 w-full bg-white ${heightClass}`}>
            <img className={`${sizeClass} max-w-none object-cover`} src={logo} alt="Red Bull Logo"/>
            <h1 className={`${textClass} font-bold text-red-500 fixed`}>Red Bull</h1>
        </header>
    )
}