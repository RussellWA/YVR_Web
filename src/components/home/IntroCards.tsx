import { Card, CardContent, Typography, Box } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import StraightenIcon from "@mui/icons-material/Straighten";
import LayersIcon from "@mui/icons-material/Layers";
import { SxProps } from "@mui/material";

const introCards = [
    {
        title: "Rapid Turnaround",
        description:
            "Standard production lead times of up to 1 business day for most projects.",
        Icon: BoltIcon,
    },
    {
        title: "Precision Engineering",
        description:
            "±0.1mm accuracy with comprehensive quality control processes.",
        Icon: StraightenIcon,
    },
    {
        title: "10+ Materials & Colours",
        description:
            "Wide selection of engineering-grade materials for any application.",
        Icon: LayersIcon,
    },
];

function IntroCard({
    title,
    description,
    Icon,
    sx,
}: {
    title: string;
    description: string;
    Icon: React.ElementType;
    sx?: SxProps;
}) {
    return (
        <Card
            sx={{
                borderRadius: 4,
                px: 2,
                py: 1,
                flex: 1,
                maxWidth: 400,
                ...sx,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                    transform: "translateY(-4px) scale(1.03)",
                    boxShadow: 10,
                },
            }}
        >
            <CardContent>
                <Icon
                    sx={{
                        color: "#3263e9",
                        backgroundColor: "#dbe9fd",
                        padding: 1.5,
                        width: 60,
                        height: 60,
                        borderRadius: 3,
                        mb: 1,
                    }}
                />
                <Typography
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                        fontSize: "1.15rem",
                    }}
                >
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default function IntroCards() {
    return (
        <Box
            sx={{
                display: "flex",
                gap: 4,
                justifyContent: "space-between",
                mt: 8,
            }}
        >
            {introCards.map((card) => (
                <IntroCard key={card.title} {...card} />
            ))}
        </Box>
    );
}
