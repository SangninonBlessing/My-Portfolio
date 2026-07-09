import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    FaYoutube, 
    FaExternalLinkAlt, 
    FaPlay, 
    FaPause,
    FaVolumeUp,
    FaVolumeMute,
    FaExpand,
    FaCompress,
    FaRedo,
    FaRandom,
    FaThumbsUp,
    FaShare,
    FaSave
} from "react-icons/fa";

import CreativeCard from "./CreativeCard";
import creativeWorks from "../../data/creative";

const filters = [
    "All",
    "Design",
    "Branding",
    "Documents",
    "Content",
    "Videos",
];

function Creative() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [preview, setPreview] = useState(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isLoop, setIsLoop] = useState(false);
    const [isShuffle, setIsShuffle] = useState(false);

    const filteredWorks = useMemo(() => {
        if (activeFilter === "All") return creativeWorks;

        return creativeWorks.filter(
        (work) => work.category === activeFilter
        );
    }, [activeFilter]);

    // Function to open document in a new window
  
    const openDocument = (url) => {
        // Construire une URL absolue si nécessaire
        const absoluteUrl = url.startsWith('http') 
            ? url 
            : `${window.location.origin}${url}`;
        
        // Ouvrir dans un nouvel onglet
        window.open(absoluteUrl, '_blank');
    };

    // Custom YouTube parameters
    const youtubeParams = {
        autoplay: isPlaying ? 1 : 0,
        mute: isMuted ? 1 : 0,
        loop: isLoop ? 1 : 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        modestbranding: 1,
        playsinline: 1,
        fs: 1,
        enablejsapi: 1,
        origin: window.location.origin,
        widget_referrer: window.location.href,
        playlist: isLoop ? "YOUR_VIDEO_ID" : undefined
    };

    const buildYouTubeUrl = () => {
        const baseUrl = "https://www.youtube.com/@PassionnedeDieu";
        const params = new URLSearchParams();
        
        Object.entries(youtubeParams).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            params.append(key, value);
        }
        });

        if (isShuffle) {
        return `${baseUrl}/videoseries?list=UU${"YOUR_CHANNEL_ID".replace('UC', '')}&${params.toString()}`;
        }

        return `${baseUrl}?listType=user_uploads&list=YOUR_CHANNEL_ID&${params.toString()}`;
    };

    return (
        <>
            <section
                id="creative"
                className="py-24 bg-white"
            >
                <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <p className="text-primary font-semibold">
                    Creative Portfolio
                    </p>

                    <h2 className="text-5xl font-bold mt-3">
                    Design. Create. Inspire.
                    </h2>

                    <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
                    A collection of visual designs, documents,
                    inspiring content and creative projects.
                    </p>
                </motion.div>

                {/* Filters */}

                <div className="flex flex-wrap justify-center gap-3 mt-12">

                    {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`
                        px-5
                        py-2
                        rounded-full
                        transition
                        ${
                            activeFilter === filter
                            ? "bg-primary text-white"
                            : "bg-gray-100 hover:bg-gray-200"
                        }
                        `}
                    >
                        {filter}
                    </button>
                    ))}

                </div>

                {/* YouTube Channel Widget - Elaborate */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-16 mb-8 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-600 rounded-3xl p-6 border border-gray-700 shadow-2xl"
                >
                    {/* Widget Header */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-red-600 p-3 rounded-2xl shadow-lg shadow-red-600/20">
                            <FaYoutube className="text-3xl text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                Passionate about God
                                </h3>
                                <p className="text-gray-400 text-sm flex items-center gap-3">
                                    <span>📺 30+ videos</span>
                                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                                    <span>👥 200+ subscribers</span>
                                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                                    <span>🎬 14.8K views</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <a
                            href="https://www.youtube.com/@PassionnedeDieu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex
                                items-center
                                gap-2
                                bg-red-600
                                text-white
                                px-6
                                py-2.5
                                rounded-full
                                font-semibold
                                hover:bg-red-700
                                transition-all
                                hover:scale-105
                                hover:shadow-lg
                                hover:shadow-red-600/30
                                text-sm
                            "
                            >
                            <FaYoutube />
                            Go to channel
                            <FaExternalLinkAlt className="text-xs" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Gallery */}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

                    <AnimatePresence>

                    {filteredWorks.map((work) => (
                        <motion.div
                        key={work.id}
                        layout
                        initial={{ opacity: 0, scale: .9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        >
                        <CreativeCard
                            work={work}
                            onPreview={setPreview}
                            onOpenDocument={openDocument}
                        />
                        </motion.div>
                    ))}

                    </AnimatePresence>

                </div>

                </div>
            </section>

        
            {/* Image Preview (without modal, just reduced image) */}

            {preview?.type === "image" && (
                <div
                    onClick={() => setPreview(null)}
                    className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full"
                    >
                        <div className="flex justify-between items-center p-5 border-b">
                            <h3 className="text-xl font-bold">
                                {preview.title}
                            </h3>
                            <button
                                onClick={() => setPreview(null)}
                                className="text-3xl hover:text-gray-600"
                            >
                                ×
                            </button>
                        </div>
                        <div className="p-5">
                        <img
                            src={preview.file}
                            alt={preview.title}
                            className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
                        />
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

export default Creative;