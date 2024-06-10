// "use client";

// import { loggedInuser } from "@/features/auth/authSlice";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";

// export default function UseAuthCheck({ children }) {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const token = localStorage.getItem("accessToken");
//       const user = JSON.parse(localStorage.getItem("user"));

//       if (token) {
//         dispatch(
//           loggedInuser({
//             accessToken: token,
//             user,
//           })
//         );
//       }
//     }
//   }, []);

//   return <>{children}</>;
// }
