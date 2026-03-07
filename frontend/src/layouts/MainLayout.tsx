import type { ReactNode } from "react";

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (

        <div className="main-layout flex flex-col w-full h-full overflow-y-auto">
            <div className="layout-container">
                <main className="main-content w-full h-full">
                    {children}
                </main>
            </div>
        </div>
    );
}