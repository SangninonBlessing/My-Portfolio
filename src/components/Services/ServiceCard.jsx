import { motion } from "framer-motion";

function ServiceCard({ service }) {
    const Icon = service.icon;

    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="
                group
                rounded-3xl
                border border-gray-200
                bg-white
                p-8
                shadow-sm
                hover:shadow-xl
                hover:border-primary
                transition-all
            "
            >
            <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-primary/10
                flex
                items-center
                justify-center
                mb-6
                group-hover:bg-primary
                transition
                "
            >
                <Icon
                className="
                    text-3xl
                    text-primary
                    group-hover:text-white
                    transition
                "
                />
            </div>

            <h3 className="text-2xl font-bold mb-4">
                {service.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
                {service.description}
            </p>
        </motion.div>
    );
}

export default ServiceCard;