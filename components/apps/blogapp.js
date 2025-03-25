import React from "react";

const BlogApp = () => {
    return (
        <div className="w-full h-full flex flex-col bg-gradient-to-br from-gray-900 to-black text-white shadow-2xl rounded-lg border border-gray-700">
            {/* Blog Content in iFrame */}
            <div className="flex-grow">
                <iframe
                    src="https://barneystinsonblog.com/"
                    className="w-full h-full border-none rounded-b-lg"
                ></iframe>
            </div>
        </div>
    );
};

export default BlogApp;

export const displayBlogApp = () => {
    return <BlogApp />;
};
