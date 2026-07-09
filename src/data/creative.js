import Photo1 from '/images/God-always-answer.png'
import Photo2 from '/images/The-power-of-the-in-between.png'
import Photo3 from '/images/Tout-va-bien-se-passer.png'
import MissimThumbnail from '/thumbnails/Missim-Partners.png'
import MissimPdf from '/pdf/Missim.pdf'

const creativeWorks = [
    {
        id: 1,
        title: "God always answers",
        type: "image",
        category: "Design",
        thumbnail: Photo1,
        file: Photo1,
        tools: ["DESIGN.COM", "Canva"],
        year: "2026",
        description: "Image of a girl praying fervently.",
        tags: ["Faith"]
    },
    {
        id: 2,
        title: "The power of the in-between",
        type: "image",
        category: "Design",
        thumbnail: Photo2,
        file: Photo2,
        tools: ["Canva", "AI"],
        year: "2026",
        description: "Explaining the power of trusting God in your waiting season.",
        tags: ["Faith"]
    },
    {
        id: 3,
        title: "Tout va bien se passer",
        type: "image",
        category: "Design",
        thumbnail: Photo3,
        file: Photo3,
        tools: ["Canva"],
        year: "2025",
        description: "Inspirational message for wallpaper",
        tags: ["Faith", "Wallpaper"]
    },
    {
        id: 4,
        title: "Presentation of MISSIM PARTNERS",
        type: "document",
        category: "Branding",
        thumbnail: MissimThumbnail,
        file: MissimPdf,
        tools: ["Canva"],
        year: "2026",
        description: "Design of the company's presentation",
        tags: ["Presentation", "Business", "Marketing"]  
    }
];

export default creativeWorks;