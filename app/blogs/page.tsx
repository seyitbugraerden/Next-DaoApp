import React from "react";
import ContentPage from "./components/ContentPage";
import ContentImage from "./components/ContentImage";
import { fetchBlog } from "@/components/fetch/fetch";
import { blog } from "@/types/blog";
import { ContentItem } from "./components/ContentItem";
import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";
import { pb } from "@/lib/pb";

async function Content() {
  const blogVeri: any = await fetchBlog();
  const token: any = cookies().get("DaoAuth")?.value;
  const decodedToken = jwt.decode(token) as JwtPayload;
  const userId = decodedToken?.id;
  const record = await pb.collection('users').getOne(userId, {
    expand: 'relField1,relField2.subRelField',
});
  return (
    <>
      <ContentPage mainText={record.blogtext}/>
      <ContentImage />
      {blogVeri.map((item: blog) =>
        item.user_id === userId ? <ContentItem item={item} key={item.id} /> : ""
      )}
    </>
  );
}

export default Content;
