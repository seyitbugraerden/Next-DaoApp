"use client";
import React, { useState } from "react";
import InputComp from "../Input";
import Button from "../Button";

function Sign() {
  const [data, setData] = useState({
    username: "test_username",
    email: "test@example.com",
    emailVisibility: true,
    password: "12345678",
    passwordConfirm: "12345678",
    name: "test",
    aboutme: "test",
    blogtext: "test",
    career: "JSON",
  });
  const submitFunc = async (e: any) => {
    e.preventDefault();
    console.log(data)
    try {
      const response = await fetch(
        "https://nao-blogapp.pockethost.io/api/collections/users/records",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <form onSubmit={submitFunc} className="flex flex-col gap-5">
      <h2 className="text-4xl">Register a new account</h2>

      <div className="grid grid-cols-2 gap-x-5 gap-y-5">
        <InputComp
          type="email"
          label="E-mail address"
          subtitle="We'll never share your email with anyone else.
 "
          onChange={(e) => {
            setData((prevData) => ({
              ...prevData,
              email: e.target.value,
            }));
          }}
        />
        <InputComp
          type="text"
          label="Name"
          subtitle=""
          onChange={(e) => {
            setData((prevData) => ({
              ...prevData,
              name: e.target.value,
            }));
          }}
        />
        <InputComp
          type="text"
          label="Username"
          subtitle=""
          onChange={(e) => {
            setData((prevData) => ({
              ...prevData,
              username: e.target.value,
            }));
          }}
        />
        <InputComp
          type="password"
          label="Password"
          subtitle=""
          onChange={(e) => {
            setData((prevData) => ({
              ...prevData,
              password: e.target.value,
            }));
          }}
        />
        <InputComp
          type="password"
          label="Password Confirm"
          subtitle=""
          onChange={(e) => {
            setData((prevData) => ({
              ...prevData,
              passwordConfirm: e.target.value,
            }));
          }}
        />
        <InputComp
          type="text"
          label="About"
          subtitle="All About Yourself For Your Blogs"
          onChange={(e) => {
            setData((prevData) => ({
              ...prevData,
              aboutme: e.target.value,
            }));
          }}
        />
        <InputComp
          type="text"
          label="Introduce Your Blogs"
          subtitle="Your Blog's Point"
          onChange={(e) => {
            setData((prevData) => ({
              ...prevData,
              blogtext: e.target.value,
            }));
          }}
        />
        <InputComp
          type="text"
          label="Career"
          subtitle="Your Career Steps"
          onChange={(e) => {
            setData((prevData) => ({
              ...prevData,
              career: e.target.value,
            }));
          }}
        />
      </div>

      <div className="flex flex-row items-start justify-start gap-4">
        <InputComp type="checkbox" label="" subtitle="" />
        <p className="xl:max-w-[30vw] text-xs">
          If you really don´t want any newsletter check this box. Then you just
          agree to receive our marketing mails and product stuff. If you check
          this box we will not send out our newsletter to you at all...on
          mondays.
        </p>
      </div>
      <div className="relative">
        <Button>Sign Up</Button>
      </div>
    </form>
  );
}

export default Sign;
