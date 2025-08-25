import { technologies } from "@/constants/Capabilities";
import { Box, Card, CardContent, Chip, Icon, Typography } from "@mui/material";
import Image from "next/image";

export default function TechnologySection() {
    return (
        <Box>
            {technologies.map((tech) => (
                <Box key={tech.type} sx={{ mb: 10, mt: 5 }}>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        flexDirection="row"
                        gap={12}
                    >
                        <Box
                            display="flex"
                            flexDirection="column"
                            gap={2}
                        >
                            <Box
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                gap={2}
                            >
                                <tech.icon 
                                    sx={{ color: "#3263e9", backgroundColor: "#dbe9fd", 
                                        padding: 1.5, width: 60, height: 60, borderRadius: 3, mb: 1,
                                    }}
                                />
                                <Typography fontWeight="bold" sx={{ fontSize: "2rem", color: "#000000ff" }}>
                                    {tech.type}
                                </Typography>
                            </Box>
                            <Typography sx={{ fontSize: "1rem", maxWidth: 700 }}>{tech.description}</Typography>
                        </Box>
                        <Box>
                            <Image
                                src={tech.image}
                                alt={tech.type}
                                width={330}
                                height={220}
                                style={{ borderRadius: "16px" }}
                            />
                        </Box>
                    </Box>
                    {(tech.materials).length > 0 && (
                        <Box display="flex" justifyContent="center" gap={7} flexWrap="wrap" sx={{ mt: 10 }}>
                            {tech.materials.map((material) => (
                                <Card key={material.name} 
                                    sx={{ display: "flex", borderRadius: 3, boxShadow: 5, my: 1, maxWidth: 500,
                                        transition: "transform 0.2s, box-shadow 0.2s",
                                        "&:hover": {
                                            transform: "translateY(-4px) scale(1.03)",
                                            boxShadow: 10,
                                        },
                                    }}
                                >
                                    <Box sx={{ width: "40%", position: "relative", minHeight: 150 }}>
                                        <Image src={material.image} alt={material.name} fill style={{ objectFit: "cover" }} />
                                    </Box>
                                    <CardContent sx={{ flex: 1 }}>
                                        <Typography variant="h6" fontWeight="600">{material.name}</Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                            {material.desc}
                                        </Typography>
                                        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 1 }}>
                                            {material.tags.map((tag, idx) => (
                                                <Chip key={idx} label={tag} color="primary" size="small" />
                                            ))}
                                        </Box>
                                        {material.specs.map((spec, idx) => (
                                            <Typography key={idx} variant="caption" display="block">{spec}</Typography>
                                        ))}
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>
                    )}
                </Box>
            ))}
        </Box>
    );
}