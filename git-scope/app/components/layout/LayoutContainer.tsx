
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutContainerProps {
  children: React.ReactNode;
}

const LayoutContainer: React.FC<LayoutContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-[#0d1117] text-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Content wrapper */}
      <div className="flex gap-10 p-6 items-start">
        {/* Sidebar: fixed width */}
        <aside className="hidden md:block w-96 bg-[#161f2c] rounded-sm">
          <Sidebar />
        </aside>

        {/* Main content: height adjusts according to content */}
        <main className="bg-[#161f2c] rounded-sm p-4 h-auto flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default LayoutContainer;
