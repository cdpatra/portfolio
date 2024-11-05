import { useContext } from "react";
import Form from "./Form";
import { Globe } from "./Globe";
import { ThemeContext } from "../contexts/ThemeContext";
import SocialLinks from "./SocialLinks";

export default function Contact() {
   const [isDark] = useContext(ThemeContext);
   return (
      <>
         <div id="contact" className="scroll-stopper"></div>
         <div className="contact-container mt-28 bg-gradient-to-b from-primary-light dark:from-primary-dark to-secondary-light dark:to-black">
            <h1 className="text-5xl font-bold mb-8 font-lato text-center relative z-20">Contact Me</h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch -mb-[450px] mx-2">
               <Form />
               <div className="flex sm:flex-col justify-evenly text-4xl backdrop-blur-sm bg-slate-700/15 dark:bg-white/5 rounded-lg p-10 z-20">
                  <SocialLinks />
               </div>
            </div>
            {isDark && <Globe />}
            {!isDark && <Globe />}
         </div>
      </>
   );
}
