import React from "react";

const ImageViewer = ({ imageSrc, title }) => {
    return (
        <div className="w-full h-full flex flex-col bg-gray-900 text-white shadow-2xl rounded-lg border border-gray-700">
        

            {/* Image Display */}
            <div className="flex-grow flex justify-center items-center p-4">
                <img src={imageSrc} alt={title} className="max-w-full max-h-full rounded-lg shadow-lg" />
            </div>
        </div>
    );
};

export default ImageViewer;

export const displayRobinPage = () => <ImageViewer imageSrc="./images/robin-page.jpg" title="The Robin Page" />;
export const displayHotCrazyChart = () => <ImageViewer imageSrc="./images/hot-crazy-chart.png" title="Hot Crazy Chart" />;
