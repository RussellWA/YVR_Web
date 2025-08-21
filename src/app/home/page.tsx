import IntroSection from "@/app/home/views/IntroSection";
import { Box } from "@mui/material";
import ServicesSection from "./views/ServicesSection";

export default function Home() {
    return (
        <Box>
            <IntroSection />
            <ServicesSection />
        </Box>
    );
}
