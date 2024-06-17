"use client";
import React from "react";
import deleteIcon from "@/public/delete.svg";
import Image from "next/image";
import { pb } from "@/lib/pb";

const BlogDelete: React.FC<any> = ({ blogId }) => {
  return (
    <Image
      src={deleteIcon}
      width={24}
      height={24}
      alt="icon"
      className="hover:opacity-50 transition duration-500 cursor-pointer"
      onClick={async () => {
        try {
          const response = await fetch(
            `https://nao-blogapp.pockethost.io/api/collections/Blogs/records/${blogId}`,
            {
              method: "DELETE",
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
      }}
    />
  );
};

export default BlogDelete;
