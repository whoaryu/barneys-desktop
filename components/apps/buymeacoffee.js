import React, { useEffect } from "react";

const Coffee = () => {
    useEffect(() => {
        window.open("https://buymeacoffee.com/whoaryu", "_blank");
    }, []);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white shadow-2xl rounded-lg border border-gray-700 p-8 space-y-4">
            <img src="./images/buymeacoffee.png" alt="Buy Me a Coffee" className="w-16 h-16 animate-bounce" />
            <p className="text-center text-lg font-semibold tracking-wide">
                Redirecting you to <span className="text-yellow-400">Buy a Coffee for Swarley...</span>
            </p>
            <div className="h-1 w-24 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>
    );
    
};

export default Coffee;

export const displayCoffee = () => {
    return <Coffee />;
};
