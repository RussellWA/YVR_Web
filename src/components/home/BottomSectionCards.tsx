import { reduction } from "@/constants/HomeCards";
import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";

export default function BottomSectionCards() {
    return (
        <Card
            sx={{
                padding: "3rem",
                boxShadow: 6,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: 3,
                mt: 7,
                gap: 8,
                maxWidth: "1000px",
                mx: "auto",
            }}
        >
            <Image
                src="/images/two_feeders.jpg"
                alt="Two Feeders"
                width={313}
                height={378}
                style={{ objectFit: "cover", borderRadius: 20 }}
            />
            <Box>
                <Typography fontWeight="bold" gutterBottom sx={{ fontSize: "1.5rem", color: "#2741A1" }}>
                    The Challenge
                </Typography>
                <Typography component="ul" gutterBottom sx={{ fontSize: "1rem" }}>
                    <li>Needed 30+ unique fish feeders for a new assembly line</li>
                    <li>Scale: ~1.5m height, ~0.5m width</li>
                    <li>CNC machining → 6-week lead time + prohibitive cost</li>
                </Typography>
                <Typography fontWeight="bold" gutterBottom sx={{ fontSize: "1.5rem", color: "#2741A1", mt: 3 }}>
                    The YVR3D Solution
                </Typography>
                <Typography gutterBottom sx={{ fontSize: "1rem" }}>
                    Using our FDM platform, we manufactured all 38 components from our durable PETG filament at a rate of 2 machines a day.
                    This allowed their site-engineers to begin testing and validation with the real world environment almost immediately.
                </Typography>
                <Box display="flex" gap={3} mt={3}>
                    {reduction.map((item) => (
                        <Card
                            key={item.label}
                            sx={{
                                px: 3,
                                py: 2,
                                borderRadius: 2,
                                boxShadow: 2,
                                textAlign: "center",
                            }}
                        >
                        <Typography fontWeight="bold" sx={{ fontSize: "2rem", color: "#2741A1" }}>
                            {item.percentage}
                        </Typography>
                        <Typography sx={{ fontSize: "0.9rem" }}>{item.label}</Typography>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Card>
    );
}