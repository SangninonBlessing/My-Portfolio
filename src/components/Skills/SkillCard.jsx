import { motion } from "framer-motion";

function SkillCard({ icon, title, skills }) {

  return (

    <motion.div

      whileHover={{ y:-8 }}

      className="
        bg-gray-50
        rounded-2xl
        p-6
        shadow-sm
        hover:shadow-xl
        transition
      "

    >

      <div
        className="
          text-4xl
          text-primary
          mb-4
        "
      >
        {icon}
      </div>


      <h3
        className="
          text-xl
          font-bold
          text-gray-900
          mb-4
        "
      >
        {title}
      </h3>


      <ul
        className="
          space-y-2
          text-gray-600
        "
      >

        {
          skills.map((skill,index)=>(

            <li
              key={index}
              className="
                flex
                items-center
                gap-2
              "
            >

              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-primary
                "
              />

              {skill}

            </li>

          ))
        }

      </ul>


    </motion.div>

  );

}

export default SkillCard;