import React, { useState } from "react";

import {
  User,
  Mail,
  Shield,
  Activity,
  Image,
  ChevronDown,
  Plus,
} from "lucide-react";

export default function AddUserForm() {
  const [formData, setFormData] = useState({
    fullName: "",

    email: "",

    role: "Viewer",

    status: "Active",

    avatarUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
  });

  const [showRoleDropdown, setShowRoleDropdown] = useState(false);

  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  const roles = ["Viewer", "Admin", "Editor"];

  const statuses = ["Active", "Inactive"];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData); // Handle form submission here
  };

  const handleCancel = () => {
    setFormData({
      fullName: "",

      email: "",

      role: "Viewer",

      status: "Active",

      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    });
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-white px-4 py-6 sm:px-6 sm:py-12 lg:px-14 lg:py-24">
      {" "}
      <div className="flex w-full max-w-xs flex-col items-center gap-6 sm:max-w-sm sm:gap-8 md:max-w-2xl lg:max-w-4xl lg:gap-24 xl:max-w-[984px]">
        {/* Header */}{" "}
        <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
          {" "}
          <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-200 p-1 sm:h-10 sm:w-10 lg:h-11 lg:w-11">
            {" "}
            <div className="flex h-4 w-4 items-center justify-center overflow-hidden rounded bg-blue-200 sm:h-5 sm:w-5 lg:h-6 lg:w-6">
              {" "}
              <User
                className="h-3 w-3 text-blue-600 sm:h-4 sm:w-4 lg:h-5 lg:w-5"
                strokeWidth={2}
              />{" "}
            </div>{" "}
          </div>{" "}
          <h1 className="font-['Roboto'] text-xl leading-normal font-semibold text-neutral-800 sm:text-2xl lg:text-3xl">
            Add New User{" "}
          </h1>{" "}
        </div>
        {/* Avatar */}{" "}
        <img
          className="h-16 w-16 rounded-full object-cover sm:h-18 sm:w-18 lg:h-20 lg:w-20"
          src="https://placehold.co/84x84"
          alt="User Avatar"
        />{" "}
      </div>
      {/* Form Section */}{" "}
      <div className="mt-6 flex w-full max-w-xs flex-col items-start gap-6 sm:mt-8 sm:max-w-sm sm:gap-8 md:max-w-2xl lg:mt-0 lg:max-w-4xl lg:gap-9 xl:max-w-[984px]">
        {/* Form Container */}{" "}
        <div className="flex w-full flex-col items-center gap-6 sm:gap-8 lg:gap-9">
          {/* Full Name Field */}{" "}
          <div className="flex w-full flex-col gap-1 sm:gap-1.5">
            {" "}
            <label className="font-['Segoe_UI'] text-xs leading-tight font-normal text-slate-700 sm:text-sm">
              Full Name{" "}
            </label>{" "}
            <div className="flex w-full items-center gap-2 overflow-hidden rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] sm:px-3.5 sm:py-2.5">
              {" "}
              <User
                className="h-4 w-4 flex-shrink-0 text-black sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                strokeWidth={2}
              />{" "}
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                placeholder="Enter full name"
                className="flex-1 bg-transparent font-['Segoe_UI'] text-sm leading-normal font-normal text-zinc-400 placeholder-zinc-400 outline-none sm:text-base"
              />{" "}
            </div>{" "}
          </div>
          {/* Email Address Field */}{" "}
          <div className="flex w-full flex-col gap-1 sm:gap-1.5">
            {" "}
            <label className="font-['Segoe_UI'] text-xs leading-tight font-normal text-slate-700 sm:text-sm">
              Email Address{" "}
            </label>{" "}
            <div className="flex w-full items-center gap-2 overflow-hidden rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] sm:px-3.5 sm:py-2.5">
              {" "}
              <Mail
                className="h-4 w-4 flex-shrink-0 text-black sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                strokeWidth={2}
              />{" "}
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter email address"
                className="flex-1 bg-transparent font-['Segoe_UI'] text-sm leading-normal font-normal text-zinc-400 placeholder-zinc-400 outline-none sm:text-base"
              />{" "}
            </div>{" "}
          </div>
          {/* Role Field */}{" "}
          <div className="flex w-full flex-col gap-1 sm:gap-1.5">
            {" "}
            <label className="font-['Segoe_UI'] text-xs leading-tight font-normal text-slate-700 sm:text-sm">
              Role{" "}
            </label>{" "}
            <div className="w-full">
              {" "}
              <button
                onClick={() => {
                  setShowRoleDropdown(!showRoleDropdown);

                  setShowStatusDropdown(false);
                }}
                className="flex w-full items-center gap-2 overflow-hidden rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] sm:px-3.5 sm:py-2.5"
              >
                {" "}
                <Shield
                  className="h-4 w-4 flex-shrink-0 text-black sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  strokeWidth={2}
                />{" "}
                <span className="flex-1 text-left font-['Segoe_UI'] text-sm leading-normal font-normal text-zinc-400 sm:text-base">
                  {formData.role}{" "}
                </span>{" "}
                <ChevronDown
                  className="h-4 w-4 flex-shrink-0 text-black sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  strokeWidth={2}
                />{" "}
              </button>{" "}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${showRoleDropdown ? "h-auto opacity-100" : "h-0 opacity-0"}`}
              >
                {" "}
                <div className="mt-2 w-full rounded-lg border border-gray-100 bg-white px-3 py-2 shadow-[0px_12px_16px_0px_rgba(16,24,40,0.08)] sm:px-4 sm:py-4 lg:px-5 lg:py-5">
                  {" "}
                  {roles.map((role) => (
                    <button
                      key={role}
                      onClick={() => {
                        handleInputChange("role", role);

                        setShowRoleDropdown(false);
                      }}
                      className="w-full rounded px-1.5 py-1.5 text-left hover:bg-gray-50 sm:px-2 sm:py-2 lg:px-2.5 lg:py-2.5"
                    >
                      {" "}
                      <span className="font-['Roboto'] text-sm leading-normal font-normal text-black sm:text-base">
                        {role}{" "}
                      </span>{" "}
                    </button>
                  ))}{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          {/* Status Field */}{" "}
          <div className="flex w-full flex-col gap-1 sm:gap-1.5">
            {" "}
            <label className="font-['Segoe_UI'] text-xs leading-tight font-normal text-slate-700 sm:text-sm">
              Status{" "}
            </label>{" "}
            <div className="w-full">
              {" "}
              <button
                onClick={() => {
                  setShowStatusDropdown(!showStatusDropdown);

                  setShowRoleDropdown(false);
                }}
                className="flex w-full items-center gap-2 overflow-hidden rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] sm:px-3.5 sm:py-2.5"
              >
                {" "}
                <Activity
                  className="h-4 w-4 flex-shrink-0 text-black sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  strokeWidth={2}
                />{" "}
                <span className="flex-1 text-left font-['Segoe_UI'] text-sm leading-normal font-normal text-zinc-400 sm:text-base">
                  {formData.status}{" "}
                </span>{" "}
                <ChevronDown
                  className={`h-4 w-4 flex-shrink-0 text-black transition-transform duration-200 sm:h-5 sm:w-5 lg:h-6 lg:w-6 ${
                    showStatusDropdown ? "rotate-180" : ""
                  }`}
                  strokeWidth={2}
                />{" "}
              </button>{" "}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${showStatusDropdown ? "h-auto opacity-100" : "h-0 opacity-0"}`}
              >
                {" "}
                <div className="mt-2 w-full rounded-lg border border-gray-100 bg-white px-3 py-2 shadow-[0px_12px_16px_0px_rgba(16,24,40,0.08)] sm:px-4 sm:py-4 lg:px-5 lg:py-5">
                  {" "}
                  {statuses.map((status) => (
                    <button
                      key={status}
                      onClick={() => {
                        handleInputChange("status", status);

                        setShowStatusDropdown(false);
                      }}
                      className="w-full rounded px-1.5 py-1.5 text-left transition-colors hover:bg-gray-50 sm:px-2 sm:py-2 lg:px-2.5 lg:py-2.5"
                    >
                      {" "}
                      <span className="font-['Roboto'] text-sm leading-normal font-normal text-black sm:text-base">
                        {status}{" "}
                      </span>{" "}
                    </button>
                  ))}{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          {/* Avatar URL Field */}{" "}
          <div className="flex w-full flex-col gap-1 sm:gap-1.5">
            {" "}
            <label className="font-['Segoe_UI'] text-xs leading-tight font-normal text-slate-700 sm:text-sm">
              Avatar URL{" "}
            </label>{" "}
            <div className="flex w-full items-center gap-2 overflow-hidden rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] sm:px-3.5 sm:py-2.5">
              {" "}
              <Image
                className="h-4 w-4 flex-shrink-0 text-black sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                strokeWidth={2}
              />{" "}
              <input
                type="url"
                value={formData.avatarUrl}
                onChange={(e) => handleInputChange("avatarUrl", e.target.value)}
                className="flex-1 overflow-hidden bg-transparent font-['Segoe_UI'] text-xs leading-normal font-normal text-zinc-400 outline-none sm:text-sm lg:text-base"
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>
        {/* Buttons */}{" "}
        <div className="mt-4 flex w-full flex-col items-center justify-center gap-4 sm:mt-6 sm:flex-row sm:gap-6 lg:mt-0 lg:gap-9">
          {" "}
          <button
            onClick={handleCancel}
            className="flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-blue-600 px-2 transition-colors hover:bg-blue-50 sm:h-11 sm:w-32 sm:px-2.5 lg:h-12 lg:w-40"
          >
            {" "}
            <span className="font-['Roboto'] text-sm font-semibold text-blue-600 sm:text-base">
              Cancel{" "}
            </span>{" "}
          </button>{" "}
          <button
            onClick={handleSubmit}
            className="flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-2 transition-colors hover:bg-blue-700 sm:h-11 sm:w-32 sm:px-2.5 lg:h-12 lg:w-40"
          >
            {" "}
            <Plus
              className="h-4 w-4 text-white sm:h-5 sm:w-5 lg:h-6 lg:w-6"
              strokeWidth={2}
            />{" "}
            <span className="font-['Roboto'] text-sm font-semibold text-white sm:text-base">
              Create{" "}
            </span>{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
