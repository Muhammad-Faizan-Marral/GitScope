"use client";
import React from "react";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { SlUserFollowing } from "react-icons/sl";
import { SlUserFollow } from "react-icons/sl";
import { GoRepo } from "react-icons/go";
import { CiStar } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="flex items-center justify-center flex-col p-4 mt-4">
      <div className="h-42 w-42 rounded-full overflow-hidden border-4 border-gray-500 shadow-sm relative">
        <Image src="/userDp.jpg" alt="profile" fill className="object-cover" />
      </div>

      <section className="flex items-center justify-center flex-col  mt-2.5">
        <h1 className="text-[2rem] text-gray-300 font-bold">Alex Turner</h1>
        <h2 className="text-2xl text-black font-light tracking-wide">
          @octocat
        </h2>
        <p className="text-gray-400 tracking-wider text-[19px] text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem pariatur
          ratione veritatis alias. Atque doloribus minima sunt et veritatis
          laudantium! Vel, exercitationem quisquam! Sit aperiam mollitia
          reprehenderit iste, delectus rerum!
        </p>
      </section>

      <main className="flex items-start justify-start flex-col gap-5 w-full mt-9">
        <div className="flex items-center justify-start gap-2">
          <CiLocationOn className="text-2xl font-bold" />
          <h1 className="text-[1.2rem] font-extralight tracking-wide text-gray-200 leading-1">
            San Fransico ,CA
          </h1>
        </div>
        <div className="flex items-center justify-start gap-2">
          <SlUserFollowing className="text-2xl font-bold" />
          <h1 className="text-[1.2rem]  tracking-wide text-gray-200 leading-1">
            <span className="font-bold">100 </span>Follower
          </h1>
        </div>
        <div className="flex items-center justify-start gap-2">
          <SlUserFollow className="text-2xl font-bold" />
          <h1 className="text-[1.2rem] font-extralight tracking-wide text-gray-200 leading-1">
            <span className="font-bold">50 </span>Following
          </h1>
        </div>
        <div className="flex items-center justify-start gap-2">
          <GoRepo className="text-2xl font-bold" />
          <h1 className="text-[1.2rem] font-extralight tracking-wide text-gray-200 leading-1">
            <span className="font-bold">120 </span>Public Repos
          </h1>
        </div>
        <div className="flex items-center justify-start gap-2">
          <CiStar className="text-2xl font-bold" />
          <h1 className="text-[1.2rem] font-extralight tracking-wide text-gray-200 leading-1">
            <span className="font-bold">1.8k </span>Total Star
          </h1>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
