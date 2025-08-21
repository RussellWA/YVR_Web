import ServicesCards from "@/components/home/ServicesCards";
import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";

const stats = [
    { label: "Parts Produced", value: "1 Thousand+" },
    { label: "Total Machine Hours", value: "16 Thousand+" },
    { label: "Indonesian Labour", value: "100%" },
    { label: "Trusted By\nEmerging Industries", value: "" },
];

export default function ServicesSection() {
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
            <Typography 
                fontWeight="bold" 
                gutterBottom
                sx={{
                    fontSize: "2.5rem",
                    textAlign: "center",
                }}
            >
                Our 3D Printing Services
            </Typography>
            <Typography 
                variant="body1" 
                color="text.secondary"
                sx={{
                    textAlign: "center",
                }}
            >
                Leveraging cutting-edge technologies to transform your ideas into precision-engineered reality.
            </Typography>
            <ServicesCards />
            <Card
                sx={{
                    display: "flex",
                    flexWrap: { xs: "wrap", md: "nowrap" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: { xs: 2, md: "4rem" },
                    py: { xs: 2, md: "1.5rem" },
                    borderRadius: 4,
                    mt: 7,
                    mb: 4,
                    boxShadow: 6,
                    gap: 4,
                }}
            >
                {stats.map((stat, i) => (
                    <Box
                        key={stat.label}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        sx={{ minWidth: 120 }}
                    >
                        {stat.value && (
                            <Typography fontWeight="bold" sx={{ fontSize: "1.5rem" }}>
                                {stat.value}
                            </Typography>
                        )}
                        {stat.label.split("\n").map((line, idx) => (
                            <Typography
                                key={idx}
                                sx={{
                                    fontSize: stat.value ? "1rem" : "1.4rem",
                                    fontWeight: stat.value ? "normal" : "bold",
                                }}
                            >
                                {line}
                            </Typography>
                        ))}
                    </Box>
                ))}
                <Image
                    src="/images/ternakin_logo.png"
                    alt="Ternakin Logo"
                    width={177}
                    height={80}
                    style={{ objectFit: "contain" }}
                />
            </Card>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    mt: 4,
                    gap: 8,
                }}
            >
                <Image
                    src="/images/3d_prints.png"
                    alt="3D Prints"
                    width={504}
                    height={336}
                    style={{ objectFit: "contain", borderRadius: 20 }}
                />
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    gap={3}
                >
                    <Typography 
                        fontWeight="bold" 
                        sx={{
                            fontSize: "1.7rem",
                        }}
                    >
                        Your Local Partner in Creation
                    </Typography>
                    <Typography
                        gutterBottom
                        sx={{
                            fontSize: "1rem",
                        }}
                    >
                        Here at YVR3D, an Indonesian-based company, we&apos;re dedicated to serving all creators. 
                        We believe that custom manufacturing should be within everyone&apos;s reach, not just industry experts.
                    </Typography>
                    <Typography 
                        gutterBottom
                        sx={{
                            fontSize: "1rem",
                        }}
                    >
                        Whether you&apos;re a student, a small business, or a passionate hobbyist, our platform is designed for you. 
                        We&apos;ve made the process of creating custom parts simple, straightforward and affordable, 
                        empowering our local community to transform their innovative ideas into tangible results. 
                        Choose YVR3D to bring your vision to life, right here in Indonesia.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}