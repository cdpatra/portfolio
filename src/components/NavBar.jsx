import Logo from "../assets/images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import MobileNav from "./MobileNav";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function NavBar() {
   const [isOpen, setIsOpen] = useState(false);
   const [isDark, setIsDark] = useContext(ThemeContext);
   const menuOptions = [
      {
         id: 1,
         title: "Home",
         href: "#",
      },
      {
         id: 2,
         title: "About",
         href: "#about",
      },
      {
         id: 3,
         title: "Projects",
         href: "#projects",
      },
      {
         id: 4,
         title: "Contact",
         href: "#contact",
      },
   ];
   return (
      <>
         <div className=" wrapper fixed top-0 h-fit w-full z-50 flex-col items-center justify-center">
            <nav className=" h-16 w-5/6 mt-4 mx-auto  px-4 overflow-hidden  md:px-20 lg:px-28 rounded-full bg-neutral-300/80 dark:bg-white/15 backdrop-blur-lg flex items-center gap-12 justify-between">
               <a className="block h-4/6" href="#">
                  <img className="h-full" src={Logo} alt="Logo" />
               </a>
               <ul className="hidden sm:flex gap-10">
                  {menuOptions.map((option) => (
                     <li key={option.id}>
                        <a href={option.href}> {option.title} </a>
                     </li>
                  ))}
               </ul>
               <h1 className="text-3xl mb-1 flex items-center gap-4">
                  <span className="cursor-pointer" onClick={() => setIsDark(!isDark)}>
                     {isDark ? "🌕" : "☀️"}
                  </span>
                  <motion.div
                     className="hamburger-menu sm:hidden text-gray-700 dark:text-white text-3xl"
                     whileTap={{ rotate: 90 }}
                     onClick={() => setIsOpen(!isOpen)}>
                     {isOpen == false ? <HiOutlineMenuAlt3 /> : <IoIosClose />}
                  </motion.div>
               </h1>
            </nav>
            <AnimatePresence>
               {isOpen && <MobileNav menuOptions={menuOptions} setIsOpen={setIsOpen} />}
            </AnimatePresence>
         </div>
      </>
   );
}
