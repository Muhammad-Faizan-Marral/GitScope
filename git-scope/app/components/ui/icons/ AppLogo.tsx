import React from "react";
import { AiOutlineGitlab } from "react-icons/ai";
const AppLogo = () => {
  return (
    <div className="flex items-center gap-4 ml-2.5">
      <AiOutlineGitlab  className="text-4xl"/>
      <h1 className="text-2xl font-medium leading-tight ">Git Explorer</h1>
    </div>
  );
};

export default AppLogo;
