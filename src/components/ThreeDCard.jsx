/* eslint-disable react/prop-types */
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCard({ project }) {
   return (
      <CardContainer className="inter-var">
         <CardBody className=" flex flex-col justify-between  bg-secondary-light relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#272f36] dark:border-white/[0.2] border-black/[0.1] w-auto max-w-[25rem] sm:w-[25rem] h-[520px]  rounded-xl p-6 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
               {project.title}
            </CardItem>
            <CardItem
               as="p"
               translateZ="60"
               className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
               {project.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
               <img
                  src={project.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
               />
            </CardItem>
            <div className="flex flex-row-reverse justify-between items-center mt-5">
               <CardItem
                  translateZ={20}
                  as="a"
                  href={project.gitHub}
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-slate-700 dark:bg-white dark:text-black text-white text-xs font-bold">
                  GitHub
               </CardItem>
               {project.live && (
                  <CardItem
                     translateZ={20}
                     as="a"
                     href={project.live}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                     Live Demo →
                  </CardItem>
               )}
            </div>
         </CardBody>
      </CardContainer>
   );
}
