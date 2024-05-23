import Link from "next/link";
import React from "react";
import { header } from "../types/header";

const HeaderItem: React.FC<header> = ({ item }) => {
  return (
    <li>
      <Link
        href={`${item.link}`}
        className="no-underline text-white hover:opacity-70 duration-500"
        aria-label="Homepage"
      >
        {item.title}
      </Link>
    </li>
  );
};

export default HeaderItem;
