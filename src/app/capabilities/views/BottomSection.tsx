import { Box, Button, Card, CardContent, TextField, Typography } from "@mui/material";


export default function BottomSection() {
    return(
        <Box sx={{ mb: 10, mt: 5, px: 8 }}>
            <Card 
                sx={{ backgroundColor: "#F1F5F9", px: 4, py: 2, borderRadius: 3, boxShadow: 5, 
                    display: "flex", justifyContent: "space-between", alignItems: "center"
                }}
            >
                <CardContent
                    sx={{ gap: 1, display: "flex", flexDirection: "column" }}
                >
                    <Typography fontWeight="bold" sx={{ fontSize: "1.5rem" }}>
                        Need help selecting the right technology?
                    </Typography>
                    <Typography sx={{ fontSize: "1rem" }}>
                        Our engineering team is ready to guide you to the optimal solution for your application.
                    </Typography>
                </CardContent>
                <Button variant="contained" 
                    sx={{ borderRadius: 2, backgroundColor: "#3C6CEA", color: "white", 
                        fontWeight: "bold", fontSize: "1rem", px: 5, py: 1 
                    }}
                >
                    Contact Us
                </Button>
            </Card>
            <Card 
                sx={{ backgroundColor: "#18212F", color:"white", px: 4, py: 2, borderRadius: 3, boxShadow: 5, mt: 10,
                    display: "flex", justifyContent: "space-between", alignItems: "center", gap: 3,
                    flexDirection: { xs: "column", md: "row" },
                }}
            >
                <CardContent
                    sx={{ gap: 1, display: "flex", flexDirection: "column", maxWidth: "600px" }}
                >
                    <Typography fontWeight="bold" sx={{ fontSize: "1.5rem" }}>
                        Join our mailing list for events and offers!
                    </Typography>
                    <Typography sx={{ fontSize: "1rem" }}>
                        Register for our newsletter to stay informed about all product releases, gain valuable insights from our team, and receive direct access to our most recent promotions and discounts.
                    </Typography>
                </CardContent>
                <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", gap: 2, width: "100%" }}>
                    <TextField
                        placeholder="Enter your email"
                        sx={{ backgroundColor: "white", width: "100%", maxWidth: 320 }}
                        // TODO email thing
                    />
                    <Button variant="contained" 
                        sx={{ borderRadius: 2, backgroundColor: "#2741A1", color: "white", 
                            fontWeight: "bold", fontSize: "1rem", px: 5, py: 1 
                        }}
                    >
                        Contact Us
                    </Button>
                </Box>
            </Card>
        </Box>
    );
}