export default function HeroSection() {
   return (
      <div className="hero-section absolute text-white text-center top-1/4 left-1/2 -translate-x-1/2">
         <div className="hero-content  bg-white/5 backdrop-blur-sm rounded-full p-4">
            <div className="xl:text-8xl lg:text-7xl  md:text-5xl sm:text-3xl text-xl text-nowrap text-center font-nunito font-bold m-8 cursor-default ">
               Chinam Dibyadyuti Patra
            </div>
            <div className="font-playwrite cursor-default m-8 xl:text-2xl lg:text-xl md:text-lg text-sm">
               Java Full Stack Developer
            </div>
         </div>
         <button
            type="button"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium font-mono rounded-full py-4 px-8 text-center mt-28">
            Let&apos;s get Started
         </button>
      </div>
   );
}
