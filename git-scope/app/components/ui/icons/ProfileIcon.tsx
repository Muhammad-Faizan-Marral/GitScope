"use client";
import React from "react";
import { useStore } from "@/app/lib/store";

const ProfileIcon = () => {
  const username = useStore((state) => state.username);
  const theme = useStore((state) => state.theme);

  // First letter → uppercase
  const firstLetter = username ? username.charAt(0).toUpperCase() : "?";

  return (
    <div
      className={`
        h-10 w-10 rounded-full flex items-center justify-center font-semibold shadow-md
        transition-all duration-300
        ${
          theme === "Dark"
            ? "bg-linear-to-br from-[#3b82f6] to-[#1f2937] text-white"
            : "bg-linear-to-br from-blue-400 to-gray-300 text-black"
        }
      `}
    >
      <span>{firstLetter}</span>
    </div>
  );
};

export default ProfileIcon;
