"use client"
import { useState } from "react";
import { propertyCards } from "../data/propertyCards";
import PropertyCard from "../components/PropertyCard";
import Navbar from "../components/Navbar";
import ThumbsUpOverlay from "../components/ThumbsUpOverlay";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [cardIndex, setCardIndex] = useState(0);
  const [showThumbsUp, setShowThumbsUp] = useState(false);

  const handleSwipe = () => {
    if (cardIndex === 1) {
      // On swipe from second to third card, show thumbs up
      setShowThumbsUp(true);
      setTimeout(() => {
        setShowThumbsUp(false);
        setCardIndex(cardIndex + 1);
      }, 1500); // 1.5 seconds
    } else if (cardIndex < propertyCards.length - 1) {
      setCardIndex(cardIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="relative w-full max-w-3xl h-[520px]">
          <AnimatePresence>
            {propertyCards.slice(cardIndex, cardIndex + 1).map((card, idx) => (
              <motion.div
                key={card.bhk}
                className="absolute inset-0"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(event, info) => {
                  if (Math.abs(info.offset.x) > 100) handleSwipe();
                }}
              >
                <PropertyCard data={card} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {/* Action Row */}
        <div className="flex gap-8 mt-10">
          <button className="bg-white shadow-lg rounded-full w-16 h-16 flex items-center justify-center text-gray-500 text-3xl">
            {/* Dislike */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2v6m0-6V4m0 8h.01" />
            </svg>
          </button>
          <button className="bg-white shadow-lg rounded-full w-16 h-16 flex items-center justify-center text-gray-500 text-3xl">
            {/* Undo */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l-2-2m0 0l2-2m-2 2h7a4 4 0 100-8h-1" />
            </svg>
          </button>
          <button
            className="bg-orange-500 shadow-lg rounded-full w-16 h-16 flex items-center justify-center text-white text-3xl"
            onClick={handleSwipe}
          >
            {/* Thumbs Up */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 9V5a3 3 0 00-3-3m6 3a2 2 0 012 2v4a2 2 0 01-2 2m-2 6v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-5a2 2 0 012-2h2.586a1 1 0 01.707.293l5.414 5.414a1 1 0 010 1.414z" />
            </svg>
          </button>
        </div>
      </div>
      <ThumbsUpOverlay show={showThumbsUp} />
    </div>
  );
}
