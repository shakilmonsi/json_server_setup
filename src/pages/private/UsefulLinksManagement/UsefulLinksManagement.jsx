import {
  FaSearch,
  FaLink,
  FaChevronDown,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const UsefulLinksManagement = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-white p-6 md:p-8 lg:p-10">
      {/* Header and Title Section */}
      <div className="flex w-full max-w-full flex-col gap-6 px-24">
        <div className="flex w-full justify-start border-b border-stone-300 px-6 py-3">
          <div className="flex h-10 w-full items-center gap-2.5 rounded-lg border border-gray-200 px-3 py-1.5 md:w-[559px]">
            <FaSearch className="text-neutral-600" />
            <input
              type="text"
              className="flex-1 bg-transparent font-['Roboto'] text-base leading-normal font-normal text-neutral-600 outline-none"
              placeholder="Search users by name or email."
            />
          </div>
        </div>
        <div className="w-full rounded-lg py-2.5">
          <h1 className="font-['Roboto'] text-2xl leading-loose font-bold text-neutral-800">
            Useful Links Management
          </h1>
        </div>
      </div>

      {/* Main Content Containers */}
      <div className="mt-6 flex w-full max-w-full flex-col gap-6 px-24">
        {/* Add New Link Section */}
        <div className="flex w-full flex-col items-start gap-8 rounded-2xl border border-neutral-300 bg-white p-6">
          <div className="flex w-full flex-col gap-6">
            <h2 className="font-['Roboto'] text-base leading-normal font-normal text-black">
              Add a New Link
            </h2>
            <div className="flex w-full flex-col items-start gap-6">
              <div className="flex w-full flex-col items-start gap-1.5">
                <label className="font-['Segoe UI'] text-sm leading-tight font-normal text-slate-700">
                  Link Title
                </label>
                <div className="flex w-full items-center gap-2 rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 shadow-sm">
                  <FaLink className="text-zinc-400" />
                  <input
                    type="text"
                    className="font-['Segoe UI'] flex-1 text-base leading-normal font-normal text-zinc-400 outline-none"
                    placeholder="e.g., Company Website"
                  />
                  <FaChevronDown className="text-zinc-400" />
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-1.5">
                <label className="font-['Segoe UI'] text-sm leading-tight font-normal text-slate-700">
                  URL
                </label>
                <div className="flex w-full items-center gap-2 rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 shadow-sm">
                  <FaLink className="text-zinc-400" />
                  <input
                    type="text"
                    className="font-['Segoe UI'] flex-1 text-base leading-normal font-normal text-zinc-400 outline-none"
                    placeholder="https://www.example.com"
                  />
                  <FaChevronDown className="text-zinc-400" />
                </div>
              </div>
            </div>
            <button className="flex w-full items-center justify-center rounded-lg bg-blue-600 p-2.5 md:w-36">
              <span className="font-['Roboto'] text-base leading-normal font-normal text-white">
                Add Link
              </span>
            </button>
          </div>
        </div>

        {/* Current Useful Links Section */}
        <div className="flex w-full flex-col items-start gap-6 rounded-2xl border border-neutral-300 bg-white p-6">
          <h2 className="font-['Roboto'] text-base leading-normal font-normal text-neutral-600">
            Current Useful Links
          </h2>
          <div className="flex w-full flex-col gap-4 md:flex-row md:gap-8">
            {/* Link Title Column */}
            <div className="flex flex-1 flex-col gap-4">
              <div className="flex w-full items-center gap-2.5 bg-neutral-100 p-2.5">
                <p className="flex-1 font-['Roboto'] text-base leading-normal font-[600] text-neutral-800">
                  Link Title
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="w-full p-2.5 font-['Roboto'] text-base leading-normal font-[600] text-neutral-600">
                  Company Intranet
                </p>
                <p className="w-full p-2.5 font-['Roboto'] text-base leading-normal font-[600] text-neutral-600">
                  Safety Procedures Manual
                </p>
                <p className="w-full p-2.5 font-['Roboto'] text-base leading-normal font-[600] text-neutral-600">
                  HR Portal
                </p>
              </div>
            </div>
            {/* URL Column */}
            <div className="flex flex-1 flex-col gap-4">
              <div className="flex w-full items-center gap-2.5 bg-neutral-100 p-2.5">
                <p className="flex-1 font-['Roboto'] text-base leading-normal font-[600] text-neutral-800">
                  URL
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="w-full p-2.5 font-['Roboto'] text-base leading-normal font-normal text-neutral-600">
                  https://intranet.example.com
                </p>
                <p className="w-full p-2.5 font-['Roboto'] text-base leading-normal font-normal text-neutral-600">
                  https://docs.example.com/safety
                </p>
                <p className="w-full p-2.5 font-['Roboto'] text-base leading-normal font-normal text-neutral-600">
                  https://hr.example.com
                </p>
              </div>
            </div>
            {/* Actions Column */}
            <div className="flex flex-1 flex-col gap-4">
              <div className="flex w-full items-center gap-2.5 bg-neutral-100 p-2.5">
                <p className="flex-1 font-['Roboto'] text-base leading-normal font-[600] text-neutral-800">
                  Actions
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex w-full items-center gap-2.5 p-2.5">
                  <span className="font-['Roboto'] text-base leading-normal font-normal text-neutral-600">
                    <FaEdit className="mr-2 inline" />
                    Edit
                  </span>
                  <span className="font-['Roboto'] text-base leading-normal font-normal text-neutral-600">
                    <FaTrash className="mr-2 inline" />
                    Delete
                  </span>
                </div>
                <div className="flex w-full items-center gap-2.5 p-2.5">
                  <span className="font-['Roboto'] text-base leading-normal font-normal text-neutral-600">
                    <FaEdit className="mr-2 inline" />
                    Edit
                  </span>
                  <span className="font-['Roboto'] text-base leading-normal font-normal text-neutral-600">
                    <FaTrash className="mr-2 inline" />
                    Delete
                  </span>
                </div>
                <div className="flex w-full items-center gap-2.5 p-2.5">
                  <span className="font-['Roboto'] text-base leading-normal font-normal text-neutral-600">
                    <FaEdit className="mr-2 inline" />
                    Edit
                  </span>
                  <span className="font-['Roboto'] text-base leading-normal font-normal text-neutral-600">
                    <FaTrash className="mr-2 inline" />
                    Delete
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsefulLinksManagement;
