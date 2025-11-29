"use client";

import React from "react";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { SlUserFollowing, SlUserFollow } from "react-icons/sl";
import { GoRepo } from "react-icons/go";
import { useStore } from "@/app/lib/store";
import { ToastContainer, Bounce, toast } from "react-toastify";

const Sidebar = () => {
  const userInfo = useStore((state) => state.userInfo);
  const loading = useStore((state) => state.loading);
  const error = useStore((state) => state.error);
  const notify = () =>
    toast("Please try again after a few minutes ... Thanks ", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  if (error) {
    notify();
  }

  const avatar =
    userInfo?.avatar_url && userInfo.avatar_url !== ""
      ? userInfo.avatar_url
      : "/userDp.jpg";

  return (
    <div className="flex items-center justify-center flex-col p-4 mt-4">
      <ToastContainer />
      {/* PROFILE IMAGE */}
      <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-gray-500 shadow-sm">
        <Image src={avatar} alt="profile" fill className="object-cover" />
      </div>

      {/* USER NAME + BIO */}
      <section className="flex items-center justify-center flex-col mt-2.5 text-center">
        <h1 className="text-[2rem] text-gray-300 font-bold">
          {loading ? "Loading..." : userInfo?.name?.trim() || "Alex Braven"}
        </h1>

        <h2 className="text-2xl text-black font-light tracking-wide">
          {userInfo?.login?.trim() || "@octat"}
        </h2>

        <p className="text-gray-400 tracking-wider text-[19px] text-center">
          {userInfo?.bio?.trim() ||
            "Just type a username and press enter. This is dummy data."}
        </p>
      </section>

      {/* OTHER INFO */}
      <main className="flex items-start justify-start flex-col gap-5 w-full mt-9">
        {/* LOCATION */}
        <div className="flex items-center justify-start gap-2">
          <CiLocationOn className="text-2xl font-bold" />
          <h1 className="text-[1.2rem] tracking-wide text-gray-200 leading-1">
            {userInfo?.location?.trim() || "No location available"}
          </h1>
        </div>

        {/* FOLLOWERS */}
        <div className="flex items-center justify-start gap-2">
          <SlUserFollowing className="text-2xl font-bold" />
          <h1 className="text-[1.2rem] tracking-wide text-gray-200 leading-1">
            <span className="font-bold">{userInfo?.followers ?? 0}</span>{" "}
            Followers
          </h1>
        </div>

        {/* FOLLOWING */}
        <div className="flex items-center justify-start gap-2">
          <SlUserFollow className="text-2xl font-bold" />
          <h1 className="text-[1.2rem] tracking-wide text-gray-200 leading-1">
            <span className="font-bold">{userInfo?.following ?? 0}</span>{" "}
            Following
          </h1>
        </div>

        {/* PUBLIC REPOS */}
        <div className="flex items-center justify-start gap-2">
          <GoRepo className="text-2xl font-bold" />
          <h1 className="text-[1.2rem] tracking-wide text-gray-200 leading-1">
            <span className="font-bold">{userInfo?.public_repos ?? 0}</span>{" "}
            Public Repos
          </h1>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
