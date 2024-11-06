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
         description:
            "A full-stack web application that helps college students create a community to share notes and discover popular playlists followed by peers. Students can make notes for each playlist video, and playlists and notes are ranked by popularity and reviews. The platform also integrates AI features like a note summarizer.",
      },
      {
         id: 2,
         title: "Markdown Note Editor",
         image: markdown,
         gitHub: "https://github.com/cdpatra/Markdown-Note-Editor",
         live: undefined,
         description:
            "A web-based tool that allows users to write and format text, instantly rendering the output in styled form. Users can download their notes as PDF files. The editor is simple, efficient, and helps in quickly generating downloadable documents.",
      },
      {
         id: 3,
         title: "Bash Island",
         image: bashIsland,
         gitHub: "https://github.com/cdpatra/Bash-Island",
         live: undefined,
         description:
            "A 2D video game where players navigate through levels using arrow keys, overcoming obstacles to advance to the next stage. The game features a soothing retro user interface with nostalgic music, offering an immersive and enjoyable experience.",
      },
      {
         id: 4,
         title: "Atlas",
         image: atlas,
         gitHub:
            "https://github.com/cdpatra/Full-Stack-Web-Development/tree/main/Projects/Projects-using-HTML%2CCSS%26JavaScript/Atlas",
         live: "https://atlas-by-cdpatra.netlify.app/",
         description:
            "A visually appealing website that displays detailed country flags along with essential information about each nation. It features interactive functionalities such as dark mode, search, and filtering options, providing users with an engaging and informative experience.",
      },
      {
         id: 5,
         title: "Focus On Today",
         image: focusOnToday,
         gitHub:
            "https://github.com/cdpatra/Full-Stack-Web-Development/tree/main/Projects/Projects-using-HTML%2CCSS%26JavaScript/Focus-On-Today",
         live: "https://focus-on-today-by-cdpatra.netlify.app/",
         description:
            "A productivity web app designed to help users prioritize their top three daily tasks. Users can set three main goals to complete by the end of the day, with a progress bar that visually tracks their achievements as they complete each task, encouraging focus and accountability.",
      },
      {
         id: 6,
         title: "Diwali Wishes",
         image: diwaliWishes,
         gitHub:
            "https://github.com/cdpatra/Full-Stack-Web-Development/tree/main/Projects/Projects-using-HTML%26CSS-only/Diwali-Wishes",
         live: "https://diwali-wishes-by-cdpatra.netlify.app/",
         description:
            "A festive web app that offers personalized Diwali greetings. It includes background music and allows users to enter a friend's name in the URL parameter to send custom messages. The app was created for fun and practice, celebrating the Diwali festival.",
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
