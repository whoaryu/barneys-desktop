import React from "react";

const SlapBet = () => {
    return (
        <div className="w-full h-full flex flex-col bg-gradient-to-br from-gray-900 to-black text-white shadow-2xl rounded-lg border border-gray-700">
            {/* Ubuntu Window Header */}
            <div className="flex items-center justify-between w-full bg-gray-800 px-4 py-2 border-b border-gray-700">
                
                <div className="w-6"></div> {/* Spacer */}
            </div>

            {/* Blog Content in iFrame */}
            <div className="flex-grow">
                <iframe
                    src="https://www.kevinsworkbench.com/slapcountdown/index.html"
                    className="w-full h-full border-none rounded-b-lg"
                ></iframe>
            </div>
        </div>
    );
};

export default SlapBet;

export const displaySlapBet = () => {
    return <SlapBet />;
};
