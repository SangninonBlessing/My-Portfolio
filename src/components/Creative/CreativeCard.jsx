import { motion } from "framer-motion";
import { 
    FaEye, 
    FaDownload, 
    FaFilePdf, 
    FaImage, 
    FaFilm,
    FaExternalLinkAlt,
    FaYoutube
} from "react-icons/fa";

function CreativeCard({ work, onPreview, onOpenDocument }) {
    // Determine icon and color based on type
    const getTypeInfo = () => {
        switch(work.type) {
        case "pdf":
        case "document":
            return { 
            icon: <FaFilePdf className="text-red-600" />, 
            label: "Document",
            color: "bg-red-50 text-red-600"
            };
        case "video":
            return { 
            icon: <FaYoutube className="text-red-600" />, 
            label: "Video",
            color: "bg-red-50 text-red-600"
            };
        case "image":
        default:
            return { 
            icon: <FaImage className="text-primary" />, 
            label: "Image",
            color: "bg-primary/10 text-primary"
            };
        }
    };

    const typeInfo = getTypeInfo();

    const handleAction = () => {
        if (work.type === "document" || work.type === "pdf") {
            // Construire l'URL absolue du PDF
            const pdfUrl = work.file.startsWith('http') 
                ? work.file 
                : `${window.location.origin}${work.file}`;
            
            // Utiliser Google Docs Viewer
            const viewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;
            
            // Ouvrir dans un nouvel onglet
            window.open(viewerUrl, '_blank');
        } else {
            onPreview(work);
        }
    };

    const handleDownload = async (e) => {
        e.stopPropagation();
        
        try {
            // Essayer le téléchargement direct
            const link = document.createElement('a');
            link.href = work.file;
            link.download = work.file.split('/').pop();
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            // En cas d'échec, ouvrir dans un nouvel onglet
            window.open(work.file, '_blank');
        }
    };

    return (
        <motion.article
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            className="
                overflow-hidden
                rounded-3xl
                bg-white
                border
                border-gray-200
                shadow-sm
                hover:shadow-xl
                transition-all
                h-full
                flex
                flex-col
            "
            >
            {/* Thumbnail with improved overlay */}
            <div className="relative overflow-hidden group">
                <img
                src={work.thumbnail}
                alt={work.title}
                className="
                    w-full
                    h-56
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                "
                />

                {/* Hover Overlay */}
                <div className="
                    absolute
                    inset-0
                    bg-black/40
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                    flex
                    items-center
                    justify-center
                ">
                </div>

                {/* Type Badge */}
                <span className={`
                    absolute
                    top-4
                    right-4
                    flex
                    items-center
                    gap-2
                    bg-white/90
                    backdrop-blur-sm
                    px-3
                    py-1.5
                    rounded-full
                    text-sm
                    font-medium
                    shadow-lg
                    ${typeInfo.color}
                    `}>
                    {typeInfo.icon}
                    {typeInfo.label}
                </span>

                {/* Year Badge - Bottom Left */}
                <span className="
                    absolute
                    bottom-4
                    left-4
                    bg-black/60
                    backdrop-blur-sm
                    text-white
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-medium
                    ">
                    {work.year}
                </span>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                {/* Category and Metadata */}
                <div className="flex justify-between items-center mb-3">
                <span className="
                    text-sm
                    text-primary
                    font-semibold
                    bg-primary/10
                    px-3
                    py-1
                    rounded-full
                ">
                    {work.category}
                </span>
                
                {work.duration && (
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                    <FaFilm className="text-xs" />
                    {work.duration}
                    </span>
                )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold leading-tight mb-2">
                    {work.title}
                </h3>

                {/* Description with line limit */}
                <p className="text-gray-600 leading-relaxed line-clamp-3 flex-1">
                    {work.description}
                </p>

                {/* Tools */}
                {work.tools && work.tools.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                    {work.tools.slice(0, 3).map((tool) => (
                    <span
                        key={tool}
                        className="
                        px-3
                        py-1
                        rounded-full
                        bg-gray-100
                        text-gray-700
                        text-xs
                        font-medium
                        "
                    >
                        {tool}
                    </span>
                    ))}
                    {work.tools.length > 3 && (
                    <span className="
                        px-3
                        py-1
                        rounded-full
                        bg-gray-100
                        text-gray-500
                        text-xs
                        font-medium
                    ">
                        +{work.tools.length - 3}
                    </span>
                    )}
                </div>
                )}

                {/* Actions */}
                <div className="flex gap-3 mt-6">
                <button
                    onClick={handleAction}
                    className="
                        flex-1
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-primary
                        text-white
                        py-3
                        hover:bg-primary/90
                        hover:shadow-lg
                        transition-all
                        duration-300
                        group
                    "
                >
                    {work.type === "document" || work.type === "pdf" ? (
                    <>
                        <FaExternalLinkAlt className="group-hover:rotate-12 transition-transform" />
                        Open
                    </>
                    ) : work.type === "video" ? (
                    <>
                        <FaYoutube className="group-hover:scale-110 transition-transform" />
                        Watch
                    </>
                    ) : (
                    <>
                        <FaEye className="group-hover:scale-110 transition-transform" />
                        View
                    </>
                    )}
                </button>

                {/* Download Button */}
                {(work.type === "pdf" || work.type === "document") && (
                    <button
                    onClick={handleDownload}
                    className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        px-5
                        rounded-xl
                        border-2
                        border-primary
                        text-primary
                        hover:bg-primary
                        hover:text-white
                        hover:shadow-lg
                        transition-all
                        duration-300
                        font-medium
                    "
                    title="Download document"
                    >
                    <FaDownload className="text-sm" />
                    </button>
                )}
                </div>
            </div>
        </motion.article>
    );
}

export default CreativeCard;