import Logo from "../assets/images/logo.png";

export default function NavBar() {
   return (
      <div className="wrapper fixed top-0 w-full z-10 flex justify-center">
         <nav className="h-16 w-5/6 m-4 px-28 rounded-full bg-white/15 backdrop-blur-lg flex items-center gap-12 justify-between">
            <img className="h-4/6" src={Logo} alt="Logo" />
            <ul className="flex gap-10 text-white">
               <li>
                  <a href="#">Home</a>
               </li>
               <li>
                  <a href="#">About</a>
               </li>
               <li>
                  <a href="#">Projects</a>
               </li>
               <li>
                  <a href="#">Contact</a>
               </li>
            </ul>
            <h1 className="text-3xl mb-1">🌕</h1>
         </nav>
      </div>
   );
}
