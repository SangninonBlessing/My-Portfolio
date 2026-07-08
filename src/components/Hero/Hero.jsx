import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import photo from '/studdiary-Logo (2).png'
import myCV from '/Blessing Sangninon Resume.pdf'
function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        pt-24
        bg-gray-50
      "
    >

      <div
        className="
          max-w-6xl
          mx-auto
          px-6
          grid
          md:grid-cols-2
          gap-12
          items-center
        "
      >

        {/* Texte */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="
            text-primary
            text-lg
            font-bold
            mb-4
          ">
            Portfolio
          </p>


          <h1
            className="
              text-5xl
              md:text-6xl
              font-bold
              text-gray-900
              leading-tight
            "
          >

            Blessing
            <span className="text-primary">
              {" "}Sangninon
            </span>

          </h1>


          <h2
            className="
              mt-4
              text-2xl
              md:text-3xl
              font-semibold
              text-gray-700
            "
          >
            Full Stack Developer · Visual Designer · Content Creator
          </h2>


          <p
            className="
              mt-6
              text-gray-600
              leading-relaxed
              max-w-xl
            "
          >

            I build modern web applications, 
            design engaging digital experiences, 
            and tell stories that stick. 
            No clutter. No gimmicks. 
            Just purposeful work that looks great, works smoothly, 
            and stays with people long after they click away.

            <br />

            For me, great digital work doesn't choose between form and function 
            — it brings together engineering, design, and storytelling to create something truly meaningful.

          </p>


          {/* Boutons */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-4
            "
          >

            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="
                cursor-pointer
                bg-primary
                text-white
                px-6
                py-3
                rounded-full
                hover:scale-105
                transition
              "
            >
              Voir mes projets
            </Link>


            <a
              href={myCV}
              download
              className="
                border
                border-primary
                text-primary
                px-6
                py-3
                rounded-full
                hover:bg-primary
                hover:text-white
                transition
              "
            >
              Download CV 
            </a>


          </div>


          {/* Réseaux */}

          <div
            className="
              mt-8
              flex
              gap-5
              text-2xl
            "
          >

            <a
              href="https://github.com/SangninonBlessing"
              className="
                text-gray-700
                hover:text-primary
              "
            >
              <FaGithub />
            </a>


            <a
              href="www.linkedin.com/in/blessing-sangninon"
              className="
                text-gray-700
                hover:text-primary
              "
            >
              <FaLinkedin />
            </a>

          </div>


        </motion.div>



        {/* Image */}

        <motion.div

          initial={{ opacity:0, scale:0.8 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration:0.8 }}

          className="
            flex
            justify-center
          "
        >

          <div
            className="
              relative
              w-72
              h-72
              md:w-96
              md:h-96
            "
          >

            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-gradient-to-br
                from-primary
                to-accent
                blur-xl
                opacity-30
              "
            />


            <img

              src={photo}

              alt="Blessing Sangninon"

              className="
                relative
                w-full
                h-125
                object-cover
                rounded-full
                border-8
                border-white
                shadow-xl
              "

            />


          </div>

        </motion.div>


      </div>


    </section>
  );
}

export default Hero;