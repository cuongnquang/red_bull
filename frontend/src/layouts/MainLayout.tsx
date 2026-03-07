import type { ReactNode } from "react";

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (

        <div className="main-layout flex flex-col w-full h-auto overflow-y-auto">
            <div className="layout-container">
                <main className="main-content w-full">
                    {children}
                </main>
            </div>
        </div>
    );
}