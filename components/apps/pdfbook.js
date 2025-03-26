// import React, { useState, useEffect, useRef } from 'react';
// import dynamic from 'next/dynamic';
// import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';

// // Dynamically import PDF.js with SSR disabled
// const PDFDocument = dynamic(() => import('pdfjs-dist/build/pdf.mjs').then((mod) => {
//   // Ensure worker is configured after dynamic import
//   if (typeof window !== 'undefined') {
//     mod.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${mod.version}/pdf.worker.min.js`;
//   }
//   return mod;
// }), { ssr: false });

// const PDFBookViewer = ({ pdfPath, title }) => {
//   const [pdf, setPdf] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const containerRef = useRef(null);
//   const leftCanvasRef = useRef(null);
//   const rightCanvasRef = useRef(null);

//   // Load PDF
//   useEffect(() => {
//     const loadPdf = async () => {
//       if (typeof window === 'undefined' || !PDFDocument) return;

//       try {
//         setIsLoading(true);
//         const loadingTask = PDFDocument.getDocument(pdfPath);
//         const pdfDocument = await loadingTask.promise;
//         setPdf(pdfDocument);
//         setTotalPages(pdfDocument.numPages);
//         setIsLoading(false);
//       } catch (err) {
//         console.error('Error loading PDF:', err);
//         setError(err);
//         setIsLoading(false);
//       }
//     };

//     // Only run on client side
//     if (typeof window !== 'undefined') {
//       loadPdf();
//     }
//   }, [pdfPath]);

//   // Render pages
//   useEffect(() => {
//     const renderPages = async () => {
//       if (!pdf || typeof window === 'undefined') return;

//       const leftPageNum = currentPage;
//       const rightPageNum = currentPage + 1;

//       try {
//         // Render left page
//         const leftPageContext = leftCanvasRef.current?.getContext('2d');
//         if (leftPageContext) {
//           const leftPage = await pdf.getPage(leftPageNum);
//           const leftViewport = leftPage.getViewport({ scale: 1.5 });
//           leftCanvasRef.current.width = leftViewport.width;
//           leftCanvasRef.current.height = leftViewport.height;
          
//           await leftPage.render({
//             canvasContext: leftPageContext,
//             viewport: leftViewport
//           });
//         }

//         // Render right page
//         const rightPageContext = rightCanvasRef.current?.getContext('2d');
//         if (rightPageContext && rightPageNum <= totalPages) {
//           const rightPage = await pdf.getPage(rightPageNum);
//           const rightViewport = rightPage.getViewport({ scale: 1.5 });
//           rightCanvasRef.current.width = rightViewport.width;
//           rightCanvasRef.current.height = rightViewport.height;
          
//           await rightPage.render({
//             canvasContext: rightPageContext,
//             viewport: rightViewport
//           });
//         }
//       } catch (err) {
//         console.error('Error rendering pages:', err);
//         setError(err);
//       }
//     };

//     if (typeof window !== 'undefined') {
//       renderPages();
//     }
//   }, [pdf, currentPage, totalPages]);

//   // Page navigation
//   const goToPreviousSpread = () => {
//     setCurrentPage(Math.max(1, currentPage - 2));
//   };

//   const goToNextSpread = () => {
//     setCurrentPage(Math.min(totalPages - 1, currentPage + 2));
//   };

//   // Fullscreen toggle
//   const toggleFullscreen = () => {
//     if (!document.fullscreenElement) {
//       if (containerRef.current?.requestFullscreen) {
//         containerRef.current.requestFullscreen();
//         setIsFullscreen(true);
//       }
//     } else {
//       if (document.exitFullscreen) {
//         document.exitFullscreen();
//         setIsFullscreen(false);
//       }
//     }
//   };

//   // Render loading or error states
//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-white"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-900 text-white p-4">
//         <div className="text-center">
//           <h2 className="text-2xl text-red-500 mb-4">PDF Loading Error</h2>
//           <p>{error.message}</p>
//           <a href={pdfPath} className="text-blue-400 hover:underline mt-4 block">
//             Download PDF Directly
//           </a>
//         </div>
//       </div>
//     );
//   }

//   // Main render
//   return (
//     <div 
//       ref={containerRef} 
//       className={`flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-4 transition-all duration-300 ${
//         isFullscreen ? 'fullscreen' : ''
//       }`}
//     >
//       <div className="flex items-center justify-between w-full mb-4">
//         <h1 className="text-2xl font-bold">{title}</h1>
//         <div className="flex items-center space-x-2">
//           <button 
//             onClick={toggleFullscreen} 
//             className="hover:bg-gray-700 p-2 rounded"
//             title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
//           >
//             {isFullscreen ? <Minimize2 /> : <Maximize2 />}
//           </button>
//         </div>
//       </div>

//       <div className="flex items-center justify-center w-full space-x-4">
//         {/* Previous button */}
//         <button 
//           onClick={goToPreviousSpread} 
//           disabled={currentPage <= 1}
//           className="disabled:opacity-50 hover:bg-gray-700 p-2 rounded"
//         >
//           <ChevronLeft size={24} />
//         </button>

//         {/* Book Spread */}
//         <div className="flex shadow-2xl border-2 border-gray-700 rounded-lg overflow-hidden">
//           {/* Left Page */}
//           <canvas 
//             ref={leftCanvasRef} 
//             className="bg-white"
//             style={{ 
//               maxWidth: '50%', 
//               maxHeight: '70vh', 
//               objectFit: 'contain' 
//             }}
//           />
          
//           {/* Right Page */}
//           <canvas 
//             ref={rightCanvasRef} 
//             className="bg-white"
//             style={{ 
//               maxWidth: '50%', 
//               maxHeight: '70vh', 
//               objectFit: 'contain' 
//             }}
//           />
//         </div>

//         {/* Next button */}
//         <button 
//           onClick={goToNextSpread} 
//           disabled={currentPage >= totalPages - 1}
//           className="disabled:opacity-50 hover:bg-gray-700 p-2 rounded"
//         >
//           <ChevronRight size={24} />
//         </button>
//       </div>

//       {/* Page indicator */}
//       <div className="mt-4 text-gray-300">
//         Pages {currentPage} - {Math.min(currentPage + 1, totalPages)} of {totalPages}
//       </div>
//     </div>
//   );
// };

// export default PDFBookViewer;