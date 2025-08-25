import { Box, Button, Divider, Typography } from "@mui/material";
import TechnologySection from "./views/TechnologySection";
import FinishingSection from "./views/FinishingSection";
import BottomSection from "./views/BottomSection";

export default function Capabilities() {
    return (
        <Box sx={{ backgroundColor: "#ffffff", px: "18rem" }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    color: "white",
                    py: 10,
                    gap: 3,
                }}
                >
                <Typography
                    fontWeight="bold"
                    sx={{ fontSize: "3.5rem", color: "black" }}
                >
                    Our Manufacturing Capabilities
                </Typography>
                <Typography sx={{ fontSize: "1rem", maxWidth: 700, textAlign: "center", color: "black" }}>
                    Leveraging a suite of state-of-the-art technologies to deliver precision parts for any application, 
                    from one-off prototypes to thousands of units.
                </Typography>
                <Button
                    variant="contained" 
                    sx={{  borderRadius: 2,  fontWeight: "bold",  backgroundColor: "#3C6CEA",
                        color: "white", fontSize: "1rem", px: 3, py: 1,
                    }}
                >
                    Get Instant Quote
                </Button>
            </Box>
            <Box display="flex" justifyContent="center">
                <Divider sx={{ mb: 5, width: "90%", backgroundColor: "#000000ff" }} />
            </Box>
            <TechnologySection />
            <FinishingSection />
            <BottomSection />
        </Box>

    );
}
