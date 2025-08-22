import { Box, Link, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { benefits } from "@/constants/Home";

export default function DevCycleSection() {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDirection="row"
            sx={{
                py: "5rem",
                px: "8rem",
                bgcolor: "#e8f4fc",
                gap: 12,
            }}
        >
            <Box display="flex" flexDirection="column" gap={3}>
                <Typography fontWeight="bold" sx={{ fontSize: "1.7rem" }}>
                    Accelerate Your Product Development Cycle
                </Typography>
                <Typography gutterBottom sx={{ fontSize: "1rem" }}>
                    In today&apos;s fast-paced market, speed is a competitive advantage. 
                    Our digital manufacturing platform removes the traditional bottlenecks of prototyping and low-volume production. 
                    Get parts in your hands in days, not weeks. 
                    This allows you to iterate faster, test more thoroughly, and get your products to market ahead of the competition.
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
                    {benefits.map((item) => (
                        <Box key={item.title} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <CheckCircleOutlineIcon sx={{ color: "#3163E9", fontSize: "2rem" }} />
                            <Typography sx={{ fontSize: "1rem" }}>
                                <Box component="span" sx={{ fontWeight: "bold", display: "inline" }}>
                                    {item.title}
                                </Box>
                                {item.describe}
                            </Typography>
                        </Box>
                    ))}
                </Box>
                <Link href="/process" underline="none">
                    <Box
                        component="span"
                        sx={{
                            mt: 2,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
                            px: 2.5,
                            py: 1.2,
                            borderRadius: 2,
                            fontWeight: "bold",
                            fontSize: "1rem",
                            bgcolor: "#3163E9",
                            color: "white",
                            boxShadow: 3,
                            transition: "all 0.2s ease-in-out",
                            "&:hover": {
                                bgcolor: "#1d42af",
                                transform: "translateY(-2px)",
                            },
                        }}
                    >
                        Learn about our manufacturing process
                        <ArrowForwardIcon fontSize="small" />
                    </Box>
                </Link>
            </Box>
            <Box
                sx={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    flexShrink: 0,
                    width: "100%",
                    maxWidth: 720,
                    aspectRatio: "16/9",
                    boxShadow: 6,
                }}
            >
                <video style={{ width: "100%", height: "100%" }} controls>
                    <source src="/videos/shark_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Box>
        </Box>
    );
}