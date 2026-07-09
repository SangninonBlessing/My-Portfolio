import { motion } from "framer-motion";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";


function Projects(){


    return (

        <section

            id="projects"

            className="
                py-20
                bg-gray-50
            "

        >


            <div

            className="
                max-w-6xl
                mx-auto
                px-6
            "

            >


                <motion.div

                    initial={{opacity:0,y:30}}

                    whileInView={{opacity:1,y:0}}

                    className="
                        text-center
                        mb-14
                    "

                >


                    <p
                        className="
                            text-primary
                            font-medium
                        "
                        >
                        Projects
                    </p>


                    <h2

                    className="
                        text-4xl
                        font-bold
                        text-gray-900
                        mt-2
                    "

                    >

                    Things I Have Built

                    </h2>


                    <p

                    className="
                        mt-4
                        text-gray-600
                    "

                    >

                        A selection of digital products,
                        applications and creative projects.

                    </p>


                </motion.div>



                <div

                className="
                    grid
                    md:grid-cols-2
                    gap-8
                "

                >


                    {

                        projects.map((project,index)=>(

                            <ProjectCard

                                key={index}

                                project={project}

                            />

                        ))

                    }


                </div>


            </div>


        </section>

    );


}


export default Projects;