import React from "react";

const TedsHome = () => {
    return (
        <div className="w-full h-full flex flex-col bg-gradient-to-br from-gray-900 to-black text-white shadow-2xl rounded-lg border border-gray-700">
            {/* Blog Content in iFrame */}
            <div className="flex-grow">
                <iframe
                    src="https://gallery.roomsketcher.com/360/?gid=22396042&l=en&play=0&logo=0&title=0&toolbar=0"
                    className="w-full h-full border-none rounded-b-lg"
                ></iframe>
            </div>
        </div>
    );
};

export default TedsHome;

export const displayTedsHome = () => {
    return <TedsHome />;
};
