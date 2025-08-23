import IntroSection from "@/app/home/views/IntroSection";
import { Box } from "@mui/material";
import ServicesSection from "./views/ServicesSection";
import DevCycleSection from "./views/DevCycleSection";
import BottomSection from "./views/BottomSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <Box>
            <IntroSection />
            <ServicesSection />
            <DevCycleSection />
            <BottomSection />
            <Footer />
        </Box>
    );
}
