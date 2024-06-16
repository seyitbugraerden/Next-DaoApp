"use client";
import logout from "@/public/logout.svg";
import Image from "next/image";

function HeaderLogOut() {
  return (
    <Image
      onClick={() => {
        document.cookie = `DaoAuth=; max-age=0;`;
        window.location.href = "/";
      }}
      src={logout}
      alt="Log Out"
      height={30}
      width={30}
      className="hover:opacity-50 transiiton duration-300 cursor-pointer inline-block"
    />
  );
}

export default HeaderLogOut;
