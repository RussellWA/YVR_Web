import { Box, Link, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const benefits = [
    {
        title: "Instant Quoting: ",
        describe: "Upload a file and get a price in seconds with our AI-powered engine."
    },
    {
        title: "Rapid Turnaround: ",
        describe: "Standard production lead times of 1-3 business days."
    },
    {
        title: "Engineering Support: ",
        describe: "Free Design for Manufacturability (DFM) analysis on every order."
    },
];

export default function DevCycleSection() {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDirection="row"
            sx={{
                py: "5.5rem",
                px: "11rem",
                bgcolor: "#e8f4fc",
                gap: 12,
            }}
        >
            <Box
                display="flex"
                flexDirection="column"
                gap={3}
            >
                <Typography 
                    fontWeight="bold" 
                    sx={{
                        fontSize: "1.7rem",
                    }}
                >
                    Accelerate Your Product Development Cycle
                </Typography>
                <Typography
                        gutterBottom
                        sx={{
                            fontSize: "1rem",
                        }}
                >
                    In today's fast-paced market, speed is a competitive advantage. 
                    Our digital manufacturing platform removes the traditional bottlenecks of prototyping and low-volume production. 
                    Get parts in your hands in days, not weeks. 
                    This allows you to iterate faster, test more thoroughly, and get your products to market ahead of the competition.
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    {benefits.map((benefit) => (
                        <Box key={benefit.title} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <CheckCircleOutlineIcon sx={{ color: "#3163E9", fontSize: "2rem" }} />
                            <Typography sx={{ fontSize: "1rem" }}>
                                <Box component="span" sx={{ fontWeight: "bold", display: "inline" }}>
                                    {benefit.title}
                                </Box>
                                {benefit.describe}
                            </Typography>
                        </Box>
                    ))}
                </Box>
                <Link
                    href="/process" // TODO change to new page
                    underline="none"
                    sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
                        fontWeight: "bold",
                        fontSize: "1rem",
                        color: "#3163E9",
                        cursor: "pointer",
                        "&:hover": {
                            textDecoration: "underline",
                            transform: "translateY(-5px)",
                            color: "#1d42afff",
                        },
                    }}
                    >
                    <Typography component="span" fontSize="inherit" fontWeight="inherit">
                        Learn about our manufacturing process
                    </Typography>
                    <ArrowForwardIcon fontSize="small" />
                </Link>
            </Box>
            <Box
                sx={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    width: "190%",
                    height: 360,
                    boxShadow: 10,
                }}
            >
                <video width="640" height="360" controls>
                    <source src="/videos/shark_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Box>
        </Box>
    );
}