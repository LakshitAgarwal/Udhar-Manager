import React from "react";
import { NavbarComp } from "@/components/common/Navbar-comp";

const DashboardPage = () => {
  return (
    <div>
      <NavbarComp />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-white">
          Welcome to your Dashboard
        </h1>
        <p className="mt-4 text-gray-300">You have successfully logged in.</p>
      </div>
    </div>
  );
};

export default DashboardPage;
