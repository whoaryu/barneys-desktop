import React, { useState } from "react";
import { motion } from "framer-motion";
import himymEpisodes from "./episodes";

const HIMYMRandomizer = () => {
    const [selectedEpisode, setSelectedEpisode] = useState(null);
    const [animate, setAnimate] = useState(false);

    const getRandomEpisode = () => {
        const randomEp = himymEpisodes[Math.floor(Math.random() * himymEpisodes.length)];
        setAnimate(true);
        setTimeout(() => {
            setSelectedEpisode(randomEp);
            setAnimate(false);
        }, 700);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white p-6 relative overflow-hidden">
            {/* Neon Glow Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-16 left-16 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-16 right-16 w-52 h-52 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl text-center font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-purple-500 z-10 relative drop-shadow-lg"
            >
                HIMYM Episode Randomizer 🎬
            </motion.h1>

            <motion.div 
                className="relative w-[28rem] bg-gray-900/80 rounded-3xl flex flex-col items-center justify-center shadow-2xl border border-yellow-500/30 backdrop-blur-md p-6 z-10 transition-all"
                animate={{ rotateY: animate ? 180 : 0 }}
                transition={{ duration: 0.7 }}
            >
                {selectedEpisode ? (
                    <motion.div 
                        key={selectedEpisode.title}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center space-y-4"
                    >
                        <div className="bg-gray-800/70 rounded-2xl p-5 shadow-md border border-gray-700">
                            <p className="text-2xl font-bold text-yellow-400">📺 {selectedEpisode.title}</p>
                            <p className="text-lg mt-2 text-gray-300">Season {selectedEpisode.season}, Episode {selectedEpisode.episode}</p>
                        </div>
                        <p className="text-sm text-gray-400 italic px-4">{selectedEpisode.description}</p>
                        <p className="text-xl font-bold text-purple-400 flex items-center justify-center space-x-2">
                            <span>⭐</span>
                            <span>IMDb: {selectedEpisode.imdbRating}/10</span>
                        </p>
                    </motion.div>
                ) : (
                    <p className="text-lg text-gray-400 text-center">Click below to find an episode!</p>
                )}
            </motion.div>

            <motion.button 
                whileHover={{ scale: 1.08, boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.7)" }}
                whileTap={{ scale: 0.95 }}
                onClick={getRandomEpisode}
                className="mt-8 px-10 py-4 text-lg font-bold bg-gradient-to-r from-yellow-500 to-purple-500 hover:from-yellow-600 hover:to-purple-600 rounded-full shadow-xl transition-all duration-300 ease-in-out text-gray-900"
            >
                Get Random Episode 🎲
            </motion.button>
        </div>
    );
};

export default HIMYMRandomizer;