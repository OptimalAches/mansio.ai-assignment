"use client"
import { ThumbsUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThumbsUpOverlay({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-orange-100 bg-opacity-70 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="flex items-center justify-center rounded-full bg-orange-500"
            initial={{ scale: 0.7, opacity: 0.8, boxShadow: "0 0 0 0 #f97316" }}
            animate={{
              scale: [0.7, 1.1, 1],
              boxShadow: [
                "0 0 0 0 #fbbf24",
                "0 0 80px 40px #fbbf24AA",
                "0 0 0 0 #fbbf24",
              ],
              opacity: 1,
            }}
            transition={{ duration: 1 }}
            style={{ width: 180, height: 180 }}
          >
            <ThumbsUp className="text-white" size={80} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
