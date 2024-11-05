import { FaArrowDownLong } from "react-icons/fa6";
import {  motion } from "framer-motion";

export default function HeroSection() {

   const buttonVariants = {
      animate: {
         scale: 1,
         transition: {
            type:"spring",
            stiffness: 400,
         },
      },
      whileHover: {
         scale: 1.3,
         transition: {
            type: "spring",
            stiffness: 300,
         },
      },
   }
   
   return (
      <div className="hero-section absolute text-center top-1/4 left-1/2 -translate-x-1/2 flex flex-col items-center">
         {/* text-slate-700 */}
         <div className="hero-content bg-slate-700/5 dark:bg-white/5 backdrop-blur-md dark:backdrop-blur-sm rounded-full p-6">
            <div className="xl:text-8xl lg:text-7xl  md:text-6xl sm:text-5xl text-3xl text-nowrap text-start font-lato px-1 sm:px-4 md:px-16 lg:px-24 cursor-default ">
               <div className="font-light tracking-tighter">Chinam </div>
               <span className="font-extrabold tracking-widest">Dibyadyuti Patra</span>
            </div>
            <div className="font-playwrite cursor-default mt-8 xl:text-2xl lg:text-xl md:text-lg">
               Java Full Stack Developer
            </div>
         </div>
         <motion.div
            className="button-wrapper flex flex-col items-center"
            variants={buttonVariants}
            animate="animate"
            whileHover="whileHover">
            <a
               href="#about"
               type="button"
               className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-tl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium font-mono rounded-full py-4 px-8 text-center mt-16">
               Let&apos;s get Started
            </a>
            <FaArrowDownLong className="dark:text-white text-slate-700 text-4xl mt-4" />
         </motion.div>
      </div>
   );
}
