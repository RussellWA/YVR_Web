"use client";

import { Hanken_Grotesk } from "next/font/google";
import ThemeRegistry from "./ThemeRegistry";

const hanken = Hanken_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={hanken.className}>
            <body>
                <ThemeRegistry>{children}</ThemeRegistry>
            </body>
        </html>
    );
}
