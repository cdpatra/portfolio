import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiCodingninjas } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { IoMailOutline } from "react-icons/io5";
export default function SocialLinks() {
   const buttonVariants = {
      hover: {
         scale: 1.3,
         transition: {
            type: "spring",
            stiffness: 600,
         },
      },
   };
   return (
      <>
         <motion.div variants={buttonVariants} whileHover="hover">
            <a href="https://www.linkedin.com/in/chinam-dibyadyuti-patra/" target="_blank">
               <FaLinkedin />
            </a>
         </motion.div>
         <motion.div variants={buttonVariants} whileHover="hover">
            <a href="https://github.com/cdpatra" target="_blank">
               <FaGithub />
            </a>
         </motion.div>
         <motion.div variants={buttonVariants} whileHover="hover">
            <a href="mailto:cdpatra03@gmail.com" target="_blank">
               <IoMailOutline />
            </a>
         </motion.div>
         <motion.div variants={buttonVariants} whileHover="hover">
            <a href="https://www.naukri.com/code360/profile/c_Dibyadyuti" target="_blank">
               <SiCodingninjas />
            </a>
         </motion.div>
         <motion.div variants={buttonVariants} whileHover="hover">
            <a href="https://leetcode.com/u/Chinam_Dibyadyuti_Patra_CODER/" target="_blank">
               <SiLeetcode />
            </a>
         </motion.div>
      </>
   );
}
