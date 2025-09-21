import React from "react";
import Sidebar from "../../components/Dash/Sidebar";
import MainContent from "../../components/Dash/MainContent";
import Neptune from "../../components/Planets/Neptune";

const DashboardPage = ({ user }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-full top-0 absolute left-0 object-cover z-0">
        <Neptune />
      </div>
      <div className="absolute w-full h-full z-10 flex items-center">
        <Sidebar user={user} />
        <MainContent />
      </div>
    </div>
  );
};

export default DashboardPage;
