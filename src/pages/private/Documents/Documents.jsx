import React, { useState } from "react";
import {
  FileText,
  Upload,
  Download,
  Search,
  ChevronDown,
  Eye,
  Calendar,
  AlertTriangle,
  Bell,
  Users,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";

const DocumentManagement = () => {
  const stats = [
    { icon: FileText, value: "15", label: "Total Documents", color: "blue" },
    {
      icon: CheckCircle,
      value: "22",
      label: "Active Documents",
      color: "green",
    },
    { icon: AlertTriangle, value: "8", label: "Expiring Soon", color: "amber" },
    { icon: XCircle, value: "3", label: "Expired", color: "rose" },
    { icon: Bell, value: "2", label: "Reminders Active", color: "pink" },
  ];

  const documents = [
    {
      id: 1,
      name: "Passport_SarahJohnson.pdf",
      type: "Identity Document",
      user: "Sarah Johnson",
      email: "sarah.johnson@company.com",
      lastSent: "12/1/2024",
      status: "Active",
      statusColor: "green",
      expiredDays: "227 days ago",
      expires: "1/15/2025",
      uploaded: "1/15/2024",
      reminders: true,
    },
    {
      id: 2,
      name: "DriverLicense_MichaelChen",
      type: "Identity Document",
      user: "Michael Chen",
      email: "michael.chen@company.com",
      lastSent: "12/25/2024",
      status: "expiring",
      statusColor: "orange",
      expiredDays: "248 days ago",
      expires: "12/10/2024",
      uploaded: "2/10/2024",
      reminders: true,
    },
    {
      id: 3,
      name: "Tax_Certificate_DavidKim.pdf",
      type: "Tax Document",
      user: "David Kim",
      email: "david.kim@company.com",
      lastSent: "12/1/2024",
      status: "Active",
      statusColor: "green",
      expiredDays: "227 days ago",
      expires: "1/15/2025",
      uploaded: "1/15/2024",
      reminders: true,
    },
    {
      id: 4,
      name: "Safety_Training_LisaThomps",
      type: "Training Certificate",
      user: "John Smith",
      email: "john Smith@company.com",
      lastSent: "12/1/2024",
      status: "Active",
      statusColor: "green",
      expiredDays: "227 days ago",
      expires: "1/15/2025",
      uploaded: "1/15/2024",
      reminders: true,
    },
    {
      id: 5,
      name: "Medical_Certificate_SarahJohn",
      type: "Medical Document",
      user: "Sarah Johnson",
      email: "sarah.johnson@company.com",
      lastSent: "12/1/2024",
      status: "Active",
      statusColor: "green",
      expiredDays: "227 days ago",
      expires: "1/15/2025",
      uploaded: "1/15/2024",
      reminders: false,
    },
    {
      id: 6,
      name: "Security_Clearance_Michael",
      type: "Security Document",
      user: "Michael Chen",
      email: "michael.chen@company.com",
      lastSent: "12/1/2024",
      status: "Active",
      statusColor: "green",
      expiredDays: "227 days ago",
      expires: "1/15/2025",
      uploaded: "1/15/2024",
      reminders: true,
    },
  ];

  const getStatusBadgeClasses = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-300 text-green-800";
      case "expiring":
        return "bg-orange-200 text-yellow-900";
      default:
        return "bg-gray-300 text-gray-800";
    }
  };

  const getStatIconClasses = (color) => {
    switch (color) {
      case "blue":
        return "bg-blue-200 text-blue-600";
      case "green":
        return "bg-green-200 text-green-600";
      case "amber":
        return "bg-amber-100 text-amber-400";
      case "rose":
        return "bg-rose-100 text-rose-400";
      case "pink":
        return "bg-pink-50 text-pink-400";
      default:
        return "bg-gray-200 text-gray-600";
    }
  };

  const getStatValueClasses = (color) => {
    switch (color) {
      case "blue":
        return "text-blue-600";
      case "green":
        return "text-green-600";
      case "amber":
        return "text-amber-400";
      case "rose":
        return "text-rose-400";
      case "pink":
        return "text-pink-400";
      default:
        return "text-gray-600";
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All Users");
  const options = [
    "All Users",
    "Sarah Johnson",
    "Michael Chen",
    "David Kim",
    "John Smith",
  ];
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="mx-auto max-w-full px-4 pt-6 sm:px-20">
        {/* Header Section */}
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="relative h-6 w-6">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h1 className="font-['Roboto'] text-xl font-[700] text-neutral-800 sm:text-2xl">
                Documents Management
              </h1>
            </div>
            <p className="font-['Roboto'] text-sm font-[400] text-neutral-600 sm:text-base">
              Track and manage user documents with expiry monitoring
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="flex h-12 items-center justify-center gap-2.5 rounded-lg bg-blue-600 px-4 py-2.5 transition-colors hover:bg-blue-700 sm:h-14">
              <Upload className="h-5 w-5 text-white sm:h-6 sm:w-6" />
              <span className="font-['Roboto'] text-sm font-[600] text-white sm:text-base">
                Upload Document
              </span>
            </button>
            <button className="flex h-12 w-full items-center justify-center gap-2.5 rounded-lg border border-blue-600 px-4 py-2.5 transition-colors hover:bg-blue-50 sm:h-14 sm:w-40">
              <Download className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" />
              <span className="font-['Roboto'] text-sm font-[600] text-blue-600 sm:text-base">
                Export
              </span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col gap-2.5 rounded-xl border border-neutral-300 bg-white p-4 sm:p-6"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`flex items-center justify-center rounded p-1 ${getStatIconClasses(stat.color)}`}
                >
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="flex flex-col gap-1">
                  <div
                    className={`font-['Roboto'] text-2xl font-[600] sm:text-3xl ${getStatValueClasses(stat.color)}`}
                  >
                    {stat.value}
                  </div>
                  <div className="font-['Roboto'] text-sm font-normal text-neutral-600 sm:text-base">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search and Filter Section */}
        <div className="mb-6 flex flex-col gap-4 border-b border-stone-300 py-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-lg flex-1">
            <div className="relative">
              <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-neutral-600" />
              <input
                type="text"
                placeholder="Search documents..."
                className="h-10 w-full rounded-lg border border-gray-200 py-1.5 pr-4 pl-10 font-['Roboto'] text-base font-normal text-neutral-600 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* select part -----------code by shakil munsh */}
          <div className="relative w-full lg:w-52">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex w-full appearance-none items-center justify-between rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 font-['Segoe_UI'] text-base font-[500] text-gray-500 shadow-sm"
            >
              {selected}
              <ChevronDown className="h-5 w-5 text-zinc-500" />
            </button>

            {isOpen && (
              <ul className="absolute z-10 mt-2 w-full rounded-[8px] bg-white shadow-[12px_12px_24px_0_rgba(18,118,249,0.16)]">
                {options.map((option) => (
                  <li
                    key={option}
                    onClick={() => {
                      setSelected(option);
                      setIsOpen(false);
                    }}
                    className="cursor-pointer px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-5">
          <div className="rounded-lg px-5 py-2.5">
            <h2 className="font-['Roboto'] text-lg font-semibold text-neutral-800 sm:text-xl">
              6 documents found
            </h2>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 gap-6 pb-8 md:grid-cols-2 xl:grid-cols-3">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="flex w-full flex-col gap-6 rounded-lg border border-stone-300 bg-white p-4"
            >
              {/* Document Header */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex min-w-0 flex-1 items-start gap-2">
                      <FileText className="mt-0.5 h-6 w-6 flex-shrink-0 text-blue-600" />
                      <div className="flex min-w-0 flex-1 flex-col">
                        <div className="truncate font-['Roboto'] text-sm font-normal text-neutral-800">
                          {doc.name}
                        </div>
                        <div className="font-['Roboto'] text-xs font-normal text-neutral-600">
                          {doc.type}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`flex h-6 flex-shrink-0 items-center justify-center rounded-full px-2 py-1 ${getStatusBadgeClasses(doc.status)}`}
                    >
                      <div className="font-['Roboto'] text-sm font-normal whitespace-nowrap">
                        {doc.status}
                      </div>
                    </div>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-2 rounded-lg bg-gray-200 py-3 pr-4 pl-2">
                    <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gray-400"></div>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="truncate font-['Roboto'] text-base font-normal text-neutral-800">
                        {doc.user}
                      </div>
                      <div className="truncate font-['Roboto'] text-sm font-normal text-neutral-600">
                        {doc.email}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Document Status Info */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-neutral-600" />
                    <div className="font-['Roboto'] text-sm font-normal text-neutral-600">
                      Last sent: {doc.lastSent}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-500" />
                    <div className="font-['Roboto'] text-sm font-normal text-orange-500">
                      Expired {doc.expiredDays}
                    </div>
                  </div>
                </div>

                {/* Reminder and Expiry Info */}
                <div className="flex flex-wrap items-center gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    {doc.reminders ? (
                      <>
                        <Bell className="h-4 w-4 text-green-600" />
                        <span className="font-['Roboto'] font-normal text-neutral-600">
                          Reminders enabled
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-4 w-4 text-neutral-600" />
                        <span className="font-['Roboto'] font-normal text-neutral-600">
                          Reminders disabled
                        </span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-neutral-600" />
                    <span className="font-['Roboto'] font-normal text-neutral-600">
                      Expires: {doc.expires}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 transition-opacity hover:opacity-75">
                    <Eye className="h-4 w-4 text-blue-600" />
                    <span className="font-['Roboto'] text-xs font-normal text-blue-600">
                      View
                    </span>
                  </button>
                  <button className="flex items-center gap-2 transition-opacity hover:opacity-75">
                    <Download className="h-4 w-4 text-neutral-600" />
                    <span className="font-['Roboto'] text-xs font-normal text-black">
                      Download
                    </span>
                  </button>
                </div>
                <div className="font-['Roboto'] text-xs font-normal text-black">
                  Uploaded {doc.uploaded}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentManagement;
