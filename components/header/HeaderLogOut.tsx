"use client";
import logout from "@/public/logout.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

function HeaderLogOut() {
  const [cookies, setCookie, removeCookie] = useCookies(["DaoAuth"]);
  const Router = useRouter();
  return (
    <Image
      onClick={() => {
        removeCookie("DaoAuth");
        Router.refresh();
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
