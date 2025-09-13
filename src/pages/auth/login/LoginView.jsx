import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa"; // Added this for consistency with RegisterView
import { useAuth } from "../../../featured/auth/AuthContext";

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(null);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormError(null);
    toast.dismiss();

    // --- Client-side Validation ---
    if (!email || !password) {
      setFormError("Please enter both email and password.");
      toast.error("Please enter both email and password.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setFormError("Please enter a valid email address.");
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const result = await login(email, password);

      if (result.success) {
        toast.success("Login successful! Redirecting to home...");

        // Reset the form fields on successful login
        setEmail("");
        setPassword("");

        setTimeout(() => {
          navigate("/");
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
              or sign in with email
            </span>
            <hr className="flex-1 border-t border-gray-400" />
          </div>
        </div>

        {/* Form fields */}
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6">
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

          {/* Error message */}
          {formError && (
            <p className="font-poppins self-stretch text-center text-sm text-red-500">
              {formError}
            </p>
          )}

          {/* Log In Button */}
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-blue-500 px-3.5 py-2.5 font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
            disabled={loading}
          >
            {loading ? "Logging In..." : "Log In"}
          </button>
        </form>

        <div className="flex w-full justify-center text-sm font-normal text-gray-500">
          <p>
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-blue-500 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
