import Link from "next/link";
import React from "react";
import { header } from "../../types/header";
import { cookies } from "next/headers";
import HeaderLogOut from "./HeaderLogOut";

const HeaderItem: React.FC<header> = ({ item }) => {
  const token: any = cookies().get("DaoAuth");
  return (
    <li>
      {item.title === "User" ? (
        token ? (
          <HeaderLogOut />
        ) : (
          <Link
            href={`${item.link}`}
            className="no-underline text-white hover:opacity-70 duration-500"
            aria-label="Homepage"
          >
            {item.title}
          </Link>
        )
      ) : (
        <Link
          href={`${item.link}`}
          className="no-underline text-white hover:opacity-70 duration-500"
          aria-label="Homepage"
        >
          {item.title}
        </Link>
      )}
    </li>
  );
};

export default HeaderItem;
