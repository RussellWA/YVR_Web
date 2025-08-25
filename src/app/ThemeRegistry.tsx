"use client";

import * as React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import createEmotionCache from "@/styles/createEmotionCache";
import theme from "@/styles/theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const clientSideEmotionCache = createEmotionCache();

export default function ThemeRegistry({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <CacheProvider value={clientSideEmotionCache}>
            <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Navbar />
                    {children}
                    <Footer />
            </ThemeProvider>
        </CacheProvider>
    );
}
