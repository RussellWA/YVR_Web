import BottomSectionCards from "@/components/home/BottomSectionCards";
import ManufacturCards from "@/components/home/ManufacturCards";
import { Man } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function BottomSection() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                px: "11rem",
                paddingTop: "4rem",
                paddingBottom: "5rem",
            }}
        >
            <Typography fontWeight="bold" gutterBottom sx={{ fontSize: "2.5rem", textAlign: "center" }}>
                Success in Practice: Rapid Prototyping
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: "center" }}>
                See how we became an OEM and the R&D process for a new generation of fish feeders.
            </Typography>
            <BottomSectionCards />
            <Typography 
                fontWeight="bold" 
                gutterBottom
                sx={{
                    mt: 10,
                    fontSize: "2.5rem",
                }}
            >
                Our Manufacturing Process
            </Typography>
            <Typography 
                variant="body1" 
                color="text.secondary"
            >   
                From digital design to physical part, our streamlined process ensures quality, speed, and reliability at every step.
            </Typography>
            <ManufacturCards />
        </Box>
    );
}