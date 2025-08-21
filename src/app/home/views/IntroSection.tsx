import { Box, Button, Typography } from "@mui/material";
import HomeImageRow from "../../../components/home/HomeImageRow";
import IntroCards from "@/components/home/IntroCards";

export default function IntroSection() {
    return (
        <Box
            sx={{
                px: "11rem",
                paddingTop: "6rem",
                paddingBottom: "3rem",
                backgroundColor: "#2741A1",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "space-evenly",
                        gap: 2,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "3rem",
                            fontWeight: "bold",
                            color: "white"
                        }}
                    >
                        Precision 3D Printing Solutions for <span style={{ color: "#94C3FC" }}>Demanding Industries</span>
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "1rem",
                            color: "white"
                        }}
                    >
                        From rapid functional prototypes to complex end-use parts, 
                        YVR3D delivers engineering-grade quality with industry-leading speed. 
                        Your trusted partner in digital manufacturing.
                    </Typography>
                    <Box
                        sx={{
                            mt: 2,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "start",
                            gap: 2,
                        }}
                    >
                        <Button
                            variant="contained" 
                            sx={{ 
                                borderRadius: 2, 
                                fontWeight: "bold", 
                                fontFamily: "inherit", 
                                backgroundColor: "white",
                                color: "#244FAA",
                                fontSize: "1rem"
                            }}
                        >
                            Get Instant Quote
                        </Button>

                        <Button
                            variant="outlined" 
                            sx={{ 
                                borderRadius: 2, 
                                fontWeight: "bold", 
                                fontFamily: "inherit", 
                                borderColor: "white",
                                borderWidth: 2,
                                color: "white",
                                fontSize: "1rem"
                            }}
                        >
                            Explore Materials
                        </Button>
                    </Box>
                </Box>
                <HomeImageRow />
            </Box>
            <IntroCards />
        </Box>
    );
}