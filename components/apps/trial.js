import React, { useState, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { 
  ZoomIn, 
  ZoomOut, 
  ChevronLeft, 
  ChevronRight, 
  Book,
  Columns2
} from 'lucide-react';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const BookReader = ({ fileUrl, title }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [isDualPage, setIsDualPage] = useState(false);
  const documentRef = useRef(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const nextPage = () => {
    if (isDualPage) {
      // In dual page mode, move 2 pages at a time
      if (pageNumber + 2 <= numPages) {
        setPageNumber(prevPage => prevPage + 2);
      }
    } else {
      // In single page mode, move 1 page at a time
      if (pageNumber < numPages) {
        setPageNumber(prevPage => prevPage + 1);
      }
    }
  };

  const prevPage = () => {
    if (isDualPage) {
      // In dual page mode, move back 2 pages at a time
      if (pageNumber - 2 >= 1) {
        setPageNumber(prevPage => prevPage - 2);
      } else {
        // If going back would go before the first page, reset to first page
        setPageNumber(1);
      }
    } else {
      // In single page mode, move back 1 page at a time
      if (pageNumber > 1) {
        setPageNumber(prevPage => prevPage - 1);
      }
    }
  };

  const zoomIn = () => {
    setScale(prevScale => Math.min(prevScale + 0.25, 2));
  };

  const zoomOut = () => {
    setScale(prevScale => Math.max(prevScale - 0.25, 0.5));
  };

  const toggleDualPage = () => {
    setIsDualPage(prev => !prev);
  };

  const renderPages = () => {
    if (isDualPage) {
      // Render two pages side by side
      return (
        <div className="flex justify-center items-start space-x-4 w-full">
          {pageNumber <= numPages && (
            <Page 
              pageNumber={pageNumber} 
              scale={scale}
              className="
                shadow-md 
                rounded-lg 
                overflow-hidden
                max-w-[45%]
              "
            />
          )}
          {pageNumber + 1 <= numPages && (
            <Page 
              pageNumber={pageNumber + 1} 
              scale={scale}
              className="
                shadow-md 
                rounded-lg 
                overflow-hidden
                max-w-[45%]
              "
            />
          )}
        </div>
      );
    }
    
    // Single page view
    return (
      <Page 
        pageNumber={pageNumber} 
        scale={scale}
        className="
          shadow-md 
          rounded-lg 
          overflow-hidden
          max-w-full
        "
      />
    );
  };

  return (
    <div 
      ref={documentRef}
      className="
        flex 
        flex-col 
        h-full 
        w-full 
        bg-white 
        rounded-lg 
        overflow-hidden
      "
    >
      {/* Document Viewer with Integrated Controls */}
      <div 
        className="
          flex-grow 
          relative
          overflow-auto 
          bg-gray-50 
          flex 
          justify-center 
          items-center
        "
      >
        {/* Sidebar Controls */}
        <div className="
          absolute 
          left-4 
          top-1/2 
          transform 
          -translate-y-1/2 
          z-10 
          flex 
          flex-col 
          space-y-2
        ">
          <button 
            onClick={zoomOut}
            className="
              p-2 
              bg-white 
              border 
              border-gray-200
              hover:bg-gray-100 
              rounded-full 
              shadow-md
              transition-all
              focus:outline-none
            "
          >
            <ZoomOut className="w-5 h-5 text-gray-600" />
          </button>
          <button 
            onClick={zoomIn}
            className="
              p-2 
              bg-white 
              border 
              border-gray-200
              hover:bg-gray-100 
              rounded-full 
              shadow-md
              transition-all
              focus:outline-none
            "
          >
            <ZoomIn className="w-5 h-5 text-gray-600" />
          </button>
          <button 
            onClick={toggleDualPage}
            className={`
              p-2 
              ${isDualPage ? 'bg-blue-100 border-blue-200' : 'bg-white border-gray-200'}
              border
              hover:bg-gray-100 
              rounded-full 
              shadow-md
              transition-all
              focus:outline-none
            `}
          >
            <Columns2 className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Navigation Controls */}
        <div className="
          absolute 
          right-4 
          top-1/2 
          transform 
          -translate-y-1/2 
          z-10 
          flex 
          flex-col 
          space-y-2
        ">
          <button 
            onClick={prevPage} 
            disabled={pageNumber <= 1}
            className="
              p-2 
              bg-white 
              border 
              border-gray-200
              hover:bg-gray-100 
              rounded-full 
              disabled:opacity-50 
              disabled:cursor-not-allowed 
              shadow-md
              transition-all
              focus:outline-none
            "
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button 
            onClick={nextPage} 
            disabled={isDualPage ? pageNumber + 1 >= numPages : pageNumber >= numPages}
            className="
              p-2 
              bg-white 
              border 
              border-gray-200
              hover:bg-gray-100 
              rounded-full 
              disabled:opacity-50 
              disabled:cursor-not-allowed 
              shadow-md
              transition-all
              focus:outline-none
            "
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Page Display */}
        <div className="
          absolute 
          bottom-4 
          left-1/2 
          transform 
          -translate-x-1/2 
          z-10 
          bg-white 
          border 
          border-gray-200 
          rounded-full 
          px-4 
          py-2 
          shadow-md
          text-sm 
          text-gray-600
        ">
          {isDualPage 
            ? `Pages ${pageNumber}-${Math.min(pageNumber + 1, numPages)} of ${numPages}` 
            : `Page ${pageNumber} of ${numPages}`
          }
        </div>

        {/* Document Rendering */}
        <Document 
          file={fileUrl} 
          onLoadSuccess={onDocumentLoadSuccess}
          className="
            flex 
            justify-center 
            items-center 
            w-full 
            h-full
            p-4
          "
        >
          {renderPages()}
        </Document>
      </div>

      {/* Optional Title Header */}
      <div className="
        p-4 
        bg-gray-50 
        border-b 
        border-gray-200 
        flex 
        items-center 
        space-x-2
      ">
        <Book className="w-6 h-6 text-gray-700" />
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default BookReader;