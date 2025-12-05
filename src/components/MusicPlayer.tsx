import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      if (isPlaying) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, volume]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <>
      {/* Hidden audio element with "Those Eyes" by New West */}
      <audio
        ref={audioRef}
        loop
        autoPlay
        src="https://audio.jukehost.co.uk/6o0FIVm4h2L8Qd93cfM9hKQf7L6v68o6"
      >
        <source src="https://audio.jukehost.co.uk/6o0FIVm4h2L8Qd93cfM9hKQf7L6v68o6" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music player UI */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="music-player fixed bottom-6 right-6 rounded-full p-3 shadow-lg z-50"
      >
        <div className="flex items-center gap-3">
          {/* Song info */}
          <div className="hidden sm:block">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-hazel-600 fill-hazel-600" />
              <div className="text-sm">
                <p className="font-medium text-hazel-800">Those Eyes</p>
                <p className="text-xs text-hazel-600">New West</p>
              </div>
            </div>
          </div>

          {/* Play/Pause button */}
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-hazel-500 hover:bg-hazel-600 flex items-center justify-center transition-colors"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white" />
            )}
          </button>

          {/* Volume control */}
          <div className="hidden md:flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-hazel-600" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-20 accent-hazel-500"
              aria-label="Volume control"
            />
          </div>
        </div>
      </motion.div>

      {/* Floating lyrics in background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[
          "Those eyes...",
          "I get lost...",
          "In your eyes...",
          "Every time...",
          "I see you..."
        ].map((lyric, i) => (
          <motion.div
            key={i}
            className="absolute text-hazel-300/30 font-handwriting"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 16 + 12}px`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          >
            {lyric}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default MusicPlayer;
