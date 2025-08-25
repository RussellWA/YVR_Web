import { finishingOptions } from "@/constants/Capabilities";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HandymanIcon from '@mui/icons-material/Handyman';
import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";

export default function FinishingSection() {
    return (
        <Box sx={{ mb: 10, mt: 5 }}>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flexDirection="row"
                gap={12}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    gap={2}
                >
                    <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        gap={2}
                    >
                        <HandymanIcon
                            sx={{ color: "#3263e9", backgroundColor: "#dbe9fd", 
                                padding: 1.5, width: 60, height: 60, borderRadius: 3, mb: 1,
                            }}
                        />
                        <Typography fontWeight="bold" sx={{ fontSize: "2rem", color: "#000000ff" }}>
                            Post-Processing & Finishing
                        </Typography>
                    </Box>
                    <Typography sx={{ fontSize: "1rem", maxWidth: 700 }}>
                        We offer a range of finishing options to take your parts 
                        from prototype to production-quality appearance and performance.
                    </Typography>
                </Box>
                <Box>
                    <Image
                        src="/images/capabilities/finishing.jpg"
                        alt="Post-Processing & Finishing"
                        width={330}
                        height={220}
                        style={{ borderRadius: "16px" }}
                    />
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" gap={7} flexWrap="wrap" sx={{ mt: 10 }}>
                {finishingOptions.map((item) => (
                    <Card key={item.name} 
                        sx={{ display: "flex", borderRadius: 3, boxShadow: 5, my: 1, maxWidth: 500,
                            transition: "transform 0.2s, box-shadow 0.2s",
                            "&:hover": {
                                transform: "translateY(-4px) scale(1.03)",
                                boxShadow: 10,
                            },
                        }}
                    >
                        <CardContent sx={{ flex: 1 }}>
                            <Typography variant="h6" fontWeight="600">{item.name}</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                {item.description}
                            </Typography>
                            {item.benefits.map((point) => (
                                <Box key={point.text} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <CheckCircleOutlineIcon sx={{ color: "#009616", fontSize: "2rem" }} />
                                    <Typography sx={{ fontSize: "1rem", color: "#333" }}>
                                        {point.text}
                                    </Typography>
                                </Box>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}