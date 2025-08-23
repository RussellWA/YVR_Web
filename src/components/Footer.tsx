"use client";

import { navigate, resources } from "@/constants/Footer";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Divider, IconButton, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
        <Box sx={{ backgroundColor: "#18212F", py: 10, px: 20 }}>
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
                        <IconButton
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener"
                            sx={{ color: "white", p: 0 }}
                        >
                            <LinkedInIcon sx={{ width: 35, height: 35 }} />
                        </IconButton>
                        <IconButton
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener"
                            sx={{ color: "white", p: 0 }}
                        >
                            <InstagramIcon sx={{ width: 35, height: 35 }} />
                        </IconButton>
                        <IconButton
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener"
                            sx={{ color: "white", p: 0 }}
                        >
                            <FacebookIcon sx={{ width: 35, height: 35 }} />
                        </IconButton>
                        <IconButton
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener"
                            sx={{ color: "white", p: 0 }}
                        >
                            <TwitterIcon sx={{ width: 35, height: 35 }} />
                        </IconButton>
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
                        <Box display="flex" alignItems="center" gap={2}>
                            <EmailIcon sx={{ color: "white" }} />
                            <Typography color="white">support@yvr3d.com</Typography>
                        </Box>

                        <Box display="flex" alignItems="center" gap={2}>
                            <PhoneIcon sx={{ color: "white" }} />
                            <Typography color="white">+62 878-5079-7975</Typography>
                        </Box>

                        <Box display="flex" alignItems="flex-start" gap={2}>
                            <LocationOnIcon sx={{ color: "white" }} />
                            <Typography color="white">
                                Gold Coast Office Tower, Level 23 Pantai Indah Kapuk, North Jakarta Indonesia
                            </Typography>
                        </Box>
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
                        <Link href="/privacy" underline="hover" color="#7E7E7E">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" underline="hover" color="#7E7E7E">
                            Terms of Service
                        </Link>
                        <Link href="/cookies" underline="hover" color="#7E7E7E">
                            Cookie Policy
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}