"use client";
import React, { useEffect, useState } from "react";
import InputComp from "@/components/Input";
import Button from "@/components/Button";

const ProfileInt: React.FC<any> = ({ userId }) => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://nao-blogapp.pockethost.io/api/collections/users/records/${userId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const userData = await response.json();
        setUserData(userData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, []);

  const updateUser = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://nao-blogapp.pockethost.io/api/collections/users/records/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        window.location.reload();
      }
    } catch (error) {
      console.error("Error during login request:", error);
    }
  };

  return (
    <div className="flex flex-col gap-6 border-r px-3">
      {userData ? (
        <>
          <h2 className="xl:text-4xl text-xl">Profile Information</h2>
          <form onSubmit={updateUser} className="grid grid-cols-2 gap-3">
            <InputComp
              type="text"
              label="Username"
              subtitle=""
              value={userData.username}
              onChange={(e) =>
                setUserData((prev: any) => ({
                  ...prev,
                  username: e.target.value,
                }))
              }
            />

            <InputComp
              type="text"
              label="Name"
              subtitle=""
              value={userData.name}
              onChange={(e) =>
                setUserData((prev: any) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
            />
            <InputComp
              type="password"
              label="Old Password"
              subtitle=""
              value={userData.oldPassword}
              onChange={(e) =>
                setUserData((prev: any) => ({
                  ...prev,
                  oldPassword: e.target.value,
                }))
              }
            />
            <InputComp
              type="password"
              label="New Password"
              subtitle=""
              value={userData.password}
              onChange={(e) =>
                setUserData((prev: any) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
            <InputComp
              type="password"
              label="New Password Confirm"
              subtitle=""
              value={userData.passwordConfirm}
              onChange={(e) =>
                setUserData((prev: any) => ({
                  ...prev,
                  passwordConfirm: e.target.value,
                }))
              }
            />
            <InputComp
              type="text"
              label="About"
              subtitle=""
              value={userData.aboutme}
              onChange={(e) =>
                setUserData((prev: any) => ({
                  ...prev,
                  aboutme: e.target.value,
                }))
              }
            />
            <InputComp
              type="text"
              label="Blog Header"
              subtitle=""
              value={userData.blogtext}
              onChange={(e) =>
                setUserData((prev: any) => ({
                  ...prev,
                  blogtext: e.target.value,
                }))
              }
            />
            <InputComp
              type="text"
              label="Description"
              subtitle=""
              value={userData.career.description}
              onChange={(e) => {
                setUserData((prev: any) => ({
                  ...prev,
                  career: {
                    title: userData.career.title,
                    description: e.target.value,
                    subject: userData.career.subject,
                  },
                }));
              }}
            />

            <Button onClick={updateUser}>Update</Button>
          </form>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProfileInt;
