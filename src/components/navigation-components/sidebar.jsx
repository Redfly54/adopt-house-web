// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../../assets/img/logo.png";

// const Sidebar = ({ user, onClose }) => {
//   const apiURL = import.meta.env.VITE_API_URL;

//   const handleLogout = () => {
//     const result = window.confirm("Anda yakin ingin logout?");
//     if (result) {
//         alert("Anda telah logout");
//         localStorage.removeItem("auth_token");
//         window.location.href = "/login";
//     }
//   }

//   return (
//     <div className="fixed inset-0 z-50 flex justify-end">
//       <div
//         className="absolute inset-0 bg-blur-500 bg-opacity-50"
//         onClick={onClose}
//       />
//       {/* To stop Sidebar from closing by clicking inside it*/}
//       <div
//         className="relative w-80 bg-white h-full flex flex-col z-10"
//         onClick={e => e.stopPropagation()}
//       >
//         <div className="bg-(--navy)  text-(--white) p-4 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <img src={logo} alt="Logo" className="h-12 w-12" />
//             <span className="text-white text-xl font-bold">Adopt House</span>
//           </div>
//           <button onClick={onClose} className="text-white hover:text-gray-700 text-3xl font-bold cursor-pointer">&times;</button>
//         </div>
//         {/* User Info */}
//         <div className="bg-yellow-100 rounded-lg mx-4 mt-4 p-4 flex items-center justify-between">
//           <div>
//             <div className="text-2xl font-bold">{user.username}</div>
//           </div>
//           <img
//             src={`${apiURL}/${user.picture}`}
//             alt={user.username}
//             className="w-16 h-16 rounded-full border-4 border-white object-cover"
//           />
//         </div>
//         {/* Menu */}
//         <div className="flex flex-col gap-4 mt-6 px-4">
//           <Link to="/profile" onClick={onClose}>
//             <div className="bg-blue-400 hover:border-2 rounded-lg p-4 mb-2 flex justify-between items-center font-semibold shadow">
//               <div>
//                 Profil Saya
//                 <div className="text-xs font-normal ">Lihat Profil Anda</div>
//               </div>
//               <span className="text-2xl">&gt;</span>
//             </div>
//           </Link>
//           <Link to="/favorites" onClick={onClose}>
//             <div className="bg-blue-400 hover:border-2 rounded-lg p-4 mb-2 flex justify-between items-center font-semibold shadow">
//               <div>
//                 Favorit Saya
//                 <div className="text-xs font-normal ">Lihat Hewan Yang Anda Sukai</div>
//               </div>
//               <span className="text-2xl">&gt;</span>
//             </div>
//           </Link>
//           <Link to="/post" onClick={onClose}>
//             <div className="bg-white hover:border-2 rounded-lg p-4 mb-2 flex justify-between items-center font-semibold shadow">
//               <div>
//                 Buat Postingan Baru
//                 <div className="text-xs font-normal text-gray-500">Postingan Hewan Anda</div>
//               </div>
//               <span className="text-2xl">&gt;</span>
//             </div>
//           </Link>
//           <Link to="/my-posts" onClick={onClose}>
//             <div className="bg-white hover:border-2 rounded-lg p-4 mb-2 flex justify-between items-center font-semibold shadow">
//               <div>
//                 Postingan Saya
//                 <div className="text-xs font-normal text-gray-500">Lihat Semua Postingan Anda</div>
//               </div>
//               <span className="text-2xl">&gt;</span>
//             </div>
//           </Link>
//         </div>
//         <div className="px-4 pb-6 mt-auto">
//           <button
//             onClick={handleLogout}
//             className="w-full bg-red-500 hover:border-2 font-semibold rounded-lg py-3 shadow cursor-pointer"
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import {
  Drawer, DrawerHeader, DrawerItems, 
  Sidebar as FlowSidebar, SidebarItems,
  SidebarItemGroup, SidebarItem,
} from "flowbite-react";

const Sidebar = ({ user, onClose, isOpen = true }) => {
  const apiURL = import.meta.env.VITE_API_URL;

  const handleLogout = () => {
    const result = window.confirm("Anda yakin ingin logout?");
    if (result) {
      alert("Anda telah logout");
      localStorage.removeItem("auth_token");
      window.location.href = "/login";
    }
  };

  return (
    <Drawer open={isOpen} onClose={onClose} position="right" className="p-0 m-0">
        <div className="bg-(--navy)  text-(--white) p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-12 w-12" />
             <span className="text-white text-xl font-bold">Adopt House</span>
          </div>
          <button onClick={onClose} className="text-white hover:text-gray-700 text-3xl font-bold cursor-pointer">&times;</button>
        </div>
      <DrawerItems className="p-0 bg-white">
        <FlowSidebar className="h-full w-80 bg-white rounded-none">
          {/* User Info */}
          <div className="bg-yellow-100 rounded-lg mx-4 mt-4 p-4 flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">{user.username}</div>
            </div>
            <img
              src={`${apiURL}/${user.picture}`}
              alt={user.username}
              className="w-16 h-16 rounded-full border-4 border-white object-cover"
            />
          </div>
          {/* Menu */}
          <SidebarItems className="mt-6 px-4 flex flex-col gap-4">
            <SidebarItemGroup>
            <SidebarItem as={Link} to="/profile" onClick={onClose} className="bg-blue-400 hover:bg-blue-400 hover:border-2 rounded-lg p-4 mb-2 flex justify-between items-center font-semibold shadow">
              <div className="flex justify-between items-center">
                <div>
                  Profil Saya
                  <div className="text-xs font-normal">Lihat Profil Anda</div>
                </div>
                <span className="text-2xl">&gt;</span>
              </div>
            </SidebarItem>
            <SidebarItem as={Link} to="/favorites" onClick={onClose} className="bg-blue-400 hover:bg-blue-400 hover:border-2 rounded-lg p-4 mb-2 flex justify-between items-center font-semibold shadow">
              <div className="flex justify-between items-center">
                <div>
                  Favorit Saya
                  <div className="text-xs font-normal">Lihat Hewan Yang Anda Sukai</div>
                </div>
                <span className="text-2xl">&gt;</span>
              </div>
            </SidebarItem>
            <SidebarItem as={Link} to="/post" onClick={onClose} className="bg-white hover:border-2 rounded-lg p-4 mb-2 flex justify-between items-center font-semibold shadow">
              <div className="flex justify-between items-center">
                <div className="text-black">
                  Buat Postingan Baru
                  <div className="text-xs font-normal text-gray-500">Postingan Hewan Anda</div>
                </div>
                <span className="text-2xl">&gt;</span>
              </div>
            </SidebarItem>
            <SidebarItem as={Link} to="/my-posts" onClick={onClose} className="bg-white hover:border-2 rounded-lg p-4 mb-2 flex justify-between items-center font-semibold shadow">
              <div className="flex justify-between items-center">
                <div className="text-black">
                  Postingan Saya
                  <div className="text-xs font-normal text-gray-500">Lihat Semua Postingan Anda</div>
                </div>
                <span className="text-2xl">&gt;</span>
              </div>
            </SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
          {/* Logout Button */}
          <div className="px-4 pb-6 mt-auto">
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 hover:border-2 font-semibold rounded-lg py-3 shadow cursor-pointer"
            >
              Logout
            </button>
          </div>
        </FlowSidebar>
      </DrawerItems>
    </Drawer>
  );
};

export default Sidebar;