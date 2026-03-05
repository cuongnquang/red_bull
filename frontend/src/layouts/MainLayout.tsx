import type { ReactNode } from "react";
import Header from "../components/Header";

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="main-layout">
            <Header />
            <div className="layout-container">
                <main className="main-content">
                    {children}
                </main>
            </div>
        </div>
    );
}