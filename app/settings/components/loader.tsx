"use client";
import React, { useState, useEffect } from "react";
import "ldrs/ring";
import { reuleaux } from "ldrs";

function Loader() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      reuleaux.register();
    }
  }, []);

  const [delay, setDelay] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDelay(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`loader-section flex justify-center items-center w-screen h-screen top-0 left-0 fixed bg-black z-[9999] ${
        !delay ? "hidden" : ""
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
