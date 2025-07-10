import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../components/ui/navigation-menu"; // path as per your project
import { NavLink } from "react-router-dom";

export default function Header() {
  const rediss = true;
  return (
    <div className="flex justify-center p-3 bg-amber-300">
    <NavigationMenu className="">
      <NavigationMenuList>
        <NavigationMenuItem>
          {/* <NavigationMenuLink asChild> */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded ${
                  isActive && rediss ? "text-red-600" : "text-blue-700"
                }`
              }
            >
              Home
            </NavLink>
          {/* </NavigationMenuLink> */}
        </NavigationMenuItem>

        <NavigationMenuItem>
          {/* <NavigationMenuLink asChild> */}
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `bg-amber-300 px-4 py-2 rounded ${
                  isActive ? "text-red-600" : "text-blue-700"
                }`
              }
            >
              Login
            </NavLink>
          {/* </NavigationMenuLink> */}
        </NavigationMenuItem>

        <NavigationMenuItem>
          {/* <NavigationMenuLink asChild> */}
            <NavLink
  to="/register"
  end
  className={({ isActive }) => 
  `px-4 py-2 ${isActive ? "text-red-600" : "text-blue-700"}`
  }
>
  Register
</NavLink>
          {/* </NavigationMenuLink> */}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
</div>
  );
}
// import React from 'react'
// import {
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenu,
//   NavigationMenuList
// } from "../components/ui/navigation-menu"
// import { NavLink , Link } from 'react-router-dom'

// export default function Header() {
//   return (
//     <>

//  <NavigationMenu>
//       <NavigationMenuList>
//         <NavigationMenuItem>
//           <NavigationMenuLink asChild>
//             <NavLink to="">Home</NavLink>
//           </NavigationMenuLink>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//       <NavigationMenuList>
//         <NavigationMenuItem>
//           <NavigationMenuLink asChild>
//             <NavLink to="login/"> Login</NavLink>
//           </NavigationMenuLink>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//       <NavigationMenuList>
//         <NavigationMenuItem>
//           {/* <NavigationMenuLink asChild >
//             <NavLink to="register/" className={({isActive})=>`bg-amber-300 ${isActive? "text-red-600" : "text-blue-700"}`}>Register</NavLink>
//           </NavigationMenuLink> */}
//           <NavigationMenuLink asChild   className={({ isActive }) => (isActive ? "text-blue-500 font-bold" : "text-gray-600")}>
//  <NavLink
//               to="register/"

//             >
//               Register
//             </NavLink>
// </NavigationMenuLink>

//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>

//     </>
//   )
// }
