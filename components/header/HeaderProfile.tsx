"use client";
import Image from "next/image";
import React from "react";
import profile from "@/public/profile.svg";
function HeaderProfile() {
  return (
    <Image
      onClick={() => {
        window.location.href = "/settings";
      }}
      src={profile}
      alt="Profile Icon"
      height={30}
      width={30}
      className="hover:opacity-50 transiiton duration-300 cursor-pointer inline-block scale-75 ms-4"
    />
  );
}

export default HeaderProfile;
