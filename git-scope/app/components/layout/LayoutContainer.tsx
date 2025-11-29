"use client"
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useStore } from "@/app/lib/store";

interface LayoutContainerProps {
  children: React.ReactNode;
}

const LayoutContainer: React.FC<LayoutContainerProps> = ({ children }) => {
  
  const themeValue = useStore((state) => state.theme);
  const isDark = themeValue === "Dark";

  return (
    <div
      className={`
        min-h-screen w-full flex flex-col 
        ${isDark ? "bg-[#0d1117] text-white" : "bg-[#f6f8fa] text-black"}
      `}
    >
      {/* Header */}
      <Header />

      {/* Content wrapper */}
      <div className="flex gap-10 p-6 items-start">

        {/* Sidebar */}
        <aside
          className={`
            hidden md:block w-96 rounded-sm 
            ${isDark ? "bg-[#161b22]" : "bg-white shadow-sm"}
          `}
        >
          <Sidebar />
        </aside>

        {/* Main content */}
        <main
          className={`
            rounded-sm p-4 h-auto flex-1 
            ${isDark ? "bg-[#161b22]" : "bg-white shadow-sm"}
          `}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default LayoutContainer;
