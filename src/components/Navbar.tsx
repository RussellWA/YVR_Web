"use client";

import { buttons } from "@/constants/Navbar";
import { AccountCircle, Translate } from "@mui/icons-material";
import { Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";

export default function Navbar() {
    return (
        <AppBar position="sticky" color="inherit">
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", gap: 3 }}>
                    <Typography 
                        variant="h4"
                        sx={{ 
                            fontWeight: "bold", 
                            color: "black", 
                            mr: 4, 
                        }}
                    >
                        YVR<span style={{ color: "#244FAA" }}>3D</span>
                    </Typography>
                    {buttons.map((item) => (
                        <Button 
                            key={item.name}
                            color="inherit" 
                            sx={{ 
                                fontSize: "1rem", 
                                fontWeight: "500", 
                            }}
                        >
                            {item.name}
                        </Button>
                    ))}
                </Box>

                <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
                    <Button 
                        variant="contained" 
                        sx={{ 
                            borderRadius: 2, 
                            fontWeight: "bold", 
                            backgroundColor: "#244FAA" 
                        }}
                    >
                        Print Now!
                    </Button>
                    <IconButton 
                        sx={{ 
                            display: "flex", 
                            flexDirection: "column", 
                            alignItems: "center", 
                            gap: 0.5 
                        }}
                    >
                        <Translate />
                        <Typography variant="body2">English</Typography>
                    </IconButton>
                    <IconButton 
                        sx={{ 
                            display: "flex", 
                            flexDirection: "column", 
                            alignItems: "center", 
                            gap: 0.5 
                        }}
                    >
                        <AccountCircle />
                        <Typography variant="body2">Sign In</Typography>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}