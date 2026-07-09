import { motion } from "framer-motion";
import { 
    FaCode,
    FaPaintBrush,
    FaPen,
    FaTools
} from "react-icons/fa";

import SkillCard from "./SkillCard";


function Skills(){


    const skills = [

    {
    icon:<FaCode/>,
    title:"Development",
    skills:[
    "HTML",
    "CSS",
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MySQL",
    ]
    },


    {
    icon:<FaPaintBrush/>,
    title:"Visual Design",
    skills:[
    "UI/UX Design",
    "Canva", 
    "Figma", 
    "PowerPoint", 
    "Publisher", 
    
    ]
    },


    {
    icon:<FaPen/>,
    title:"Content Creation",
    skills:[
    "Storytelling",
    "Writing",
    "Social Media Content",
    "Filmora", 
    "Inshot",
    ]
    },


    {
    icon:<FaTools/>,
    title:"Tools & Workflow",
    skills:[
    "Git & GitHub",
    "VS Code",
    "Postman",
    "Agile / Scrum",
    "Responsive Design"
    ]
    }

    ];



    return (

        <section
        id="skills"
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
                        Skills
                    </p>


                    <h2
                    className="
                        text-4xl
                        font-bold
                        text-gray-900
                        mt-2
                    "
                    >
                        What I Bring
                    </h2>


                    <p
                    className="
                        mt-4
                        text-gray-600
                        max-w-xl
                        mx-auto
                    "
                    >
                        A combination of engineering,
                        design and creativity to build
                        complete digital experiences.
                    </p>


                </motion.div>

                <div
                className="
                    grid
                    md:grid-cols-2
                    gap-6
                "
                >

                    {
                        skills.map((skill,index)=>(

                        <SkillCard

                            key={index}

                            icon={skill.icon}

                            title={skill.title}

                            skills={skill.skills}

                        />

                        ))
                    }


                </div>


            </div>


        </section>

    );

}

export default Skills;