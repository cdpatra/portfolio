import { ThreeDCard } from "./ThreeDCard";

export default function Projects() {
   return (
      <>
         <div id="projects" className="scroll-stopper"></div>
         <div className="projects-container mt-28">
            <h1 className="text-5xl font-bold mb-8 font-lato text-center">My Projects</h1>
         <div className="flex justify-center flex-wrap gap-12 p-4">
            <ThreeDCard />
            <ThreeDCard />
            <ThreeDCard />
            <ThreeDCard />
            <ThreeDCard />
            </div>
         </div>
      </>
   );
}

