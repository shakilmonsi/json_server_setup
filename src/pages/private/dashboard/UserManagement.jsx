import React, { useState } from "react";
import {
  MdOutlineSearch,
  MdOutlineGroup,
  MdAdd,
  MdOutlineDelete,
  MdOutlineEdit,
  MdOutlineDashboard,
  MdOutlinePerson,
  MdInfoOutline,
  MdCheckCircleOutline,
  MdOutlineCalendarToday,
  MdLink,
  MdOutlineMail,
} from "react-icons/md";
import {
  FaTrash,
  FaPencilAlt,
  FaLink,
  FaTrashAlt,
  FaRegTrashAlt,
} from "react-icons/fa"; // Importing from a different icon set for more options

import AddUserForm from "./AddUserForm/AddUserForm";
// Sample data to populate the user table
const usersData = [
  {
    id: 1,
    name: "Guy Hawkins",
    email: "sara.cruz@example.com",
    role: "Admin",
    created: "5/19/24",
    lastLogin: "12/4/17",
    status: "Active",
  },
  {
    id: 2,
    name: "Savannah Nguyen",
    email: "debbie.baker@example.com",
    role: "Editor",
    created: "6/21/25",
    lastLogin: "4/4/18",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Kathryn Murphy",
    email: "jackson.graham@example.com",
    role: "Viewer",
    created: "8/21/25",
    lastLogin: "5/30/14",
    status: "Active",
  },
  {
    id: 4,
    name: "Jane Cooper",
    email: "jessica.hanson@example.com",
    role: "Editor",
    created: "12/10/24",
    lastLogin: "1/28/17",
    status: "Inactive",
  },
  {
    id: 5,
    name: "Eleanor Pena",
    email: "deanna.curtis@example.com",
    role: "Viewer",
    created: "8/2/25",
    lastLogin: "3/4/16",
    status: "Active",
  },
];

const UserManagement = () => {
  const totalUsers = usersData.length;
  const activeUsers = usersData.filter(
    (user) => user.status === "Active",
  ).length;
  const inactiveUsers = usersData.filter(
    (user) => user.status === "Inactive",
  ).length;
  const administrators = usersData.filter(
    (user) => user.role === "Admin",
  ).length;

  // Utility function for getting role badge styles
  const getRoleBadge = (role) => {
    switch (role) {
      case "Admin":
        return (
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
            Admin
          </span>
        );
      case "Editor":
        return (
          <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
            Editor
          </span>
        );
      case "Viewer":
        return (
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
            Viewer
          </span>
        );
      default:
        return null;
    }
  };

  // Utility function for getting status badge styles
  const getStatusBadge = (status) => {
    switch (status) {
      case "Active":
        return (
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
            Active
          </span>
        );
      case "Inactive":
        return (
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">
            Inactive
          </span>
        );
      default:
        return null;
    }
  };

  // Dynamic avatar generation with a single letter and background color
  const getAvatar = (name) => {
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("");
    const colors = [
      "bg-blue-200 text-blue-800",
      "bg-green-200 text-green-800",
      "bg-yellow-200 text-yellow-800",
      "bg-purple-200 text-purple-800",
      "bg-pink-200 text-pink-800",
    ];
    const color = colors[initials.charCodeAt(0) % colors.length];

    return (
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold ${color}`}
      >
        {initials.toUpperCase()}
      </div>
    );
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50 font-sans text-gray-900">
      {/* Header */}
      <header className="flex max-w-full flex-col items-center justify-between border-b border-gray-200 bg-white px-24 py-4 shadow-sm sm:flex-row">
        <div className="mb-4 flex w-full flex-col items-center gap-4 sm:mb-0 sm:w-auto sm:flex-row">
          <div className="relative w-full sm:w-72">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-base">
              <MdOutlineSearch className="h-5 w-5 text-base text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search users by name or email"
              className="w-full rounded-md border border-gray-300 bg-white py-2 pr-3 pl-10 text-sm placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="relative w-full sm:w-auto">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MdOutlinePerson className="h-5 w-5 text-gray-400" />
            </div>
            <select className="w-full appearance-none rounded-md border border-gray-300 bg-white py-2 pr-8 pl-10 text-base focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none">
              <option>All Role</option>
              <option>Admin</option>
              <option>Editor</option>
              <option>Viewer</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <button
          onClick={openModal}
          className="flex w-full items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none sm:w-auto"
        >
          <MdAdd className="h-5 w-5" />
          Add User
        </button>

        {/* Modal Overlay and Content */}
        {isModalOpen && (
          <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-300">
            <div className="relative max-h-full transform overflow-y-auto transition-transform duration-300">
              <AddUserForm onClose={closeModal} />
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="mx-auto w-full space-y-4 px-16 sm:space-y-6 sm:py-10 md:space-y-8">
        {/* Title and Export Button */}
        <div className="mb-8 flex flex-col items-center justify-between sm:flex-row">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl font-bold text-gray-800">
              User Management
            </h1>
            <p className="mt-1 text-gray-500">
              Manage your team members and their permissions
            </p>
          </div>
          <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 focus:outline-none">
            Export CSV
          </button>
        </div>

        {/* Stat Cards */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div>
              <p className="text-sm text-gray-500">Total Users</p>
              <p className="mt-1 text-[32px] font-[600] text-blue-600">
                {totalUsers}
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <MdOutlineGroup className="h-6 w-6" />
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div>
              <p className="text-sm text-gray-500">Active Users</p>
              <p className="mt-1 text-[32px] font-[700] text-green-600">
                {activeUsers}
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
              <MdCheckCircleOutline className="h-6 w-6" />
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div>
              <p className="text-sm text-gray-500">Inactive Users</p>
              <p className="mt-1 text-[32px] font-[700] text-yellow-500">
                {inactiveUsers}
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
              <MdInfoOutline className="h-6 w-6" />
            </div>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div>
              <p className="text-sm text-gray-500">Administrators</p>
              <p className="mt-1 text-[32px] font-[600] text-blue-600">
                {administrators}
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <MdOutlineDashboard className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* User Table */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-base font-[600] tracking-wider text-[#212121] uppercase">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-base font-[600] tracking-wider text-[#212121] uppercase">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-base font-[600] tracking-wider text-[#212121] uppercase">
                    Created
                  </th>
                  <th className="px-6 py-3 text-left text-base font-[600] tracking-wider text-[#212121] uppercase">
                    Last Login
                  </th>
                  <th className="text-basefont-[600] px-6 py-3 text-left tracking-wider text-[#212121] uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-base font-[600] tracking-wider text-[#212121] uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {usersData.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          {getAvatar(user.name)}
                        </div>
                        <div className="ml-4">
                          <div className="text-base font-medium text-[#555]">
                            {user.name}
                          </div>
                          <div className="flex items-center gap-1.5 text-sm text-gray-500">
                            <MdOutlineMail className="h-4 w-4 text-gray-400" />
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                      {getRoleBadge(user.role)}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                      <div className="flex items-center gap-2">
                        <MdOutlineCalendarToday className="h-5 w-5 text-gray-400" />
                        {user.created}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                      <div className="flex items-center gap-2">
                        <MdOutlineCalendarToday className="h-5 w-5 text-gray-400" />
                        {user.lastLogin}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                      {getStatusBadge(user.status)}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                      <div className="flex items-center space-x-4">
                        <button className="text-black hover:text-gray-600">
                          <FaPencilAlt className="h-5 w-5" />
                        </button>
                        <button className="text-black hover:text-gray-600">
                          <FaRegTrashAlt hAlt className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserManagement;
