import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router";

import AppNavbar from "../pages/Dashboard/components/TopNavBar";
import AppFooter from "../pages/Dashboard/components/AppFooter";
import DashboardPage from "../pages/Dashboard";
import RouteGuard from "./routeGuard";
import { paths } from "./paths";

// Layout: Dashboard (extended feel: compact nav + hero inside navbar)
function DashboardLayout(): React.JSX.Element {
  return (
    <div className="relative min-h-dvh bg-[#F9F9F9] flex flex-col">
      <AppNavbar />

      {/* ✅ Make page content sit ABOVE header art, while still overlapping */}
      <main className="relative z-20 flex-1 -mt-[18px]">
        <Outlet />
      </main>

      <AppFooter />
    </div>
  );
}

// Layout: Default pages (compact)
function DefaultLayout(): React.JSX.Element {
  return (
    <div className="relative min-h-dvh bg-[#F9F9F9] flex flex-col">
      <AppNavbar />

      {/* ✅ Same rule here for consistency */}
      <main className="relative z-20 flex-1">
        <Outlet />
      </main>

      <AppFooter />
    </div>
  );
}

const router = createBrowserRouter([
  { path: paths.root, element: <Navigate to={paths.dashboard} replace /> },

  {
    path: paths.dashboard,
    element: (
      <RouteGuard>
        <DashboardLayout />
      </RouteGuard>
    ),
    children: [{ index: true, element: <DashboardPage /> }],
  },

  {
    element: (
      <RouteGuard>
        <DefaultLayout />
      </RouteGuard>
    ),
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
