import { motion } from "framer-motion";
import { FaCode, FaPalette, FaPenNib } from "react-icons/fa";

function About() {

  const cards = [
    {
      icon: <FaCode />,
      title: "Full Stack Development",
      text: "Building scalable and modern web applications with clean and efficient code."
    },
    {
      icon: <FaPalette />,
      title: "Visual Design",
      text: "Creating intuitive interfaces and meaningful digital experiences."
    },
    {
      icon: <FaPenNib />,
      title: "Content Creation",
      text: "Sharing ideas through educational, visual and creative content."
    }
  ];


  return (

    <section
      id="about"
      className="
        py-20
        bg-white
      "
    >

      <div
        className="
          max-w-6xl
          mx-auto
          px-6
        "
      >

        {/* Title */}

        <motion.div

          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6}}

          className="text-center mb-14"

        >

          <p
            className="
              text-primary
              font-medium
            "
          >
            About Me
          </p>


          <h2
            className="
              text-4xl
              font-bold
              text-gray-900
              mt-2
            "
          >
            Turning ideas into digital experiences
          </h2>

        </motion.div>



        {/* Content */}

        <div
          className="
            grid
            md:grid-cols-2
            gap-12
            items-center
          "
        >


          {/* Text */}

          <motion.div

            initial={{opacity:0, x:-40}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:0.7}}

          >

            <p
              className="
                text-gray-600
                leading-relaxed
                text-lg
              "
            >

              I am a Software Engineering and Data student
              passionate about creating useful and meaningful digital solutions.

              <br/><br/>

              My work combines software development,
              visual design and content creation to build
              products that are not only functional,
              but also enjoyable and easy to use.

              <br/><br/>

              I enjoy transforming ideas into real-world
              applications by combining technology,
              creativity and user-centered thinking.

            </p>


            {/* Stats 

            <div
              className="
                mt-8
                grid
                grid-cols-3
                gap-4
              "
            >

              <div>
                <h3 className="text-3xl font-bold text-primary">
                  10+
                </h3>

                <p className="text-gray-500 text-sm">
                  Projects
                </p>
              </div>


              <div>
                <h3 className="text-3xl font-bold text-primary">
                  8+
                </h3>

                <p className="text-gray-500 text-sm">
                  Technologies
                </p>
              </div>


              <div>
                <h3 className="text-3xl font-bold text-primary">
                  ∞
                </h3>

                <p className="text-gray-500 text-sm">
                  Creativity
                </p>
              </div>


            </div>*/}


          </motion.div>




          {/* Cards */}

          <motion.div

            initial={{opacity:0, x:40}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:0.7}}

            className="
              space-y-5
            "

          >

            {
              cards.map((card,index)=>(

                <div

                  key={index}

                  className="
                    flex
                    gap-5
                    p-6
                    rounded-2xl
                    bg-gray-50
                    hover:shadow-lg
                    transition
                  "

                >

                  <div
                    className="
                      text-3xl
                      text-primary
                    "
                  >
                    {card.icon}
                  </div>


                  <div>

                    <h3
                      className="
                        text-xl
                        font-semibold
                        text-gray-900
                      "
                    >
                      {card.title}
                    </h3>


                    <p
                      className="
                        mt-2
                        text-gray-600
                      "
                    >
                      {card.text}
                    </p>


                  </div>


                </div>


              ))
            }


          </motion.div>


        </div>


      </div>


    </section>

  );
}


export default About;