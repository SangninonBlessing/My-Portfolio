import { motion } from "framer-motion";
import services from "../../data/services";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold">
            Services
          </p>

          <h2 className="text-5xl font-bold mt-3">
            What I Can Help You Build
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            I combine software engineering, visual design and
            creative thinking to deliver digital products that
            are both functional and beautiful.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;