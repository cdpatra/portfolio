import { AnimatePresence, motion } from "framer-motion";
import { TbSocial } from "react-icons/tb";
import { useState } from "react";
import SocialLinks from "./SocialLinks";
export default function SocialButton() {
   const [isOpen, setIsOpen] = useState(false);
   const clickHandler = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div className="absolute links-container bottom-0 right-0">
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  className="absolute bottom-24 left-1 flex flex-col rounded-lg bg-neutral-300/80 dark:bg-white/15 backdrop-blur-lg text-4xl gap-10 px-2 py-6 mx-4 box-border"
                  initial={{
                     y: 80,
                     opacity: 0,
                  }}
                  animate={{
                     y: 0,
                     opacity: 1,
                  }}
                  exit={{
                     y: 80,
                     opacity: 0,
                  }}>
                  <SocialLinks />
               </motion.div>
            )}
         </AnimatePresence>
         <div
            className="m-4 p-2 text-5xl rounded-lg bg-neutral-300/80 dark:bg-white/15 backdrop-blur-lg"
            onClick={clickHandler}>
            <motion.div
               animate={{
                  y: [-2, +2, -2],
                  transition: { repeat: Infinity, duration: 1, ease: "circInOut" },
               }}
               whileTap={{ rotateZ: 45 }}>
               <TbSocial />
            </motion.div>
         </div>
      </div>
   );
}
