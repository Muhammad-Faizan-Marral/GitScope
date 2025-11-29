"use client";
import React from "react";
import { CiSun } from "react-icons/ci";
import { MdOutlineModeNight } from "react-icons/md";
import { useStore } from "@/app/lib/store";

const SettingsIcon = () => {
  const theme = useStore((s) => s.theme);
  const setTheme = useStore((s) => s.setTheme);

  return (
    <div className="hover:cursor-pointer">
      {theme === "Dark" ? (
        <MdOutlineModeNight
          className="text-2xl rotate-180"
          onClick={() => {
            setTheme("Light");
            console.log("Dark → Light");
          }}
        />
      ) : (
        <CiSun
          className="text-2xl"
          onClick={() => {
            setTheme("Dark");
            console.log("Light → Dark");
          }}
        />
      )}
    </div>
  );
};

export default SettingsIcon;
