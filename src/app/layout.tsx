"use client";

import Navbar from "@/components/Navbar";
import createEmotionCache from "@/styles/createEmotionCache";
import theme from "@/styles/theme";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { CssBaseline } from "@mui/material";

const hanken = Hanken_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

const clientSideEmotionCache = createEmotionCache();

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={hanken.className}>
            <body className="bg-white text-gray-900">
                <CacheProvider value={clientSideEmotionCache}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Navbar />
                        {children}
                    </ThemeProvider>
                </CacheProvider>
            </body>
        </html>
    );
}
