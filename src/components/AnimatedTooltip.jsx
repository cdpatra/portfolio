/* eslint-disable react/prop-types */
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";

export const AnimatedTooltip = ({ items }) => {
   const [hoveredIndex, setHoveredIndex] = useState(null);
   const springConfig = { stiffness: 100, damping: 5 };
   const x = useMotionValue(0); // Set this value on mouse move

   // Rotate the tooltip
   const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);

   // Translate the tooltip
   const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

   const handleMouseMove = (event) => {
      const halfWidth = event.target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth); // Set the x value, used in transform and rotate
   };

   return (
      <>
         {items.map((item) => (
            <div
               className="mx-4 relative group"
               key={item.name}
               onMouseEnter={() => setHoveredIndex(item.id)}
               onMouseLeave={() => setHoveredIndex(null)}>
               <AnimatePresence mode="popLayout">
                  {hoveredIndex === item.id && (
                     <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.6 }}
                        animate={{
                           opacity: 1,
                           y: 0,
                           scale: 1,
                           transition: {
                              type: "spring",
                              stiffness: 260,
                              damping: 10,
                           },
                        }}
                        exit={{ opacity: 0, y: 20, scale: 0.6 }}
                        style={{
                           translateX: translateX,
                           rotate: rotate,
                           whiteSpace: "nowrap",
                        }}
                        className="absolute -top-11 min-w-28 bg-slate-700 dark:bg-black flex text-xs flex-col items-center justify-center rounded-md z-30 shadow-xl px-4 py-2">
                        <div
                           className="absolute inset-x-10 z-30 w-[30%] -bottom-px h-[2px]"
                           style={{
                              background: `linear-gradient(to right, transparent, ${item.color},transparent)`,
                           }}
                        />
                        <div
                           className="absolute left-10 w-[50%] z-30 -bottom-px  h-[2px]"
                           style={{
                              background: `linear-gradient(to right, transparent, ${item.color},transparent)`,
                           }}
                        />
                        <div className="font-bold font-mono text-white relative z-30 text-base">{item.name}</div>
                     </motion.div>
                  )}
               </AnimatePresence>
               <img
                  onMouseMove={handleMouseMove}
                  height={100}
                  width={100}
                  src={item.image}
                  alt={item.name}
                  className="object-cover !m-0 !p-0 object-top h-24 w-24  group-hover:scale-105 group-hover:z-30 relative transition duration-500"
               />
            </div>
         ))}
      </>
   );
};
