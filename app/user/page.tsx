"use client";
import React, { useState } from "react";
import Container from "@/components/Container";
import InputComp from "@/components/Input";
import Button from "@/components/Button";
import { login } from "@/components/types/login";
import {  toast } from "react-toastify";
function User() {
  const [logInData, setLogInData] = useState<login>({
    email: "",
    password: "",
  });
  const notify = (infoText: any) =>
    toast(infoText, {
      theme: "dark",
    });

  const loginFunc = async (e: any) => {
    e.preventDefault();
    const logData = {
      identity: logInData.email,
      password: logInData.password,
    };
    try {
      const response = await fetch(
        "https://nao-blogapp.pockethost.io/api/collections/users/auth-with-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(logData),
        }
      );

      if (!response.ok) {
        notify("Login Failed! Try Again");
        throw new Error("Network response was not ok");
      } else {
        const responseData = await response.json();
        notify("Login successful");
        document.cookie = `DaoAuth=${responseData.token}`;
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
        return responseData;
      }
    } catch (error) {
      console.error("Error during login request:", error);
    }
  };
  return (
    <div className=" bg-bgColor text-white py-[16.45vh]">
      <Container>
        <div className="flex flex-col xl:flex-row justify-between gap-y-24">
          <form className="flex flex-col gap-5">
            <h2 className="text-4xl">Register a new account</h2>
            <InputComp
              type="email"
              label="E-mail address"
              subtitle="We'll never share your email with anyone else.
 "
            />
            <InputComp type="password" label="Password" subtitle="" />
            <div className="flex flex-row items-start justify-start gap-4">
              <InputComp type="checkbox" label="" subtitle="" />
              <p className="xl:max-w-[30vw] text-xs">
                If you really don´t want any newsletter check this box. Then you
                just agree to receive our marketing mails and product stuff. If
                you check this box we will not send out our newsletter to you at
                all...on mondays.
              </p>
            </div>
            <div className="relative">
              <Button>Submit</Button>
            </div>
          </form>
          <form
            onSubmit={(e) => {
              loginFunc(e);
            }}
            className="flex flex-col gap-5"
          >
            <h2 className="text-4xl">Log In</h2>
            <InputComp
              type="email"
              label="E-mail address"
              subtitle="We'll never share your email with anyone else."
              onChange={(e) => {
                setLogInData((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }));
              }}
            />
            <InputComp
              type="password"
              label="Password"
              subtitle=""
              onChange={(e) => {
                setLogInData((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }));
              }}
            />
            <div className="flex flex-row items-start justify-start gap-4">
              <InputComp type="checkbox" label="" subtitle="" />
              <p className="xl:max-w-[30vw] text-xs">
                If you really don´t want any newsletter check this box. Then you
                just agree to receive our marketing mails and product stuff. If
                you check this box we will not send out our newsletter to you at
                all...on mondays.
              </p>
            </div>
            <div className="relative">
              <Button type="submit">Log In</Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default User;
