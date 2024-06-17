"use client";
import React, { useState } from "react";
import "ldrs/ring";
import { reuleaux } from "ldrs";
function Loader() {
  reuleaux.register();
  const [delay, setDelay] = useState(true);
  setTimeout(() => {
    setDelay(false);
  }, 1000);
  return (
    <div
      className={`loader-section flex justify-center items-center w-screen h-screen top-0 left-0 fixed bg-black z-[9999] ${
        !delay && "hidden"
      }`}
    >
      <l-reuleaux
        size="37"
        stroke="5"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.2"
        color="white"
      ></l-reuleaux>
    </div>
  );
}

export default Loader;
