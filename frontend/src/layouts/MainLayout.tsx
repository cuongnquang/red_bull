import type { ReactNode } from "react";
import Header from "../components/Header";

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="main-layout flex flex-col w-full h-full overflow-hidden">
            <Header />
            <div className="layout-container flex-1 overflow-y-auto overflow-x-hidden w-full">
                <main className="main-content w-full h-full">
                    {children}
                </main>
            </div>
        </div>
    );
}