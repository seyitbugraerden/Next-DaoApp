import HeaderLogOut from "@/components/header/HeaderLogOut";
import { pb } from "@/lib/pb";
import React from "react";
import BlogDelete from "./blogDelete";

const BlogList: React.FC<any> = async ({ userId }) => {
  const records = await pb.collection("Blogs").getFullList({
    sort: "-user_id",
  });
  const blogData = records.filter((item) => item.user_id === userId);
  const userBlog = blogData.filter((item) => item.user_id === userId);
  return (
    <ul className="overflow-auto">
      {userBlog.map((item, index) => (
        <li
          className="my-5 p-3 bg-black  flex justify-between items-center gap-3"
          key={index}
        >
          <p className="!line-clamp-1">{item.title}</p>
          <BlogDelete blogId={item.id} />
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
