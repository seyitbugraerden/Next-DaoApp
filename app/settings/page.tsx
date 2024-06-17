import React from "react";
import Container from "@/components/Container";
import InputComp from "@/components/Input";
import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";
import { pb } from "@/lib/pb";
import ProfileInt from "./components/profileInt";

async function Settings() {
  const token: any = cookies().get("DaoAuth")?.value;
  const decodedToken = jwt.decode(token) as JwtPayload;
  const userId = decodedToken?.id;
  
  return (
    <div className="bg-bgColor text-white h-screen flex justify-center items-center">
      <Container>
        <div className="grid xl:grid-cols-2 gap-14  mx-auto">
          <ProfileInt userId={userId} />
          <div className="flex flex-col gap-6">
            <h2 className="xl:text-4xl text-xl">Blogs</h2>
            <p className="text-sm opacity-50 text-justify">2</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Settings;
