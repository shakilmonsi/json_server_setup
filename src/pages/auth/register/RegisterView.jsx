import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { useAuth } from "../../../featured/auth/AuthContext";

// Utility function to convert a File to a Base64 string
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

const RegisterView = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  // Local state for loading and form errors
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(null);

  // useAuth থেকে registerUser ফাংশনটি নিয়ে আসছি
  const { registerUser } = useAuth();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    } else {
      setProfileImage(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormError(null);
    toast.dismiss();

    // --- Client-side Validation ---
    if (!name || !email || !password || !confirmPassword) {
      setFormError("Please fill in all required fields.");
      toast.error("Please fill in all required fields.");
      return;
    }
    if (password !== confirmPassword) {
      setFormError("Passwords do not match.");
      toast.error("Passwords do not match.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setFormError("Please enter a valid email address.");
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      // Create a user object to pass to the API
      const userData = {
        name,
        email,
        password,
        phoneNumber,
        companyName,
        profileImage: profileImage ? await fileToBase64(profileImage) : null,
      };

      const result = await registerUser(userData);

      if (result.success) {
        toast.success("Registration successful! Redirecting to login...");

        // --- রেজিস্ট্রেশন সফল হলে ফর্ম রিসেট করার লজিক ---
        setName("");
        setPhoneNumber("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setCompanyName("");
        setProfileImage(null);

        // --- ২ সেকেন্ড পর লগইন পেজে নিয়ে যাওয়া হচ্ছে ---
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setFormError(result.message);
        toast.error(result.message);
      }
    } catch (error) {
      setFormError("An unexpected error occurred. Please try again.");
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50 p-6 sm:p-12 lg:p-24">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-8 p-4 md:gap-12">
        {/* Google Sign-in and "or" section */}
        <div className="flex w-full flex-col items-center gap-4">
          <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-2.5 shadow-sm transition-colors duration-200 hover:bg-gray-50">
            <FaGoogle className="h-6 w-6 text-blue-500" />
            <span className="text-base font-[800] text-slate-700">
              Sign in with Google
            </span>
          </button>
          <div className="flex w-full items-center gap-4">
            <hr className="flex-1 border-t border-gray-400" />
            <span className="text-sm font-normal text-gray-500 md:text-base">
              or sign up with email
            </span>
            <hr className="flex-1 border-t border-gray-400" />
          </div>
        </div>

        {/* Form fields */}
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6">
          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="fullName"
              className="text-sm font-normal text-slate-700"
            >
              Full name*
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 placeholder-gray-500 shadow-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-sm font-normal text-slate-700"
            >
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 placeholder-gray-500 shadow-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Company Name */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="companyName"
              className="text-sm font-normal text-slate-700"
            >
              Company Name
              <span className="text-neutral-300"> (Optional)</span>
            </label>
            <input
              type="text"
              id="companyName"
              placeholder="Choose Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 placeholder-gray-500 shadow-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="phone"
              className="text-sm font-normal text-slate-700"
            >
              Phone Number
              <span className="text-neutral-300"> (Optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your number here..."
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 placeholder-gray-500 shadow-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="password"
              className="text-sm font-normal text-slate-700"
            >
              Password*
            </label>
            <input
              type="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 placeholder-gray-500 shadow-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="confirmPassword"
              className="text-sm font-normal text-slate-700"
            >
              Confirm password*
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 placeholder-gray-500 shadow-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Profile Image */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="profileImage"
              className="text-sm font-normal text-slate-700"
            >
              Profile Image
              <span className="text-neutral-300"> (Optional)</span>
            </label>
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 placeholder-gray-500 shadow-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-blue-500 px-3.5 py-2.5 font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterView;
