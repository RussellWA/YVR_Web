import { processes, timeline } from "@/constants/HomeCards";
import { Box, Button, Card, Typography } from "@mui/material";

export default function BottomSectionCards() {
    return (
        <Box sx={{ py: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 5, }}>
                <Box
                    sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", 
                        position: "relative", px: 4, mt: 6, gap: 8,
                    }}
                >
                    <Box
                        sx={{ position: "absolute", top: 30, left: 0, right: 0, height: 3, 
                            backgroundColor: "#E0E0E0", zIndex: 0 }}
                    />

                    {processes.map((item) => (
                        <Box
                            key={item.num}
                            sx={{ display: "flex", flexDirection: "column", alignItems: "center",
                                flex: 1, position: "relative", zIndex: 1,
                            }}
                        >
                        <Box
                            sx={{ backgroundColor: "#3C6CEA", width: 65, height: 65, borderRadius: "50%",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                mb: 2, boxShadow: 3,
                            }}
                        >
                            <Typography sx={{ fontWeight: "bold", fontSize: "1.8rem", color: "white" }}>
                                {item.num}
                            </Typography>
                        </Box>

                        <Card
                            sx={{ width: 220, minHeight: 150, p: 2, backgroundColor: "#F9FAFB", 
                                borderRadius: 3, boxShadow: 3, textAlign: "center",
                            }}
                        >
                            <Typography gutterBottom sx={{ fontWeight: "bold", fontSize: "1rem", mb: 1 }}>
                                {item.label}
                            </Typography>
                            <Typography sx={{ fontSize: "0.875rem", color: "text.secondary" }}>
                                {item.description}
                            </Typography>
                        </Card>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Card
                sx={{ p: 4, borderRadius: 4, backgroundColor: "#F9FAFB", boxShadow: 3,
                    mt: 10, maxWidth: "1000px", mx: "auto",
                }}
                >
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Typical Production Timelines
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                    Standard lead times for common order types:
                </Typography>

                 <Box display="flex" gap={2} justifyContent="center" mt={2}>
                    <Button variant="contained" sx={{ borderRadius: 2, fontWeight: "bold" }}>
                    Get Instant Quote
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{ borderRadius: 2, fontWeight: "bold", borderColor: "#3C6CEA", color: "#3C6CEA" }}
                    >
                        Explore Materials
                    </Button>
                </Box>

                <Box display="flex" justifyContent="center" gap={4} mt={4} position="relative">
                    <Box
                    sx={{ position: "absolute", top: "50%", left: 0, right: 0, height: 2, 
                        backgroundColor: "#E2E8F0", zIndex: 0 }}
                    />
                    {timeline.map((item) => (
                    <Card
                        key={item.job}
                        sx={{ py: 3, px: 3, minWidth: 160, textAlign: "center", 
                            borderRadius: 3, boxShadow: 2, backgroundColor: "white",
                            zIndex: 1,
                        }}
                    >
                        <Typography fontWeight="bold" fontSize="1.3rem" color="#3C6CEA">
                            {item.duration}
                        </Typography>
                        <Typography>{item.job}</Typography>
                    </Card>
                    ))}
                </Box>
                </Card>
        </Box>
    );
}