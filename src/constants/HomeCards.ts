import BoltIcon from "@mui/icons-material/Bolt";
import StraightenIcon from "@mui/icons-material/Straighten";
import LayersIcon from "@mui/icons-material/Layers";

export const reduction = [
    {
        percentage: "92%",
        label: "Reduction in Lead Time"
    },
    {
        percentage: "73%",
        label: "Reduction in Costs"
    }
];

export const processes = [
    {
        num: "1",
        label: "1. Upload & Quote",
        description: "Upload your 3D model and instantly receive a quote with our AI-powered  engine. Our system analyzes geometry, volume, and requirements.",
    },
    {
        num: "2",
        label: "2. Design Review",
        description: "Our engineers conduct a free Design for Manufacturability (DFM) analysis and provide optimization suggestions if necessary for production within 24 hours.",
    },
    {
        num: "3",
        label: "3. Production",
        description: "Your parts are manufactured using industrial-grade equipment with in-process monitoring for consistent quality.",
    },
    {
        num: "4",
        label: "4. Quality & Shipping",
        description: "Each part undergoes dimensional inspection before being carefully packaged and shipped using your selected courier service.",
    }
];

export const timeline = [
    {
        duration: "1-2 Days",
        job: "Hobby and Prototyping"
    },
    {
        duration: "2-5 Days",
        job: "Production and Industrial Parts"
    },
    {
        duration: "3-7 Days",
        job: "Finished Assemblies"
    },
];

export const services = [
    {
        title: "Rapid Prototyping",
        description: "Accelerate your design cycle with fast, functional prototypes that validate form, fit, and function before production.",
        points: ["Concept validation", "Functional testing", "Design iteration"],
    },
    {
        title: "Production Parts",
        description: "Manufacture end-use parts with consistent quality and performance using industrial-grade materials and processes.",
        points: ["Mid-volume production", "Spare parts manufacturing", "Custom components"],
    },
    {
        title: "Tooling & Fixtures",
        description: "Optimize your manufacturing process with custom jigs, fixtures, and tooling designed for efficiency and precision.",
        points: ["Assembly aids", "Inspection fixtures", "Custom workholding"],
    },
];

export const introCards = [
    {
        title: "Rapid Turnaround",
        description:
            "Standard production lead times of up to 1 business day for most projects.",
        Icon: BoltIcon,
    },
    {
        title: "Precision Engineering",
        description:
            "±0.1mm accuracy with comprehensive quality control processes.",
        Icon: StraightenIcon,
    },
    {
        title: "10+ Materials & Colours",
        description:
            "Wide selection of engineering-grade materials for any application.",
        Icon: LayersIcon,
    },
];