// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import DesktopMenu from "./DesktopMenu";
// import "./Header.css";
// import MobileMenu from "./MobileMenu";
// import Logo from "../logo/Logo";
// import UserPersonalInfo from "./UserPersonalInfo";
// import Language from "../Language/Language";


// function Header() {
//   const [activeMobileMenu, setActiveMobileMenu] = useState(false);
//   return (
//     <div className="header">
//       <div className="customContainer  mx-auto">
//         <div className="flex relative justify-between items-center">
//           <div className="py-2">
//             <Link href="/">
//               <Logo />
//             </Link>
//           </div>
//           {/* Desktop Menu  */}
//             <div className="desktopMenu"><DesktopMenu /></div>
//           {/* Desktop Menu  */}

//           {/* Mobile Menu  */}
//             <div className={!activeMobileMenu ? "mobileMenuActive" : "mobileMenu"}><MobileMenu activeMobileMenu={activeMobileMenu} /></div>
//           {/* Mobile Menu  */}

//           <div className="flex items-center gap-4 px-5">
//             {/* Personal information  */}
//             <UserPersonalInfo/>
            
//             {/* Personal information  */}
//             {/* harbuger Menu  */}
//             <div className="hamburger">
//               {activeMobileMenu ? (
//                 <i
//                   className="fa-solid fa-xmark text-[#008080]"
//                   style={{ fontSize: "20px" }}
//                   onClick={() => setActiveMobileMenu(!activeMobileMenu)}
//                 ></i>
//               ) : (
//                 <i
//                   className="fa-solid fa-bars text-[#008080]"
//                   style={{ fontSize: "20px" }}
//                   onClick={() => setActiveMobileMenu(!activeMobileMenu)}
//                 ></i>
//               )}
//             </div>
//             <Language/>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;
