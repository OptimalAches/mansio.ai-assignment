// "use client";
// import Navbar from "@/components/Navbar";
// import PropertyCard from "@/components/PropertyCard";
// import ThumbsUpOverlay from "@/components/ThumbsUpOverlay";
// import { propertyCards } from "@/data/propertyCards";
// import { ThumbsDown, Undo2, ThumbsUp } from "lucide-react";
// import { useState } from "react";
// import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

// export default function Home() {
//   const [cardIndex, setCardIndex] = useState(0);
//   const [showThumbsUp, setShowThumbsUp] = useState(false);
//   const x = useMotionValue(0);
//   const rotate = useTransform(x, [-300, 0, 300], [-18, 0, 18]); 


//   // Only allow two swipes (to show 3 cards)
//   function handleDragEnd(_, info) {
//     if (Math.abs(info.offset.x) > 80 && cardIndex < 2) {
//       const newIndex = cardIndex + 1;
//       setCardIndex(newIndex);
//       // If we're moving to card 3 (index 2), show the overlay
//       if (newIndex === 2) {
//         setShowThumbsUp(true);
//         setTimeout(() => setShowThumbsUp(false), 1500);
//       }
//     }
//   }

//   return (
//     <div className="min-h-screen bg-[#FFF7F3] flex flex-col items-center overflow-hidden">
//       <Navbar />
//       <div className="w-full h-px bg-[#EEE]" />
//       <div className="h-8" />

//       <div className="flex-1 flex flex-col items-center justify-center w-full">
//         <AnimatePresence initial={false}>
//           <motion.div
//             key={cardIndex}
//             drag={cardIndex < 2 ? "x" : false}
//             dragConstraints={{ left: 0, right: 0 }}
//             onDragEnd={handleDragEnd}
//             initial={{ opacity: 0, rotate: 0 }}
//             animate={{ opacity: 1, rotate: 0 }}
//             exit={{ opacity: 0, rotate: 0 }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             className="flex flex-col items-center w-full"
//             style={{ x, rotate, touchAction: "pan-y" }}
//           >
//             <PropertyCard data={propertyCards[cardIndex]} />

//             {/* Button row */}
//             <div className="flex gap-14 mt-[-34px] mb-8 z-30 justify-center w-full pointer-events-none select-none">
//               <button className="bg-black shadow-xl rounded-full w-16 h-16 flex items-center justify-center text-white text-3xl border border-gray-300" tabIndex={-1}>
//                 <ThumbsDown size={36} fill="white" stroke="white" />
//               </button>
//               <button className="bg-white shadow-xl rounded-full w-16 h-16 flex items-center justify-center text-gray-400 text-3xl border border-gray-300" tabIndex={-1}>
//                 <Undo2 size={34} />
//               </button>
//               <button className="bg-[#FF7900] shadow-xl rounded-full w-16 h-16 flex items-center justify-center text-white text-3xl border border-[#FF7900]" tabIndex={-1}>
//                 <ThumbsUp size={36} fill="white" stroke="white" />
//               </button>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Thumbs overlay appears with card 3 */}
//       <ThumbsUpOverlay show={showThumbsUp} />
//     </div>
//   );
// }

"use client";
import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import PropertyCard from "@/components/PropertyCard";
import ThumbsUpOverlay from "@/components/ThumbsUpOverlay";
import { propertyCards } from "@/data/propertyCards";
import { ThumbsDown, Undo2, ThumbsUp } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

export default function Home() {
  const [cardIndex, setCardIndex] = useState(0);
  const [showThumbsUp, setShowThumbsUp] = useState(false);
  const [exiting, setExiting] = useState(false); // trigger card exit
  const [exitDir, setExitDir] = useState(null); // "left" or "right" or null

  // For tilt effect
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 0, 300], [-18, 0, 18]);

  // Card swipe (tilt and fly out, then increment index)
  function handleDragEnd(_, info) {
    if (Math.abs(info.offset.x) > 80 && cardIndex < 2 && !exiting) {
      setExitDir(info.offset.x < 0 ? "left" : "right");
      setExiting(true);
    }
  }

  // After exit animation, increment index and reset state
  function handleExitComplete() {
    if (exiting) {
      const newIndex = cardIndex + 1;
      setCardIndex(newIndex);
      setExitDir(null);
      setExiting(false);
      if (newIndex === 2) {
        setShowThumbsUp(true);
        setTimeout(() => setShowThumbsUp(false), 1500);
      }
    }
  }

  // Exit animation values
  const exitX = exitDir === "left" ? -600 : exitDir === "right" ? 600 : 0;
  const exitRotate = exitDir === "left" ? -30 : exitDir === "right" ? 30 : 0;

  // Reset motion value when card changes
  useEffect(() => {
    x.set(0);
  }, [cardIndex, x]);

  return (
    <div className="min-h-screen bg-[#FFF7F3] flex flex-col items-center overflow-hidden">
      <Navbar />
      <div className="h-8" />

      {/* Card area */}
      <div className="flex-1 flex flex-col items-center justify-center w-full relative" style={{ minHeight: 430 }}>
        <AnimatePresence initial={false} onExitComplete={handleExitComplete}>
          <motion.div
            key={cardIndex + (exiting ? "-exit" : "")} // force remount on exit
            drag={cardIndex < 2 && !exiting ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, rotate: 0, x: 0 }}
            animate={{ opacity: 1, rotate: 0, x: 0 }}
            exit={{
              opacity: 0,
              x: exitX,
              rotate: exitRotate,
              transition: { duration: 0.33, ease: "easeIn" }
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex flex-col items-center w-full absolute left-0 top-0"
            style={{ x: exiting ? undefined : x, rotate: exiting ? undefined : rotate, touchAction: "pan-y" }}
          >
            <PropertyCard data={propertyCards[cardIndex]} />
            {/* Button row */}
            <div className="flex gap-14 mt-[-34px] mb-8 z-30 justify-center w-full pointer-events-none select-none">
              <button className="bg-black shadow-xl rounded-full w-16 h-16 flex items-center justify-center text-white text-3xl border border-gray-300" tabIndex={-1}>
                <ThumbsDown size={36} fill="white" stroke="white" />
              </button>
              <button className="bg-white shadow-xl rounded-full w-16 h-16 flex items-center justify-center text-gray-400 text-3xl border border-gray-300" tabIndex={-1}>
                <Undo2 size={34} />
              </button>
              <button className="bg-[#FF7900] shadow-xl rounded-full w-16 h-16 flex items-center justify-center text-white text-3xl border border-[#FF7900]" tabIndex={-1}>
                <ThumbsUp size={36} fill="white" stroke="white" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Thumbs overlay for third card */}
      <ThumbsUpOverlay show={showThumbsUp} />
    </div>
  );
}

