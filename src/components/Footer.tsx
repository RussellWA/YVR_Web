"use client";

import { contactMethods, info, navigate, resources, socialMedia } from "@/constants/Footer";
import { Box, Divider, IconButton, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
        <Box sx={{ backgroundColor: "#18212F", pt: 8, pb: 4, px: 20 }}>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="flex-start"
                flexDirection="row"
                gap={10}
            >
                <Box sx={{ width: 450 }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "white" }}>
                        YVR<span style={{ color: "#244FAA" }}>3D</span>
                    </Typography>
                    <Typography variant="body1" gutterBottom color="white" sx={{ fontWeight: "bold" }}>
                        Your Venture Redefined
                    </Typography>
                    <Typography variant="body1" color="white" sx={{ mt: 3 }}>
                        Your partner in advanced digital manufacturing and digital technology.
                        Our core business includes OEM manufacturing and R&D for individuals as well as companies.
                    </Typography>
                    <Box display="flex" justifyContent="flex-start" gap={2} sx={{ mt: 2 }}>
                        {socialMedia.map((item) => (
                            <IconButton
                                key={item.platform}
                                href={item.url}
                                target="_blank"
                                rel="noopener"
                                sx={{ color: "white", p: 0 }}
                            >
                                <item.icon sx={{ color: "white", fontSize: 35, p: 0 }} />
                            </IconButton>
                        ))}
                    </Box>
                </Box>
                <Box sx={{ width: 150 }}>
                    <Typography variant="body1" gutterBottom color="white" sx={{ fontWeight: "bold", mb: 2 }}>
                        Navigate
                    </Typography>
                    <Box display="flex" flexDirection="column" gap={1}>
                        {navigate.map((item) => (
                            <Link
                                key={item.title}
                                href={item.path}
                                underline="none"
                                color="inherit"
                                sx={{ "&:hover": { textDecoration: "underline" } }}
                            >
                                <Typography variant="body1" color="white">
                                    {item.title}
                                </Typography>
                            </Link>
                        ))}
                    </Box>
                </Box>
                <Box sx={{ width: 170 }}>
                    <Typography variant="body1" gutterBottom color="white" sx={{ fontWeight: "bold", mb: 2 }}>
                        Resources
                    </Typography>
                    <Box display="flex" flexDirection="column" gap={1}>
                        {resources.map((item) => (
                            <Link
                                key={item.title}
                                href={item.path}
                                underline="none"
                                color="inherit"
                                sx={{ "&:hover": { textDecoration: "underline" } }}
                            >
                                <Typography variant="body1" color="white">
                                    {item.title}
                                </Typography>
                            </Link>
                        ))}
                    </Box>
                </Box>
                <Box sx={{ width: 300 }}>
                    <Typography variant="body1" gutterBottom color="white" sx={{ fontWeight: "bold", mb: 2 }}>
                        Contact Us
                    </Typography>
                    <Box display="flex" flexDirection="column" gap={2}>
                        {contactMethods.map((item) => (
                            <Box display="flex" alignItems="flex-start" gap={2} key={item.method}>
                                <item.icon sx={{ color: "white" }} />
                                <Typography color="white">{item.value}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Divider sx={{ mb: 5, mt: 5, width: "90%", backgroundColor: "#7E7E7E" }} />
                <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
                    <Typography variant="body2" color="#7E7E7E" align="center">
                        © 2025 PT YVR Technologies Indonesia. All Rights Reserved.
                    </Typography>

                    <Box display="flex" gap={3}>
                        {info.map((item) => (
                            <Link
                                key={item.label}
                                href={item.path}
                                underline="hover"
                                color="#7E7E7E"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}