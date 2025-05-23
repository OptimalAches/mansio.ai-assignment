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
      <div className="w-full h-px bg-[#EEE]" />
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

      {/* Thumbs overlay appears with card 3 */}
      <ThumbsUpOverlay show={showThumbsUp} />
    </div>
  );
}

