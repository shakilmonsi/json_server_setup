import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/template/main/MainLayout";
import NotFoundView from "../pages/error/NotFoundView";

import HomeView from "../pages/public/home/HomeView";
import Features from "../pages/public/Features/Features.jsx";

import RegisterView from "../pages/auth/register/RegisterView";
import LoginView from "../pages/auth/login/LoginView";
import VideosView from "../pages/public/videos/VideosView";

import DashboardLayout from "../layout/template/admin/DashboardLayout";
import Dashboard from "../pages/private/dashboard/Dashboard";
import Pricing from "../pages/public/Pricing/Pricing.jsx";
import Faq from "../pages/public/FAQ/Faq.jsx";
import Testimonials from "../pages/public/Testimonials/Testimonials.jsx";
import UsefulLinksManagement from "../pages/private/UsefulLinksManagement/UsefulLinksManagement.jsx";
import Documents from "../pages/private/Documents/Documents.jsx";
import Settings from "../pages/private/Settings/Settings.jsx";
import Records from "../pages/private/Records/Records.jsx";
import UserManagement from "../pages/private/dashboard/UserManagement.jsx";
import AddUserForm from "../pages/private/dashboard/AddUserForm/AddUserForm.jsx";
import VehicleInspectionForm from "../pages/private/dashboard/VehicleInspectionForm/VehicleInspectionForm.jsx";
import { elements } from "chart.js";
import UserDashboard from "../pages/private/UserDashboard/UserDashboard.jsx";
import UserDashboardLayout from "../layout/template/user/UserDashboardLayout/UserDashboardLayout.jsx";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomeView />,
      },
      { path: "/features", element: <Features /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/testimonials", element: <Testimonials /> },
      { path: "/faq", element: <Faq /> },
      {
        path: "/login",
        element: <LoginView />,
      },
      {
        path: "/register",
        element: <RegisterView />,
      },

      {
        path: "user-dashboard",
        element: <UserDashboardLayout />,
        children: [
          {
            index: true,
            element: <UserDashboard />,
          },
          {
            path: "links",
            element: <UsefulLinksManagement />,
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      // Correcting nested paths to be relative
      {
        path: "links",
        element: <UsefulLinksManagement />,
      },
      {
        path: "documents",
        element: <Documents />,
      },
      {
        path: "records",
        element: <Records />,
      },
      {
        path: "user-management",
        element: <UserManagement />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "add-user",
        element: <AddUserForm />,
      },
      {
        path: "vehicle-inspection",
        element: <VehicleInspectionForm />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundView />,
  },
]);

export { AppRoutes };
