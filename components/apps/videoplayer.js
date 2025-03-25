import React, { useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand } from "react-icons/fa";

const VideoPlayer = ({ videoSrc, title }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const togglePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const toggleMute = () => {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };

    const goFullscreen = () => {
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        }
    };

    return (
        <div className="w-full h-full flex flex-col bg-gradient-to-br from-gray-900 to-black text-white shadow-2xl rounded-lg border border-gray-700">
            {/* Ubuntu Window Header */}
           

            {/* Video Player */}
            <div className="flex-grow flex justify-center items-center p-4">
                <video ref={videoRef} className="rounded-xl shadow-lg border border-gray-600 w-4/5" controls>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Custom Controls */}
            <div className="flex items-center justify-center space-x-4 bg-gray-800 p-3 border-t border-gray-700">
                <button onClick={togglePlay} className="text-white text-2xl hover:text-blue-400 transition-all">
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <button onClick={toggleMute} className="text-white text-2xl hover:text-blue-400 transition-all">
                    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>
                <button onClick={goFullscreen} className="text-white text-2xl hover:text-blue-400 transition-all">
                    <FaExpand />
                </button>
            </div>
        </div>
    );
};

export default VideoPlayer;

// Functions to display specific videos
export const displayResumeVideo = () => <VideoPlayer videoSrc="./videos/barneyresume.mp4" title="My LEGENDARY RESUME" />;
export const displaySuitVideo = () => <VideoPlayer videoSrc="./videos/nothingsuits.mp4" title="Nothing Suits Me Like A Suit" />;
