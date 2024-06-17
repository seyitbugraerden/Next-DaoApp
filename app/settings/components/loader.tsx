"use client";
import React, { useState } from "react";
import "ldrs/ring";
import { reuleaux } from "ldrs";
function Loader() {
  reuleaux.register();
  const [delay, setDelay] = useState(true);
  setTimeout(() => {
    setDelay(false);
  }, 3000);
  return (
    <div
      className={`loader-section flex justify-center items-center w-full h-full absolute bg-black ${
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
