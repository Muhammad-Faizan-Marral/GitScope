"use client";

import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutContainerProps {
  children: React.ReactNode;
}

const LayoutContainer: React.FC<LayoutContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-[#0d1117] text-white flex flex-col ">
      <Header />

      <div className="flex  p-6 gap-4">

        <aside className="hidden bg-[#161f2c] md:flex-1 md:block rounded-sm"><Sidebar/></aside>

        <main className="flex-2 bg-[#161f2c] rounded-sm ">{children}</main>

      </div>


    </div>
  );
};

export default LayoutContainer;
