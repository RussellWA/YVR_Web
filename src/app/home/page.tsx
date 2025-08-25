import IntroSection from "@/app/home/views/IntroSection";
import { Box } from "@mui/material";
import BottomSection from "./views/BottomSection";
import DevCycleSection from "./views/DevCycleSection";
import ServicesSection from "./views/ServicesSection";

export default function Home() {
    return (
        <Box>
            <IntroSection />
            <ServicesSection />
            <DevCycleSection />
            <BottomSection />
        </Box>
    );
}
