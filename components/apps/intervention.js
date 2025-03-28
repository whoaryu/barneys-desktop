import React from "react";

const Intervention = () => {
    const bannerSrc = "./images/intervention.jpg"; // Replace with actual image path

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = bannerSrc;
        link.download = "Intervention_Banner.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="w-full h-full flex flex-col bg-gray-900 text-white shadow-2xl rounded-lg border border-gray-700 p-6 space-y-4 items-center justify-center">
            <h1 className="text-3xl font-bold text-red-500 animate-pulse text-center">
                🚨 It's Time for an Intervention! 🚨  
            </h1>
            <p className="text-lg text-gray-300 italic text-center">
                Because sometimes, your friends make <span className="text-red-400 font-bold">really bad life choices</span>...  
                and you need to step in like a <strong>true bro</strong>.  
            </p>
            <img src={bannerSrc} alt="Intervention Banner" className="max-w-full max-h-96 rounded-lg shadow-lg border-4 border-red-500" />
            <button
                onClick={handleDownload}
                className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-all duration-200"
            >
                📥 <strong>Download Now & Intervene Like a Boss</strong>
            </button>
        </div>
    );
    
};

export default Intervention;

export const displayIntervention = () => <Intervention />;
