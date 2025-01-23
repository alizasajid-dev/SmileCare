import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // State for sidebar collapse

  return (
    <div className="flex h-screen flex-col md:flex-row">
      {/* Sidebar with toggle state */}
      <Sidebar isOpen={isCollapsed} setIsOpen={setIsCollapsed} />

      {/* Main Content */}
      <div className={`flex-1 ${isCollapsed ? 'ml-0' : ''} transition-all`}>
        <div className="h-[10vh]">
          <Header setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} />
        </div>
        <div style={{ height: "calc(100vh - 10vh)", overflow: 'auto' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
