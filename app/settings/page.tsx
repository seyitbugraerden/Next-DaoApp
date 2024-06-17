"use server";
import React from "react";
import Container from "@/components/Container";
import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";
import ProfileInt from "./components/profileInt";
import BlogInt from "./components/blogInt";
import BlogList from "./components/blogList";
import Loader from "./components/loader";

async function Settings() {
  const token: any = cookies().get("DaoAuth")?.value;
  const decodedToken = jwt.decode(token) as JwtPayload;
  const userId = decodedToken?.id;

  return (
    <div className="bg-bgColor text-white h-screen flex justify-center items-center">
      <Loader />
      <Container>
        <div className="grid xl:grid-cols-2 gap-14  mx-auto">
          <ProfileInt userId={userId} />
          <div>
            <BlogInt userId={userId} />
            <BlogList userId={userId} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Settings;
