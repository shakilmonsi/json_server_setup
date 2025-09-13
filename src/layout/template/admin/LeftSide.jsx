import { useLocation, useNavigate } from "react-router-dom";
import {
  FiEdit,
  FiSettings,
  FiLink,
  FiFileText,
  FiFile,
  FiHome,
  FiMusic,
  FiUsers,
} from "react-icons/fi";
import { GrLineChart } from "react-icons/gr";

const userRolesData = [
  {
    role: "admin",
    status: "active",
    email: "admin@ibracks.com",
  },
  {
    role: "editor",
    status: "idle",
    email: "editor@ibracks.com",
  },
];

const navLinksData = [
  { name: "dashboard", icon: <FiHome />, path: "/admin" },
  // { name: "Sales", icon: <GrLineChart />, path: "/admin/salse" },
  {
    name: "User Management",
    icon: <FiUsers />,
    path: "/admin/user-management",
  },
  { name: "Records", icon: <FiFile />, path: "/admin/records" },
  { name: "Documents", icon: <FiFileText />, path: "/admin/documents" },
  { name: "Links", icon: <FiLink />, path: "/admin/links" },
  { name: "Settings", icon: <FiSettings />, path: "/admin/settings" },
];

const LeftSide = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="h-full w-70 overflow-auto">
      {/* Logo */}
      <div className="flex justify-center pt-7">
        <a href="/">
          <img
            src="/image/Logo.png"
            alt="Logo"
            className="h-[48px] w-[144px] rounded-2xl border-2 border-yellow-400 bg-cover object-cover p-2"
          />
        </a>
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-col pt-10">
        {navLinksData.map((link) => (
          <a
            key={link.name}
            onClick={() => navigate(link.path)}
            className={`relative flex cursor-pointer items-center gap-4 rounded-lg px-4 py-3 text-base font-normal capitalize transition-colors duration-200 ${
              isActive(link.path)
                ? "text-blue-500" // active link color
                : "text-neutral-400 hover:text-blue-500" // hover color
            }`}
          >
            {/* Left active indicator */}
            {isActive(link.path) && (
              <div className="absolute top-2 left-0 h-10 w-1 rounded-tr-sm rounded-br-sm bg-blue-500" />
            )}

            {/* Icon bubble */}
            <span
              className={`rounded-lg p-2 transition-colors duration-200 ${
                isActive(link.path)
                  ? "bg-blue-500 text-white" // active icon background
                  : "bg-neutral-700 text-white"
              }`}
            >
              {link.icon}
            </span>

            <span className="whitespace-nowrap">{link.name}</span>
          </a>
        ))}
      </nav>

      {/* User Roles */}
      {/* <div className="m-4 flex flex-col gap-4 rounded-lg bg-white/10 p-4">
        {userRolesData.map((user) => (
          <div key={user.role} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`h-2 w-2 rounded-full ${
                  user.status === "active" ? "bg-green-500" : "bg-amber-400"
                }`}
              ></div>
              <div>
                <p className="text-sm font-normal text-white capitalize">
                  {user.role}
                </p>
                <p className="text-xs text-green-500">{user.email}</p>
              </div>
            </div>
            <button
              onClick={() => alert(`Editing ${user.role}`)}
              className="text-amber-400 hover:text-amber-300"
            >
              <FiEdit />
            </button>
          </div>
        ))}
      </div> */}
    </aside>
  );
};

export default LeftSide;
