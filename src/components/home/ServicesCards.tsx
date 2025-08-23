import { services } from '@/constants/HomeCards';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { Box, Card, CardContent, Typography } from "@mui/material";

function ServiceCard({ title, description, points }: { title: string, description: string, points: string[] }) {
    return (
        <Card
            sx={{ borderRadius: 4, px: 2, py: 1, flex: 1, maxWidth: 400, boxShadow: 6,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                    transform: "translateY(-4px) scale(1.03)",
                    boxShadow: 10,
                },
            }}
        >
            <CardContent>
                <ElectricBoltIcon 
                    sx={{ color: "#3263e9", backgroundColor: "#dbe9fd", p: 1.5,
                        width: 60, height: 60, borderRadius: 8, mb: 1
                    }}
                />
                <Typography fontWeight="bold" gutterBottom sx={{ fontSize: "1.15rem" }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                    {points.map((point) => (
                        <Box key={point} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <CheckCircleOutlineIcon sx={{ color: "#009616", fontSize: "2rem" }} />
                            <Typography sx={{ fontSize: "1rem", color: "#333" }}>
                                {point}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
}

export default function ServicesCards() {
    return (
        <Box
            sx={{ display: "flex", gap: 4, justifyContent: "space-between", mt: 7, flexWrap: "wrap", }}>
            {services.map((item) => (
                <ServiceCard key={item.title} {...item} />
            ))}
        </Box>
    );
}
