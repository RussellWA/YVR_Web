import LayersIcon from "@mui/icons-material/Layers";
import ScienceIcon from "@mui/icons-material/Science";

export const technologies = [
    {
        type: "FDM (Fused Deposition Modeling)",
        description: "Our industrial FDM technology is perfect for producing strong, durable, and dimensionally stable parts with complex geometries. Ideal for  functional prototypes, manufacturing aids, and end-use parts where strength and thermal stability are key",
        image: "/images/capabilities/fdm/printer_inside.jpg",
        icon: LayersIcon,
        materials: [
            {
                name: "PLA+",
                desc: "High stiffness and detail. Best for visual models, form-fit testing, low-stress applications.",
                specs: ["Accuracy: ±0.1mm", "Max Size: 420×420×500mm"],
                image: "/images/capabilities/fdm/pla.png",
                tags: ["High Detail", "Visual Models"],
            },
            {
                name: "PETG",
                desc: "Durable with excellent chemical resistance. Best for liquid containers, mechanical parts, protective covers.",
                specs: ["Accuracy: ±0.1mm", "Max Size: 420×420×500mm"],
                image: "/images/capabilities/fdm/petg.png",
                tags: ["Tough", "Resistant"],
            },
            {
                name: "ABS",
                desc: "High impact strength and temperature resistance. Best for automotive, enclosures, prototypes.",
                specs: ["Accuracy: ±0.15mm", "Max Size: 300×300×300mm"],
                image: "/images/capabilities/fdm/abs.png",
                tags: ["Durable", "Industrial Use"],
            },
            {
                name: "TPU",
                desc: "Flexible, rubber-like material. Best for grips, dampers, wearables, flexible joints.",
                specs: ["Accuracy: ±0.15mm", "Max Size: 300×300×300mm"],
                image: "/images/capabilities/fdm/tpu.png",
                tags: ["Flexible", "Wearables"],
            },
            {
                name: "Nylon",
                desc: "Excellent strength, toughness, and wear resistance. Best for living hinges, gears, mechanical parts.",
                specs: ["Accuracy: ±0.1mm", "Max Size: 300×300×300mm"],
                image: "/images/capabilities/fdm/nylon.png",
                tags: ["Strong", "Mechanical Parts"],
            },
            {
                name: "Carbon Fiber Nylon",
                desc: "Superior strength-to-weight ratio and stiffness. Best for high-performance parts, jigs, fixtures.",
                specs: ["Accuracy: ±0.1mm", "Max Size: 300×300×300mm"],
                image: "/images/capabilities/fdm/cfn.png",
                tags: ["Lightweight", "High Strength"],
            },
        ]
    },
    {
        type: "SLA (Stereolithography)",
        description: "SLA technology produces parts with extremely high feature resolution and smooth, injection-mold-like surface finishes. It is ideal for intricate models, patterns for casting, and prototypes where aesthetics are paramount.",
        image: "/images/capabilities/sla/printing.jpg",
        icon: ScienceIcon,
        materials: [
            {
                name: "Standard Resin",
                desc: "High stiffness and detail. Best for: Visual models, form-fit testing, low-stress applications.",
                specs: ["Accuracy: ±0.05mm", "Max Size: 145×145×175mm"],
                image: "/images/capabilities/sla/sr.png",
                tags: ["High Detail", "Visual Models"],
            },
            {
                name: "Tough 2000 Resin",
                desc: "Durable with excellent chemical resistance. Best for liquid containers, mechanical parts, protective covers.",
                specs: ["Accuracy: ±0.05mm", "Max Size: 145×145×175mm"],
                image: "/images/capabilities/sla/t200r.png",
                tags: ["High Strength", "Durable"],
            },
            {
                name: "High Temp Resin",
                desc: "High impact strength and temperature resistance. Best for automotive, enclosures, prototypes.",
                specs: ["Accuracy: ±0.05mm", "Max Size: 145×145×175mm"],
                image: "/images/capabilities/sla/htr.png",
                tags: ["Heat Resistant", "Impact Resistant"],
            },
            {
                name: "Flexible Resin",
                desc: "Flexible, rubber-like material. Best for grips, dampers, wearables, flexible joints.",
                specs: ["Accuracy: ±0.05mm", "Max Size: 145×145×175mm"],
                image: "/images/capabilities/sla/fr.png",
                tags: ["Flexible", "Wearables"],
            },
        ]
    }
];

export const finishingOptions = [
    {
        name: "Support Removal & Sanding",
        description: "Standard and fine sanding options for a smooth surface finish.",
        benefits: [
            { text: "Standard finish (Ra 10μm)" },
            { text: "Fine finish (Ra 5μm)" }
        ]
    },
    {
        name: "Assembly & Bonding",
        description: "Assembly of multi-part projects and threaded insert installation.",
        benefits: [
            { text: "Adhesive bonding" },
            { text: "Threaded inserts" }
        ]
    },
]