import { Box } from "@mui/material";
import Image from "next/image";

export default function ImageRow() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "start",
                gap: 4,
            }}
        >
            <Image
                src="/images/lockbox_front.jpg"
                alt="3D Model 1"
                width={210}
                height={210}
                style={{ borderRadius: "16px", marginBottom: "8rem" }}
            />
            <Image
                src="/images/lockbox_front_two.jpg"
                alt="3D Model 2"
                width={210}
                height={210}
                style={{ borderRadius: "16px", marginTop: "4rem" }}
            />
            <Image
                src="/images/lockbox_top.jpg"
                alt="3D Model 3"
                width={210}
                height={210}
                style={{ borderRadius: "16px", marginTop: "8rem" }}
            />
        </Box>
    );
}