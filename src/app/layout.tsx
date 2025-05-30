// src/app/layout.tsx

import type React from "react";
import "@/app/globals.css";
import ClientLayout from "@/components/client-layout";

export const metadata = {
    title: "Om Eye Clinic - Expert Eye Care Services",
    description:
        "Comprehensive eye care services including examinations, surgeries, and treatments by experienced specialists at Om Eye Clinic.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
