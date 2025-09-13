import { Link } from "react-router-dom";
import { useContext, useState, useRef, useEffect, Fragment } from "react";
import { HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";
import { AuthContext } from "../../../featured/auth/AuthContext";
import { FaUserTie, FaTaxi } from "react-icons/fa6";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const navLinks = [
  // { id: "hero", label: "Hero", path: "#hero" },
  { id: "features", label: "Features", path: "#features" },
  { id: "pricing", label: "Pricing", path: "#pricing" },
  { id: "testimonials", label: "Testimonials", path: "#testimonials" },
  { id: "admin", label: "Admin", path: "/admin" },
  { id: "faq", label: "FAQ", path: "#cta" },
];

const NavStyle = () => {
  const { user, logout } = useContext(AuthContext);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setIsProfileMenuOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !document
          .querySelector('button[aria-label="Toggle mobile menu"]')
          .contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setIsProfileMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen((prev) => !prev);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setIsProfileMenuOpen(false);
  };

  return (
    <Fragment>
      {/* Navbar static kore dilam */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
        <nav className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 rounded-2xl border-1 border-[#1276F9] p-2"
          >
            <FaTaxi className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-[600] text-[#1276F9]">
              TAXILOG UK
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex">
            <ul className="flex items-center gap-6 text-base capitalize">
              {navLinks.map(({ label, path }) => (
                <li key={label}>
                  {path.startsWith("#") ? (
                    <a
                      href={path}
                      className="cursor-pointer text-base font-medium text-neutral-600 transition-colors hover:text-blue-600"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      to={path}
                      className="cursor-pointer text-base font-medium text-neutral-600 transition-colors hover:text-blue-600"
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* User Profile or Login */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {user ? (
                <>
                  <Link to="/">
                    <button className="inline-flex h-8 w-20 items-center justify-center gap-1.5 rounded-md bg-blue-600 px-2 transition-colors duration-200 hover:bg-blue-700 sm:h-9 sm:w-24 sm:gap-2 sm:rounded-md sm:px-2.5 md:h-10 md:w-28 md:gap-2.5 md:rounded-lg md:px-3 lg:h-11 lg:w-32 lg:gap-3 lg:rounded-lg lg:px-4">
                      <span className="font-['Roboto'] text-xs leading-tight font-semibold text-white sm:text-sm md:text-base lg:text-base">
                        Get Started
                      </span>
                    </button>
                  </Link>

                  {/* Profile Icon and Dropdown */}
                  <div className="relative" ref={profileMenuRef}>
                    <img
                      src={user.profileImage || "/treacks/cart3.png"}
                      alt="User Profile"
                      className="h-7 w-7 cursor-pointer rounded-full border-2 border-gray-200 object-cover transition-colors duration-200 hover:border-blue-300 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10"
                      onClick={toggleProfileMenu}
                    />
                    <div
                      className={`absolute top-full right-0 z-50 mt-2 w-48 origin-top-right rounded-lg border border-gray-200 bg-white p-2 shadow-lg transition-all duration-300 ease-out sm:w-52 md:w-56 lg:w-60 ${
                        isProfileMenuOpen
                          ? "scale-100 opacity-100"
                          : "pointer-events-none scale-95 opacity-0"
                      } `}
                    >
                      <div className="border-b border-gray-200 px-3 py-2 sm:px-4 sm:py-3">
                        <p className="font-['Roboto'] text-xs font-semibold text-gray-800 sm:text-sm">
                          <span>Name: </span>
                          {user.name}
                        </p>
                      </div>

                      <Link
                        to="/"
                        className="flex items-center gap-2 rounded-md px-3 py-2 font-['Roboto'] text-xs font-medium text-gray-700 transition-colors hover:bg-gray-100 sm:gap-3 sm:px-4 sm:py-2.5 sm:text-sm"
                        onClick={() => setIsProfileMenuOpen(false)}
                      >
                        <FaUserTie className="h-3 w-3 text-gray-500 sm:h-4 sm:w-4" />
                        View Account
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="mt-2 flex w-full items-center gap-2 rounded-md border-t border-gray-200 px-3 py-2 pt-2 text-left font-['Roboto'] text-xs font-medium text-red-500 transition-colors hover:bg-gray-100 sm:gap-3 sm:px-4 sm:py-2.5 sm:pt-3 sm:text-sm"
                      >
                        Logout
                        <HiMiniArrowLeftStartOnRectangle className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/">
                    <button className="inline-flex h-8 w-20 items-center justify-center gap-1.5 rounded-md bg-blue-600 px-2 transition-colors duration-200 hover:bg-blue-700 sm:h-9 sm:w-24 sm:gap-2 sm:rounded-md sm:px-2.5 md:h-10 md:w-28 md:gap-2.5 md:rounded-lg md:px-3 lg:h-11 lg:w-32 lg:gap-3 lg:rounded-lg lg:px-4">
                      <span className="font-['Roboto'] text-xs leading-tight font-semibold text-white sm:text-sm md:text-base lg:text-base">
                        Get Started
                      </span>
                    </button>
                  </Link>

                  <Link to="/login">
                    <button className="lg-w-24 lg-rounded-lg lg-px-5 inline-flex h-8 w-16 items-center justify-center rounded-md border border-blue-600 bg-transparent px-2 text-blue-600 transition-colors duration-200 hover:bg-blue-50 sm:h-9 sm:w-18 sm:rounded-md sm:px-3 md:h-10 md:w-20 md:rounded-lg md:px-4 lg:h-11">
                      <span className="font-['Roboto'] text-xs leading-tight font-semibold sm:text-sm md:text-base lg:text-base">
                        Log In
                      </span>
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            {user && (
              <div className="relative" ref={profileMenuRef}>
                <img
                  src={user.profileImage || "/treacks/cart3.png"}
                  alt="User Profile"
                  className="h-7 w-7 cursor-pointer rounded-full border-2 border-gray-200 object-cover transition-colors duration-200 hover:border-blue-300 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10"
                  onClick={toggleProfileMenu}
                />
                <div
                  className={`absolute top-full right-0 z-50 mt-2 w-48 origin-top-right rounded-lg border border-gray-200 bg-white p-2 shadow-lg transition-all duration-300 ease-out sm:w-52 md:w-56 lg:w-60 ${
                    isProfileMenuOpen
                      ? "scale-100 opacity-100"
                      : "pointer-events-none scale-95 opacity-0"
                  } `}
                >
                  <div className="border-b border-gray-200 px-3 py-2 sm:px-4 sm:py-3">
                    <p className="font-['Roboto'] text-xs font-semibold text-gray-800 sm:text-sm">
                      <span>Name: </span>
                      {user.name}
                    </p>
                  </div>
                  <Link
                    to="/"
                    className="flex items-center gap-2 rounded-md px-3 py-2 font-['Roboto'] text-xs font-medium text-gray-700 transition-colors hover:bg-gray-100 sm:gap-3 sm:px-4 sm:py-2.5 sm:text-sm"
                    onClick={() => setIsProfileMenuOpen(false)}
                  >
                    <FaUserTie className="h-3 w-3 text-gray-500 sm:h-4 sm:w-4" />
                    View Account
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="mt-2 flex w-full items-center gap-2 rounded-md border-t border-gray-200 px-3 py-2 pt-2 text-left font-['Roboto'] text-xs font-medium text-red-500 transition-colors hover:bg-gray-100 sm:gap-3 sm:px-4 sm:py-2.5 sm:pt-3 sm:text-sm"
                  >
                    Logout
                    <HiMiniArrowLeftStartOnRectangle className="h-3 w-3 sm:h-4 sm:w-4" />
                  </button>
                </div>
              </div>
            )}

            {!user && (
              <Link to="/login">
                <button className="inline-flex items-center justify-center rounded-md border border-blue-600 bg-transparent px-3 py-1.5 text-sm text-blue-600 transition-colors duration-200 hover:bg-blue-50">
                  Log In
                </button>
              </Link>
            )}

            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              className="rounded-md p-2 text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-inset"
            >
              {isMobileMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiOutlineMenu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            ref={mobileMenuRef}
            className={`absolute inset-x-0 top-full z-40 block w-full border-t border-gray-100 bg-white px-6 py-4 transition-all duration-300 ease-out lg:hidden ${
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-4 opacity-0"
            } `}
          >
            <ul className="flex flex-col gap-4 text-base capitalize">
              {navLinks.map(({ label, path }) => (
                <li key={label}>
                  {path.startsWith("#") ? (
                    <a
                      href={path}
                      className="block w-full cursor-pointer rounded-md p-2 font-medium text-neutral-600 transition-colors hover:bg-gray-100 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      to={path}
                      className="block w-full cursor-pointer rounded-md p-2 font-medium text-neutral-600 transition-colors hover:bg-gray-100 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col items-center gap-3">
              {user ? (
                <Link to="/" className="w-full">
                  <button className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 py-2 text-white transition-colors duration-200 hover:bg-blue-700">
                    Get Started
                  </button>
                </Link>
              ) : (
                <>
                  <Link to="/login" className="w-full">
                    <button className="inline-flex w-full items-center justify-center rounded-md border border-blue-600 bg-transparent py-2 text-blue-600 transition-colors duration-200 hover:bg-blue-50">
                      Log In
                    </button>
                  </Link>
                  <Link to="/" className="w-full">
                    <button className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 py-2 text-white transition-colors duration-200 hover:bg-blue-700">
                      Get Started
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default NavStyle;
