import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


function ProjectCard({project}){


return (

<motion.div

whileHover={{y:-10}}

className="
bg-white
rounded-2xl
overflow-hidden
shadow-sm
hover:shadow-xl
transition
"

>


<img

src={project.image}

alt={project.title}

className="
w-full
h-125
object-cover
"

/>


<div
className="
p-6
"
>


<div className="flex justify-between items-center mb-3">

<h3
className="
text-2xl
font-bold
text-gray-900
"
>
{project.title}
</h3>


<span
className={`
text-xs
px-3
py-1
rounded-full

${
project.status === "Completed"

? "bg-green-100 text-green-700"

: project.status === "In Development"

? "bg-yellow-100 text-yellow-700"

: "bg-purple-100 text-purple-700"

}

`}
>

{project.status}

</span>


</div>


<p
className="
mt-3
text-gray-600
leading-relaxed
"
>

{project.description}

</p>



<div
className="
flex
flex-wrap
gap-2
mt-5
"
>

{

project.technologies.map((tech,index)=>(

<span

key={index}

className="
px-3
py-1
text-sm
rounded-full
bg-pink-100
text-primary
"

>

{tech}

</span>

))

}

</div>




<div
className="
flex
gap-5
mt-6
"
>


<a

href={project.github}
target="_blank"
rel="noopener noreferrer"
className="
flex
items-center
gap-2
text-gray-700
hover:text-primary
"

>

<FaGithub/>

Github

</a>


</div>


</div>


</motion.div>


);


}


export default ProjectCard;