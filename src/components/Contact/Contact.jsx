import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >

          <p className="text-primary font-semibold">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Let's Build Something Amazing Together
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities,
            exciting projects and creative collaborations.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <a
            href="mailto:blessing.sangninon@gmail.com"
            className="
              p-8
              rounded-3xl
              border
              hover:border-primary
              hover:shadow-lg
              transition
            "
          >
            <FaEnvelope className="text-4xl text-primary mb-5"/>

            <h3 className="font-bold text-xl">
              Email
            </h3>

            <p className="text-gray-600 mt-2">
              blessing.sangninon@gmail.com
            </p>

          </a>

          <a
            href="https://www.linkedin.com/in/blessing-sangninon"
             target="_blank"
             rel="noopener noreferrer"
            className="
              p-8
              rounded-3xl
              border
              hover:border-primary
              hover:shadow-lg
              transition
            "
          >
            <FaLinkedin className="text-4xl text-primary mb-5"/>

            <h3 className="font-bold text-xl">
              LinkedIn
            </h3>

            <p className="text-gray-600 mt-2">
              Connect with me
            </p>

          </a>

          <a
            href="https://github.com/SangninonBlessing"
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-8
              rounded-3xl
              border
              hover:border-primary
              hover:shadow-lg
              transition
            "
          >
            <FaGithub className="text-4xl text-primary mb-5"/>

            <h3 className="font-bold text-xl">
              GitHub
            </h3>

            <p className="text-gray-600 mt-2">
              View my repositories
            </p>

          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;