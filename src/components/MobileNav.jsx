/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
export default function MobileNav({ menuOptions, setIsOpen }) {
   return (
      <motion.div
         className=" text-gray-700 dark:text-white text-center flex-col justify-items-center w-5/6 m-2 box-border bg-neutral-300/80 dark:bg-white/15 backdrop-blur-lg rounded-2xl mx-auto overflow-hidden p-4"
         initial={{ opacity: 0, y: -100 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -100 }}>
         <ul className="flex flex-col gap-4">
            {menuOptions.map((option) => (
               <li key={option.id} onClick={() => setIsOpen(false)}>
                  <a href={option.href}>{option.title} </a>
               </li>
            ))}
         </ul>
      </motion.div>
   );
}
