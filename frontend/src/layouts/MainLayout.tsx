import type { ReactNode } from "react";

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="main-layout h-screen overflow-y-auto">
            <div className="layout-container">
                <main className="main-content">
                    {children}
                </main>
            </div>
        </div>
    );
}