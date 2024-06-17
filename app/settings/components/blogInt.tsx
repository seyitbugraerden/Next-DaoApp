"use client";
import Button from "@/components/Button";
import InputComp from "@/components/Input";
import React, { useState } from "react";

type blogIng = {
  userId?: any;
};

const BlogInt: React.FC<blogIng> = ({ userId }) => {
  const [newBlog, setNewBlog] = useState({
    title: "",
    desc: "",
    user_id: userId,
    slug: "",
  });
  const addNewBlog = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://nao-blogapp.pockethost.io/api/collections/Blogs/records",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newBlog),
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
    <div className="flex flex-col gap-6">
      <h2 className="xl:text-4xl text-xl">Blogs</h2>
      <form onSubmit={addNewBlog}>
        <InputComp
          type="text"
          label="New Blog Title"
          subtitle=""
          onChange={(e) =>
            setNewBlog((prev) => ({
              ...prev,
              title: e.target.value,
            }))
          }
        />

        <InputComp
          type="text"
          label="New Blog Description"
          subtitle=""
          onChange={(e) =>
            setNewBlog((prev) => ({
              ...prev,
              desc: e.target.value,
            }))
          }
        />
        <InputComp
          type="text"
          label="New Blog Slug"
          subtitle=""
          onChange={(e) =>
            setNewBlog((prev) => ({
              ...prev,
              slug: e.target.value,
            }))
          }
        />
        <Button onClick={addNewBlog} type="submit">
          Send Blog
        </Button>
      </form>
    </div>
  );
};

export default BlogInt;
