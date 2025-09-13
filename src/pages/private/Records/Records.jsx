import React, { useState } from "react";
import {
  FaBars,
  FaDownload,
  FaEye,
  FaEllipsisH,
  FaFilter,
  FaSearch,
} from "react-icons/fa";
import { BiRefresh } from "react-icons/bi";
import {
  MdDocumentScanner,
  MdWarning,
  MdCheckCircle,
  MdCancel,
} from "react-icons/md";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Records = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    user: "All Users",
    vehicle: "All Vehicles",
    dateRange: "All Time",
    status: "All Status",
  });

  // Dropdown states
  const [dropdownStates, setDropdownStates] = useState({
    user: false,
    vehicle: false,
    dateRange: false,
    status: false,
  });

  const recordsData = {
    header: {
      title: "Records Management",
      subtitle: "Daily check submissions and vehicle inspections",
    },
    stats: [
      {
        title: "Total Checks",
        value: "5",
        icon: (
          <MdDocumentScanner className="h-4 w-4 text-blue-600 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
        ),
        bgColor: "bg-blue-100",
      },
      {
        title: "Passed",
        value: "12",
        icon: (
          <MdCheckCircle className="h-4 w-4 text-blue-600 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
        ),
        bgColor: "bg-blue-100",
        textColor: "text-blue-600",
      },
      {
        title: "Warnings",
        value: "88",
        icon: (
          <MdWarning className="h-4 w-4 text-amber-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
        ),
        bgColor: "bg-amber-100",
        textColor: "text-amber-500",
      },
      {
        title: "Failed",
        value: "12",
        icon: (
          <MdCancel className="h-4 w-4 text-red-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
        ),
        bgColor: "bg-red-100",
        textColor: "text-red-500",
      },
      {
        title: "Total Issues",
        value: "4",
        icon: (
          <MdWarning className="h-4 w-4 text-amber-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
        ),
        bgColor: "bg-amber-100",
        textColor: "text-amber-500",
      },
    ],
    tableData: [
      {
        checkId: "DC001",
        user: {
          name: "John Smith",
          avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
        },
        date: "2024-08-25",
        time: "08:30",
        vehicleId: "TRUCK-001",
        vehicleType: "truck",
        status: "Passed",
        statusColor: "green",
        issues: "02",
        location: "Main Depot",
      },
      {
        checkId: "DC002",
        user: {
          name: "Sarah Johnson",
          avatar:
            "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face&auto=format",
        },
        date: "2024-08-25",
        time: "09:15",
        vehicleId: "VAN-003",
        vehicleType: "van",
        status: "Warning",
        statusColor: "amber",
        issues: "01",
        location: "North Yard",
      },
      {
        checkId: "DC003",
        user: {
          name: "Mike Davis",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format",
        },
        date: "2024-08-25",
        time: "10:00",
        vehicleId: "TRUCK-005",
        vehicleType: "truck",
        status: "Failed",
        statusColor: "red",
        issues: "03",
        location: "South Depot",
      },
      {
        checkId: "DC004",
        user: {
          name: "Lisa Wilson",
          avatar:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face&auto=format",
        },
        date: "2024-08-25",
        time: "07:45",
        vehicleId: "CAR-002",
        vehicleType: "car",
        status: "Passed",
        statusColor: "green",
        issues: "01",
        location: "Main Depot",
      },
      {
        checkId: "DC005",
        user: {
          name: "John Smith",
          avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
        },
        date: "2024-08-25",
        time: "08:20",
        vehicleId: "EQUIP-001",
        vehicleType: "equipment",
        status: "Warning",
        statusColor: "amber",
        issues: "03",
        location: "Workshop",
      },
    ],
  };

  // Filter options derived from data
  const filterOptions = {
    user: [
      "All Users",
      ...Array.from(
        new Set(recordsData.tableData.map((item) => item.user.name)),
      ),
    ],
    vehicle: [
      "All Vehicles",
      ...Array.from(
        new Set(recordsData.tableData.map((item) => item.vehicleId)),
      ),
    ],
    dateRange: [
      "All Time",
      "Today",
      "This Week",
      "This Month",
      "Last 7 Days",
      "Last 30 Days",
    ],
    status: ["All Status", "Passed", "Warning", "Failed"],
  };

  const toggleDropdown = (dropdownName) => {
    setDropdownStates((prev) => ({
      ...prev,
      [dropdownName]: !prev[dropdownName],
    }));
  };

  const closeAllDropdowns = () => {
    setDropdownStates({
      user: false,
      vehicle: false,
      dateRange: false,
      status: false,
    });
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
    closeAllDropdowns();
  };

  const getStatusBadge = (status, color) => {
    const colorClasses = {
      green: "bg-green-200 text-green-700",
      amber: "bg-amber-100 text-amber-700",
      red: "bg-red-200 text-red-600",
    };

    const icons = {
      Passed: <MdCheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />,
      Warning: <MdWarning className="h-3 w-3 sm:h-4 sm:w-4" />,
      Failed: <MdCancel className="h-3 w-3 sm:h-4 sm:w-4" />,
    };

    return (
      <div
        className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium sm:text-sm ${colorClasses[color]}`}
      >
        {icons[status]}
        <span className="whitespace-nowrap">{status}</span>
      </div>
    );
  };

  const FilterDropdown = ({ label, value, options = [], filterType }) => (
    <div className="relative flex flex-col space-y-1 sm:space-y-2">
      <label className="text-xs font-medium text-gray-700 sm:text-sm md:text-base">
        {label}
      </label>
      <div className="relative">
        <div
          className="group cursor-pointer"
          onClick={() => toggleDropdown(filterType)}
        >
          <div className="flex items-center justify-between rounded-lg border border-gray-300 bg-white px-3 py-2 transition-all duration-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 hover:border-gray-400 hover:bg-gray-50 sm:px-4 sm:py-2.5">
            <span className="text-xs text-gray-700 sm:text-sm md:text-base">
              {value}
            </span>
            {dropdownStates[filterType] ? (
              <BsChevronUp className="h-3 w-3 text-gray-600 transition-transform duration-200 group-hover:text-gray-800 sm:h-4 sm:w-4" />
            ) : (
              <BsChevronDown className="h-3 w-3 text-gray-600 transition-transform duration-200 group-hover:text-gray-800 sm:h-4 sm:w-4" />
            )}
          </div>
        </div>

        {/* Dropdown Menu */}
        {dropdownStates[filterType] && (
          <div
            className="absolute top-full right-0 z-50 mt-1 max-h-48 w-44 overflow-y-auto bg-white"
            style={{
              borderRadius: "8px",
              boxShadow: "12px 12px 24px 0 rgba(18, 118, 249, 0.16)",
            }}
          >
            {options.map((option, index) => (
              <div
                key={index}
                className="cursor-pointer px-3 py-2 hover:bg-gray-100"
                style={{
                  color: "#000",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
                onClick={() => handleFilterChange(filterType, option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // Filter the table data based on current filters
  const getFilteredData = () => {
    return recordsData.tableData.filter((row) => {
      if (filters.user !== "All Users" && row.user.name !== filters.user)
        return false;
      if (
        filters.vehicle !== "All Vehicles" &&
        row.vehicleId !== filters.vehicle
      )
        return false;
      if (filters.status !== "All Status" && row.status !== filters.status)
        return false;
      // Add date range filtering logic here if needed
      return true;
    });
  };

  const filteredData = getFilteredData();

  return (
    <div
      className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6 lg:p-8"
      onClick={closeAllDropdowns}
    >
      <div className="mx-auto max-w-full space-y-4 sm:space-y-6 md:space-y-8">
        {/* Header Section */}
        <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-xl font-[700] text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl">
              {recordsData.header.title}
            </h1>
            <p className="text-sm text-gray-600 sm:text-sm md:text-lg">
              {recordsData.header.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <button className="flex items-center justify-center gap-2 rounded-lg border border-blue-600 px-4 py-2.5 text-blue-600 transition-all duration-200 hover:border-blue-700 hover:bg-blue-50 focus:ring-2 focus:ring-blue-200 focus:outline-none sm:px-5 sm:py-3 lg:min-w-40">
              <BiRefresh className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm font-[600] sm:text-base">Refresh</span>
            </button>

            <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-white transition-all duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-blue-200 focus:outline-none sm:px-5 sm:py-3 lg:min-w-40">
              <FaDownload className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-sm font-[600] sm:text-base">
                Export CSV
              </span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-5 xl:gap-6">
          {recordsData.stats.map((stat, index) => (
            <div
              key={index}
              className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md sm:p-5 lg:p-6"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`rounded-lg p-2 transition-all duration-200 group-hover:scale-105 ${stat.bgColor}`}
                >
                  {stat.icon}
                </div>
                <div className="flex flex-col">
                  <div
                    className={`text-[32px] font-[700] sm:text-3xl ${stat.textColor || "text-gray-900"}`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 sm:text-base">
                    {stat.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search & Filter Section */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2.5 transition-all duration-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 lg:max-w-2xl lg:flex-1">
                <FaSearch className="h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by user, vehicle, location, or ID..."
                  className="flex-1 bg-transparent text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                />
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFilterOpen(!isFilterOpen);
                }}
                className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 focus:ring-2 focus:ring-blue-200 focus:outline-none lg:min-w-32"
              >
                <FaFilter className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-600">Filter</span>
                {isFilterOpen ? (
                  <BsChevronUp className="h-4 w-4 text-gray-600" />
                ) : (
                  <BsChevronDown className="h-4 w-4 text-gray-600" />
                )}
              </button>
            </div>
          </div>

          {/* Filter Section */}
          {isFilterOpen && (
            <div
              className="border-t border-gray-200 bg-gray-50 p-4 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-6">
                  <FilterDropdown
                    label="User"
                    value={filters.user}
                    options={filterOptions.user}
                    filterType="user"
                  />
                  <FilterDropdown
                    label="Vehicle"
                    value={filters.vehicle}
                    options={filterOptions.vehicle}
                    filterType="vehicle"
                  />
                  <FilterDropdown
                    label="Date Range"
                    value={filters.dateRange}
                    options={filterOptions.dateRange}
                    filterType="dateRange"
                  />
                  <FilterDropdown
                    label="Status"
                    value={filters.status}
                    options={filterOptions.status}
                    filterType="status"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Data Table */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="p-4 sm:p-6">
            <div className="mb-4 text-sm text-gray-600 sm:mb-6 sm:text-base">
              Daily Check Records ({filteredData.length})
            </div>

            {/* Desktop Table */}
            <div className="hidden overflow-x-auto lg:block">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="p-3 text-left text-sm font-semibold text-gray-800 sm:text-base">
                      Check ID
                    </th>
                    <th className="p-3 text-left text-sm font-semibold text-gray-800 sm:text-base">
                      User
                    </th>
                    <th className="p-3 text-left text-sm font-semibold text-gray-800 sm:text-base">
                      Date & Time
                    </th>
                    <th className="p-3 text-left text-sm font-semibold text-gray-800 sm:text-base">
                      Vehicle ID
                    </th>
                    <th className="p-3 text-left text-sm font-semibold text-gray-800 sm:text-base">
                      Status
                    </th>
                    <th className="p-3 text-left text-sm font-semibold text-gray-800 sm:text-base">
                      Issues
                    </th>
                    <th className="p-3 text-left text-sm font-semibold text-gray-800 sm:text-base">
                      Location
                    </th>
                    <th className="p-3 text-left text-sm font-semibold text-gray-800 sm:text-base">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 transition-colors duration-200 hover:bg-gray-50"
                    >
                      <td className="p-3 text-sm text-gray-700 sm:text-base">
                        {row.checkId}
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={row.user.avatar}
                            alt={row.user.name}
                            className="h-8 w-8 rounded-full object-cover"
                          />
                          <span className="text-sm text-gray-700 sm:text-base">
                            {row.user.name}
                          </span>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-700 sm:text-base">
                            {row.date}
                          </span>
                          <span className="text-xs text-gray-500">
                            {row.time}
                          </span>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-700 sm:text-base">
                            {row.vehicleId}
                          </span>
                          <span className="text-xs text-gray-500 capitalize">
                            {row.vehicleType}
                          </span>
                        </div>
                      </td>
                      <td className="p-3">
                        {getStatusBadge(row.status, row.statusColor)}
                      </td>
                      <td className="p-3 text-sm text-gray-700 sm:text-base">
                        {row.issues}
                      </td>
                      <td className="p-3 text-sm text-gray-700 sm:text-base">
                        {row.location}
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-4">
                          <FaEye className="h-5 w-5 cursor-pointer text-gray-600 transition-colors duration-200 hover:text-blue-600" />
                          <FaEllipsisH className="h-4 w-4 cursor-pointer text-gray-600 transition-colors duration-200 hover:text-gray-800" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="space-y-4 lg:hidden">
              {filteredData.map((row, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-gray-300 hover:shadow-sm"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={row.user.avatar}
                        alt={row.user.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {row.checkId}
                        </div>
                        <div className="text-sm text-gray-600">
                          {row.user.name}
                        </div>
                      </div>
                    </div>
                    {getStatusBadge(row.status, row.statusColor)}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-800">
                        Date & Time
                      </div>
                      <div className="text-gray-600">{row.date}</div>
                      <div className="text-gray-500">{row.time}</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">
                        Vehicle ID
                      </div>
                      <div className="text-gray-600">{row.vehicleId}</div>
                      <div className="text-gray-500 capitalize">
                        {row.vehicleType}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Location</div>
                      <div className="text-gray-600">{row.location}</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Issues</div>
                      <div className="text-gray-600">{row.issues}</div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-end gap-4 border-t border-gray-100 pt-3">
                    <FaEye className="h-5 w-5 cursor-pointer text-gray-600 transition-colors duration-200 hover:text-blue-600" />
                    <FaEllipsisH className="h-4 w-4 cursor-pointer text-gray-600 transition-colors duration-200 hover:text-gray-800" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
