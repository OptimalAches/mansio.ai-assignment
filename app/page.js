// "use client"
// import { useState } from "react";
// import { propertyCards } from "../data/propertyCards";
// import PropertyCard from "../components/PropertyCard";
// import Navbar from "../components/Navbar";
// import ThumbsUpOverlay from "../components/ThumbsUpOverlay";
// import { motion, AnimatePresence } from "framer-motion";
// import { ThumbsDown, Undo2, ThumbsUp } from "lucide-react";

// export default function Home() {
//   const [cardIndex, setCardIndex] = useState(0);
//   const [showThumbsUp, setShowThumbsUp] = useState(false);

//   const handleSwipe = () => {
//     if (cardIndex === 1) {
//       // On swipe from second to third card, show thumbs up
//       setShowThumbsUp(true);
//       setTimeout(() => {
//         setShowThumbsUp(false);
//         setCardIndex(cardIndex + 1);
//       }, 1500); // 1.5 seconds
//     } else if (cardIndex < propertyCards.length - 1) {
//       setCardIndex(cardIndex + 1);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-orange-50">
//       <Navbar />
//       <div className="flex flex-col items-center justify-center mt-8">
//         <div className="relative w-full max-w-3xl h-[520px]">
//           <AnimatePresence>
//             {propertyCards.slice(cardIndex, cardIndex + 1).map((card, idx) => (
//               <motion.div
//                 key={card.bhk}
//                 className="absolute inset-0"
//                 initial={{ x: 300, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: -300, opacity: 0 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                 drag="x"
//                 dragConstraints={{ left: 0, right: 0 }}
//                 onDragEnd={(event, info) => {
//                   if (Math.abs(info.offset.x) > 100) handleSwipe();
//                 }}
//               >
//                 <PropertyCard data={card} />
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>
//         {/* Action Row */}
//         {/* <div className="flex gap-14 mt-[-34px] mb-4 z-30 justify-center w-full">
//           <button className="bg-white shadow-xl rounded-full w-16 h-16 flex items-center justify-center text-gray-400 hover:text-red-400 text-3xl border border-gray-200">
//             <ThumbsDown size={36} />
//           </button>
//           <button className="bg-white shadow-xl rounded-full w-16 h-16 flex items-center justify-center text-gray-400 text-3xl border border-gray-200">
//             <Undo2 size={34} />
//           </button>
//           <button
//             className="bg-[#FF7900] shadow-xl rounded-full w-16 h-16 flex items-center justify-center text-white text-3xl border border-[#FF7900]"
//             onClick={handleSwipe}
//           >
//             <ThumbsUp size={36} />
//           </button>
//         </div> */}
//         <div className="flex gap-14 mt-[-34px] mb-4 z-30 justify-center w-full">
//           <button className="bg-black shadow-xl rounded-full w-16 h-16 flex items-center justify-center text-white text-3xl border border-gray-300">
//             {/* Filled thumbs down icon (SVG for filled) */}
//             <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M10 22a1 1 0 0 1-1-1v-7.382l-.553.553a4 4 0 0 1-5.657-5.657l6.413-6.413A4.978 4.978 0 0 1 15.58 2.712l4.684 4.684A4.978 4.978 0 0 1 21 12.415V13a4 4 0 0 1-4 4h-3.382l-.553.553a4 4 0 0 1-5.657 0l-.553-.553V21a1 1 0 0 1-1 1z" /></svg>
//           </button>
//           <button className="bg-white shadow-xl rounded-full w-16 h-16 flex items-center justify-center text-gray-400 text-3xl border border-gray-300">
//             <Undo2 size={34} />
//           </button>
//           <button className="bg-[#FF7900] shadow-xl rounded-full w-16 h-16 flex items-center justify-center text-white text-3xl border border-[#FF7900]">
//             {/* Filled thumbs up icon */}
//             <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M9 22a1 1 0 0 1-1-1v-7.382l-.553.553a4 4 0 0 1-5.657-5.657l6.413-6.413A4.978 4.978 0 0 1 14.58 2.712l4.684 4.684A4.978 4.978 0 0 1 20 12.415V13a4 4 0 0 1-4 4h-3.382l-.553.553a4 4 0 0 1-5.657 0l-.553-.553V21a1 1 0 0 1-1 1z" /></svg>
//           </button>
//         </div>

//       </div>
//       <ThumbsUpOverlay show={showThumbsUp} />
//     </div>
//   );
// }

"use client";
import Navbar from "@/components/Navbar";
import PropertyCard from "@/components/PropertyCard";
import ThumbsUpOverlay from "@/components/ThumbsUpOverlay";
import { propertyCards } from "@/data/propertyCards";
import { ThumbsDown, Undo2, ThumbsUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [cardIndex, setCardIndex] = useState(0);
  const [showThumbsUp, setShowThumbsUp] = useState(false);

  // Only allow two swipes (to show 3 cards)
  function handleDragEnd(_, info) {
    if (Math.abs(info.offset.x) > 80 && cardIndex < 2) {
      const newIndex = cardIndex + 1;
      setCardIndex(newIndex);
      // If we're moving to card 3 (index 2), show the overlay
      if (newIndex === 2) {
        setShowThumbsUp(true);
        setTimeout(() => setShowThumbsUp(false), 1500);
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF7F3] flex flex-col items-center overflow-hidden">
      <Navbar />
      <div className="h-8" />

      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <AnimatePresence initial={false}>
          <motion.div
            key={cardIndex}
            drag={cardIndex < 2 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex flex-col items-center w-full"
            style={{ touchAction: "pan-y" }}
          >
            <PropertyCard data={propertyCards[cardIndex]} />

            {/* Button row, NO ACTIONS */}
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

      {/* Thumbs overlay appears with card 3 */}
      <ThumbsUpOverlay show={showThumbsUp} />
    </div>
  );
}


