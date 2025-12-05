import React from 'react';
import { motion } from 'framer-motion';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-hazel-100 to-hazel-200 p-4 md:p-8">
      {/* Background music player */}
      <MusicPlayer />

      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-hazel-300/20"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 24 + 12}px`,
            }}
            animate={{
              y: [0, -150],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              delay: Math.random() * 7,
            }}
          >
            {['✨', '🌟', '💫', '⭐'][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Header with heart */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-hazel-600"
            >
              ❤️
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-handwriting text-hazel-800">
              To Hazel
            </h1>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="text-hazel-600"
            >
              ❤️
            </motion.div>
          </div>
          <p className="text-hazel-600 font-sans">
            A letter • 547 days later
          </p>
          <p className="text-hazel-500 text-sm mt-1 font-handwriting">
            "Those eyes... I get lost every time"
          </p>
        </motion.header>

        {/* Main Letter Container */}
        <motion.main
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="letter-paper"
        >
          {/* Letter Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg font-sans leading-relaxed"
            >
              <p className="mb-4">
                Dear Hazel,
              </p>
              
              <p className="mb-4">
                Sorry for that day. What I did was wrong—I was too nervous and didn't know how to handle the situation. I just said what I was thinking in the moment, but please forget that day.
              </p>
              
              <p className="mb-4">
                Seriously, I have had a crush on you since last year, from the first day I saw you. I remember feeling like I jumped into another universe.
              </p>
              
              <p className="mb-4">
                I will always stay honest with you and never betray you. I will try my best to make you happy.
              </p>
              
              <p className="mb-4">
                Thanks if you are reading this letter.
              </p>
            </motion.div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pt-6 mt-6 border-t border-hazel-300/50"
            >
              <div className="flex flex-col items-end">
                <div className="font-handwriting text-2xl text-hazel-800 mb-1">
                  Danish
                </div>
                <div className="text-hazel-600 text-sm">
                  December 3, 2025
                </div>
                <div className="text-hazel-500 text-xs mt-2">
                  547 days of feelings finally spoken
                </div>
              </div>
            </motion.div>
          </div>

          {/* Heart seal */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="absolute -top-4 -right-4"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-hazel-400 to-hazel-600 rounded-full flex items-center justify-center shadow-md">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-white text-lg"
                >
                  ❤️
                </motion.div>
              </div>
              <div className="absolute inset-0 border-2 border-hazel-300 rounded-full animate-ping opacity-30"></div>
            </div>
          </motion.div>
        </motion.main>

        {/* Music credit */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-8 pt-4 border-t border-hazel-300/30"
        >
          <p className="text-hazel-600 text-sm">
            This message is meant for Hazel's eyes only
          </p>
          <p className="text-hazel-500 text-xs mt-1">
            Background: "Those Eyes" by New West • Created with honesty • {new Date().getFullYear()}
          </p>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;
