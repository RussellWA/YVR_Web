"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        button: {
            textTransform: "none",
        },
    },
    palette: {
        common: {
            black: "#000000",
            white: "#FFFFFF",
        },
        background: {
            default: "#ffffff",
        },
    },
});

export default theme;
