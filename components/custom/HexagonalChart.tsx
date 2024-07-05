// // HexagonalChart.js
// import React, { useEffect, useRef } from 'react';
// import { FaSearch, FaUsers, FaBook, FaChartBar, FaFlag, FaLightbulb } from 'react-icons/fa';

// const HexagonalChart = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (!containerRef.current) return;
//     const paths = containerRef.current.querySelectorAll('path');
//     paths.forEach((path) => {
//       const length = path.getTotalLength();
//       path.style.strokeDasharray = length;
//       path.style.strokeDashoffset = length;
//       path.getBoundingClientRect(); // Trigger layout to enable animation
//       path.style.transition = 'stroke-dashoffset 2s ease-in-out';
//       path.style.strokeDashoffset = '0';
//     });
//   }, []);

//   return (
//     <div className="container" ref={containerRef}>
//       <svg className="hexagon-lines" viewBox="0 0 300 300">
//         <path d="M150 100 L90 150" />
//         <path d="M150 100 L210 150" />
//         <path d="M90 150 L90 250" />
//         <path d="M210 150 L210 250" />
//         <path d="M90 250 L150 300" />
//         <path d="M210 250 L150 300" />
//       </svg>
//       <div className="hexagon">
//         <div className="center">
//           <div className="icon">
//             <FaLightbulb />
//           </div>
//           <div className="label">INFOGRAPHICS ELEMENTS</div>
//         </div>
//         <div className="circle" style={{ '--i': 0 }}>
//           <div className="icon">
//             <FaSearch />
//           </div>
//         </div>
//         <div className="circle" style={{ '--i': 1 }}>
//           <div className="icon">
//             <FaUsers />
//           </div>
//         </div>
//         <div className="circle" style={{ '--i': 2 }}>
//           <div className="icon">
//             <FaBook />
//           </div>
//         </div>
//         <div className="circle" style={{ '--i': 3 }}>
//           <div className="icon">
//             <FaChartBar />
//           </div>
//         </div>
//         <div className="circle" style={{ '--i': 4 }}>
//           <div className="icon">
//             <FaFlag />
//           </div>
//         </div>
//         <div className="circle" style={{ '--i': 5 }}>
//           <div className="icon">
//             <FaChartBar />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HexagonalChart;

export default function abc() {
  return <div></div>
}