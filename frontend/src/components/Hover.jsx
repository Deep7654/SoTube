// "use client";
// import React, { useState, useEffect } from "react";

// // Direction logic and gradients
// const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];

// const movingMap = {
//   TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
//   LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
//   BOTTOM:
//     "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
//   RIGHT:
//     "radial-gradient(16.2% 41.2% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
// };

// const highlight =
//   "radial-gradient(75% 181% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

// export function Hover({
//   children,
//   containerClassName = "",
//   className = "",
//   as: Tag = "button",
//   duration = 1,
//   clockwise = true,
//   ...props
// }) {
//   const [hovered, setHovered] = useState(false);
//   const [direction, setDirection] = useState("TOP");
//   const [bg, setBg] = useState(movingMap["TOP"]);

//   // Rotate direction on interval when not hovered
//   useEffect(() => {
//     if (!hovered) {
//       const interval = setInterval(() => {
//         setDirection((prev) => {
//           const currentIndex = directions.indexOf(prev);
//           const nextIndex = clockwise
//             ? (currentIndex - 1 + directions.length) % directions.length
//             : (currentIndex + 1) % directions.length;
//           const nextDirection = directions[nextIndex];
//           setBg(movingMap[nextDirection]);
//           return nextDirection;
//         });
//       }, duration * 1000);
//       return () => clearInterval(interval);
//     } else {
//       setBg(highlight);
//     }
//   }, [hovered, clockwise, duration]);

//   return React.createElement(
//     Tag,
//     {
//       onMouseEnter: () => setHovered(true),
//       onMouseLeave: () => setHovered(false),
//       style: {
//         position: "relative",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         borderRadius: "9999px",
//         border: "1px solid white",
//         backgroundColor: hovered ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.2)",
//         padding: "1px",
//         overflow: "visible",
//         transition: "background-color 0.5s ease",
//         width: "fit-content",
//         ...props.style,
//       },
//       ...props,
//     },
//     <>
//       {/* Content container */}
//       <div
//         style={{
//           zIndex: 10,
//           background: "black",
//           color: "white",
//           padding: "8px 16px",
//           borderRadius: "inherit",
//           position: "relative",
//           ...className,
//         }}
//       >
//         {children}
//       </div>

//       {/* Background animation layer */}
//       <div
//         style={{
//           background: bg,
//           filter: "blur(2px)",
//           borderRadius: "inherit",
//           position: "absolute",
//           inset: 0,
//           zIndex: 0,
//           transition: `background ${duration}s linear`,
//         }}
//       />

//       {/* Inner black overlay */}
//       <div
//         style={{
//           background: "black",
//           borderRadius: "100px",
//           position: "absolute",
//           inset: "2px",
//           zIndex: -1,
//         }}
//       />
//     </>
//   );
// }
