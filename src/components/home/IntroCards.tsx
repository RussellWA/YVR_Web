import { Card, CardContent, Typography, Box } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import StraightenIcon from "@mui/icons-material/Straighten";
import LayersIcon from "@mui/icons-material/Layers";

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
            <Card
                sx={{
                    borderRadius: 4,
                    paddingX: 2,
                    paddingY: 1,
                    flex: 1,
                    maxWidth: 400,
                }}
            >
                <CardContent>
                    <BoltIcon 
                        sx={{ 
                            color: "#3263e9", 
                            backgroundColor: "#dbe9fd", 
                            padding: 1.5,
                            width: 60,
                            height: 60,
                            borderRadius: 3,
                            mb: 1
                        }}
                    />
                    <Typography 
                        fontWeight="bold" 
                        gutterBottom
                        sx={{
                            fontSize: "1.15rem",
                        }}
                    >
                        Rapid Turnaround
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Standard production lead times of up to 1 business day for most
                        projects.
                    </Typography>
                </CardContent>
            </Card>

            <Card 
                sx={{ 
                    borderRadius: 4, 
                    paddingX: 2,
                    paddingY: 1, 
                    flex: 1, 
                    maxWidth: 400 
                }}
            >
                <CardContent>
                    <StraightenIcon 
                        sx={{ 
                            color: "#3263e9", 
                            backgroundColor: "#dbe9fd", 
                            padding: 1.5,
                            width: 60,
                            height: 60,
                            borderRadius: 3,
                            mb: 1
                        }}
                    />
                    <Typography
                        fontWeight="bold" 
                        gutterBottom
                        sx={{
                            fontSize: "1.15rem",
                        }}
                    >
                        Precision Engineering
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ±0.1mm accuracy with comprehensive quality control processes.
                    </Typography>
                </CardContent>
            </Card>

            <Card 
                sx={{ 
                    borderRadius: 4, 
                    paddingX: 2,
                    paddingY: 1, 
                    flex: 1, 
                    maxWidth: 400 
                }}
            >
                <CardContent>
                    <LayersIcon 
                        sx={{ 
                            color: "#3263e9", 
                            backgroundColor: "#dbe9fd", 
                            padding: 1.5,
                            width: 60,
                            height: 60,
                            borderRadius: 3,
                            mb: 1
                        }} 
                    />
                    <Typography
                        fontWeight="bold" 
                        gutterBottom
                        sx={{
                            fontSize: "1.15rem",
                        }}
                    >
                        10+ Materials & Colours
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Wide selection of engineering-grade materials for any application.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
