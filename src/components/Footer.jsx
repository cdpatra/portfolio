import logo from "../assets/images/logo.png";
import SocialLinks from "./SocialLinks";
export default function Footer() {
   return (
      <div className=" flex flex-col items-center gap-8 dark:bg-black bg-secondary-light p-10 text-gray-500 dark:text-gray-400">
         <span>Chinam Dibyadyuti Patra &copy; {new Date().getFullYear()} </span>
         <img src={logo} alt="logo" className="w-10" />
         <div className="flex gap-8 text-2xl">
            <SocialLinks />
         </div>
      </div>
   );
}
