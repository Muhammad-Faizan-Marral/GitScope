"use client";
import React, { useState } from "react";
import SettingsIcon from "../ui/icons/SettingsIcon";
import ProfileIcon from "../ui/icons/ProfileIcon";
import SearchBar from "../ui/SearchBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import AppLogo from "../ui/icons/ AppLogo";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {/* HEADER */}
      <div className="border-b-2 border-gray-500 p-6 flex items-center justify-between">
        <AppLogo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center gap-7 mr-3">
          <SearchBar />
          <SettingsIcon />
          <ProfileIcon />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="block md:hidden text-3xl"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {openMenu && (
        <div className="md:hidden w-full p-4 flex items-center justify-center  flex-wrap gap-5 bg-[#161b22] text-white border-b border-gray-600">
          <SearchBar />
          <SettingsIcon />
          <ProfileIcon />
        </div>
      )}
    </>
  );
};

export default Header;
