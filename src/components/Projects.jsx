import { ThreeDCard } from "./ThreeDCard";
import peershare from "../assets/images/projects/peershare.png";
import markdown from "../assets/images/projects/markdown-note-editor.png";
import bashIsland from "../assets/images/projects/bash-island.png";
import atlas from "../assets/images/projects/atlas.png";
import focusOnToday from "../assets/images/projects/focus-on-today.png";
import diwaliWishes from "../assets/images/projects/diwali-wishes.png";

export default function Projects() {
   const projects = [
      {
         id: 1,
         title: "PeerShare",
         image: peershare,
         gitHub: "https://github.com/cdpatra/PeerShare",
         live: undefined,
      },
      {
         id: 2,
         title: "Markdown Note Editor",
         image: markdown,
         gitHub: "https://github.com/cdpatra/Markdown-Note-Editor",
         live: undefined,
      },
      {
         id: 3,
         title: "Bash Island",
         image: bashIsland,
         gitHub: "https://github.com/cdpatra/Bash-Island",
         live: undefined,
      },
      {
         id: 4,
         title: "Atlas",
         image: atlas,
         gitHub:
            "https://github.com/cdpatra/Full-Stack-Web-Development/tree/main/Projects/Projects-using-HTML%2CCSS%26JavaScript/Atlas",
         live: "https://atlas-by-cdpatra.netlify.app/",
      },
      {
         id: 5,
         title: "Focus On Today",
         image: focusOnToday,
         gitHub:
            "https://github.com/cdpatra/Full-Stack-Web-Development/tree/main/Projects/Projects-using-HTML%2CCSS%26JavaScript/Focus-On-Today",
         live: "https://focus-on-today-by-cdpatra.netlify.app/",
      },
      {
         id: 6,
         title: "Diwali Wishes",
         image: diwaliWishes,
         gitHub:
            "https://github.com/cdpatra/Full-Stack-Web-Development/tree/main/Projects/Projects-using-HTML%26CSS-only/Diwali-Wishes",
         live: "https://diwali-wishes-by-cdpatra.netlify.app/",
      },
   ];
   return (
      <>
         <div id="projects" className="scroll-stopper"></div>
         <div className="projects-container mt-28">
            <h1 className="text-5xl font-bold mb-8 font-lato text-center">My Projects</h1>
            <div className="flex justify-center flex-wrap gap-12 p-4">
               {projects.map((project) => (
                  <ThreeDCard key={project.id} project={project} />
               ))}
            </div>
         </div>
      </>
   );
}
