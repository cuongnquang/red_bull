import logo from "../assets/logo.png";

interface HeaderProps {
  logoSize?: "small" | "large";
}


export default function Header({ logoSize = "large" }: HeaderProps) {
  const sizeClass = logoSize === "small" ? "w-[100vw] h-[15vh]" : "w-[130vw] h-[20vh]";
  const textClass = logoSize === "small" ? "text-[4rem] " : "text-[5rem]";
  const heightClass = logoSize === "small" ? "" : "";
    return (
        <header className={`text-white flex flex-col items-center top-10 relative left-0 w-full bg-white ${heightClass}`}>
            <img className={`${sizeClass} max-w-none object-cover`} src={logo} alt="Red Bull Logo"/>
            <p className={`${textClass} leading-none font-bold -mt-2 text-red-500`}>Red Bull</p>
        </header>
    )
}