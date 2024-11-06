import { AnimatedTooltip } from "./AnimatedTooltip";
import c from "../assets/images/technologies/c.png";
import cpp from "../assets/images/technologies/c++.png";
import java from "../assets/images/technologies/java.png";
import python from "../assets/images/technologies/python.png";
import html from "../assets/images/technologies/html.png";
import css from "../assets/images/technologies/css.png";
import js from "../assets/images/technologies/js.png";
import tailwind from "../assets/images/technologies/tailwind.png";
import react from "../assets/images/technologies/react.png";
import mysql from "../assets/images/technologies/mysql.png";
import hibernate from "../assets/images/technologies/hibernate.png";
import springBoot from "../assets/images/technologies/spring-boot.png";
import git from "../assets/images/technologies/git.png";

export default function About() {
   const technologies = [
      {
         id: 1,
         name: "C",
         color: "#5c6bc0",
         image: c,
      },
      {
         id: 2,
         name: "C++",
         color: "#0086d4",
         image: cpp,
      },
      {
         id: 3,
         name: "Java",
         color: "#f44336",
         image: java,
      },
      {
         id: 4,
         name: "Python",
         color: "#ffc107",
         image: python,
      },
      {
         id: 5,
         name: "HTML",
         color: "#ff6d00",
         image: html,
      },
      {
         id: 6,
         name: "CSS",
         color: "#039be5",
         image: css,
      },
      {
         id: 7,
         name: "JavaScript",
         color: "#ffd600",
         image: js,
      },
      {
         id: 8,
         name: "Tailwind CSS",
         color: "#00acc1",
         image: tailwind,
      },
      {
         id: 9,
         name: "React",
         color: "#00d8ff",
         image: react,
      },
      {
         id: 10,
         name: "MySQL",
         color: "#00796b",
         image: mysql,
      },
      {
         id: 11,
         name: "Hibernate",
         color: "#bbad77",
         image: hibernate,
      },
      {
         id: 12,
         name: "Spring Boot",
         color: "#8bc34a",
         image: springBoot,
      },
      {
         id: 13,
         name: "Git",
         color: "#f4511e",
         image: git,
      },
   ];
   return (
      <>
         <div id="about" className="scroll-stopper"></div>
         <div className="about-container mt-28">
            <h1 className="text-5xl font-bold m-8 font-lato text-center">About Me</h1>
            <div className="about-content flex flex-col mx-2 md:mx-8 lg:flex-row gap-6">
               <div className="about-text font-poppins font-extralight dark:text-slate-200 lg:basis-1/3 p-4 border bg-secondary-light dark:bg-secondary-dark border-slate-700/[0.2] dark:border-white/[0.2] rounded-lg">
                  <p className="py-4">
                     I&apos;m Chinam Dibyadyuti Patra, a final-year B.Tech student at Raj Kumar Goel Institute of
                     Technology and Management, specializing in full-stack Java development. I have experience with
                     C/C++, Java, Python, and web technologies like HTML, CSS, and JavaScript.
                  </p>
                  <p className="py-4">
                     My skills include React.js and Tailwind CSS for the front end, and Spring, Spring Boot,
                     Servlets, JSP, and Hibernate for the back end, along with MySQL and Spring Security.
                  </p>
                  <p className="py-4">
                     I&apos;m actively seeking job opportunities to kickstart my career and contribute to
                     innovative projects.
                  </p>
               </div>
               <div className="3d-elements lg:basis-2/3 flex flex-row flex-wrap items-center justify-center border dark:bg-secondary-dark border-slate-700/[0.2] dark:border-white/[0.2] rounded-lg py-14 px-4 gap-8">
                  <AnimatedTooltip items={technologies} />
               </div>
            </div>
         </div>
      </>
   );
}
