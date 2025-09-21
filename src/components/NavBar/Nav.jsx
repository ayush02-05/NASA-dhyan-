import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../public/galaxy.png";

const Nav = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");
  const navigate = useNavigate();

  const ChevronDownIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );

  const ChevronUpIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  );

  const handleDropdownToggle = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="absolute top-0 w-380 z-50 h-17 text-white flex items-center px-8 py-4 justify-between shadow-xl bg-gradient-to-br backdrop-blur-sm border-b-zinc-700 border-b-1 font-[font1] text-lg tracking-wide">
      {/* Explore */}
      <button
        onClick={() => handleDropdownToggle("explore")}
        className="flex items-center space-x-2 font-bold text-lg"
      >
        <span>Explore</span>
        {openDropdown === "explore" ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>

      {/* LOGO */}
      <div id="logo" className="w-10 text-white">
        <img src={logo} alt="" />
      </div>

      <div className="flex gap-10">
        {/* News & Event */}
        <button
          onClick={() => handleDropdownToggle("explore")}
          className="flex items-center space-x-2 font-bold text-lg"
        >
          <span>News & Event</span>
          {openDropdown === "explore" ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
        {/* Login */}
        <button
          className="border-1 border-white px-4 py-1 rounded-lg hover:bg-red-800"
          onClick={() => Navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Nav;

// import React, { useState } from "react";

// // Chevron Icons
// const ChevronDownIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//     className="w-4 h-4"
//   >
//     <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
//   </svg>
// );

// const ChevronUpIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//     className="w-4 h-4"
//   >
//     <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
//   </svg>
// );

// export default function Navbar() {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [activeTab, setActiveTab] = useState("Overview");

//   const handleDropdownToggle = (menu) => {
//     setOpenDropdown(openDropdown === menu ? null : menu);
//   };

//   return (
//     <div className="overflow-x-hidden">
//       {/* Navbar */}
//       <header className="font-sans w-screen fixed top-0 left-0 z-50">
//         {/* Top Navigation Bar */}
//         <nav className="bg-black text-white flex items-center justify-between px-6 py-2 relative">
//           {/* Left Section */}
//           <div className="flex items-center space-x-6">
//             <button
//               onClick={() => handleDropdownToggle("explore")}
//               className="flex items-center space-x-2 font-bold text-lg"
//             >
//               <span>Explore</span>
//               {openDropdown === "explore" ? <ChevronUpIcon /> : <ChevronDownIcon />}
//             </button>
//             <div className="relative">
//               <input
//                 type="search"
//                 placeholder="Search"
//                 className="bg-gray-800 border border-gray-600 rounded-md px-3 py-1 w-64 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           {/* Center Section - NASA Logo */}
//           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
//             <a href="#">
//               <img
//                 src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg"
//                 alt="NASA Logo"
//                 className="h-14"
//               />
//             </a>
//           </div>

//           {/* Right Section */}
//           <div className="flex items-center">
//             <ul className="flex items-center space-x-8 text-sm font-semibold">
//               {["News & Events", "Multimedia"].map((menu) => (
//                 <li key={menu}>
//                   <button
//                     onClick={() => handleDropdownToggle(menu)}
//                     className="flex items-center space-x-1 hover:text-gray-300"
//                   >
//                     <span>{menu}</span>
//                     {openDropdown === menu ? <ChevronUpIcon /> : <ChevronDownIcon />}
//                   </button>
//                 </li>
//               ))}
//               <li>
//                 <a href="#" className="flex items-center space-x-1 hover:text-gray-300">
//                   <span>NASA+</span>
//                   <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-sm ml-2">
//                     LIVE
//                   </span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </nav>

//         {/* Bottom Navigation Bar */}
//         <nav className="bg-[#1e1e1e] text-gray-300 flex justify-center">
//           <ul className="flex items-center space-x-10 text-sm font-semibold">
//             {["Overview", "Goals", "Programs", "Resources", "Data"].map((tab) => (
//               <li
//                 key={tab}
//                 className={`${
//                   activeTab === tab ? "text-blue-500 border-t-4 border-blue-500" : ""
//                 }`}
//               >
//                 <button
//                   onClick={() => setActiveTab(tab)}
//                   className="flex items-center space-x-1 py-3 hover:text-white"
//                 >
//                   <span>{tab}</span>
//                   {activeTab === tab ? <ChevronUpIcon /> : <ChevronDownIcon />}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </header>

//       {/* Page Content (padding added so it doesn’t overlap navbar) */}
//       <main className="pt-[120px] bg-gray-900 text-white min-h-screen">
//         <section className="p-10">
//           <h1 className="text-4xl font-bold">Welcome to NASA Clone 🚀</h1>
//           <p className="mt-4 text-gray-300">
//             This is your page content. Scroll vertically but not horizontally.
//           </p>
//         </section>
//       </main>
//     </div>
//   );
// }
