import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router";

import AppNavbar from "../pages/Dashboard/components/TopNavBar";
import AppFooter from "../pages/Dashboard/components/AppFooter";
import DashboardPage from "../pages/Dashboard/DashboardPage";

// Layout: Dashboard (extended)
function DashboardLayout(): React.JSX.Element {
  return (
    <div className="min-h-dvh bg-[#F9F9F9] flex flex-col">
      <AppNavbar mode="extended" />

      <main className="flex-1">
        <Outlet />
      </main>

      <AppFooter />
    </div>
  );
}

// Layout: Default pages (compact)
function DefaultLayout(): React.JSX.Element {
  return (
    <div className="min-h-dvh bg-[#F9F9F9] flex flex-col">
      <AppNavbar mode="compact" />

      <main className="flex-1">
        <Outlet />
      </main>

      <AppFooter />
    </div>
  );
}

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/dashboard" replace /> },

  // /dashboard uses extended navbar
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [{ index: true, element: <DashboardPage /> }],
  },

  // everything else uses compact navbar
  {
    element: <DefaultLayout />,
    children: [
      // examples:
      // { path: "customers", element: <CustomersPage /> },
      // { path: "system-management", element: <SystemManagementPage /> },
    ],
  },
]);

export default function AppRouter(): React.JSX.Element {
  return <RouterProvider router={router} />;
}
