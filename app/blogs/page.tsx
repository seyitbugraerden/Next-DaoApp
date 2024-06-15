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
  let mainText =
    "Welcome to a journey through the lens of everyday life, where each moment is captured in words that resonate with the essence of our experiences. From reflections on personal growth to explorations of the world around us, this blog invites you to delve into stories that inspire, provoke thought, and ignite curiosity. It's a celebration of the ordinary and the extraordinary, woven together in a tapestry of emotions and insights. Join us as we navigate the intricacies of existence and discover the beauty in both the expected and the unexpected.";
  if (userId) {
    const record = await pb.collection("users").getOne(userId, {
      expand: "relField1,relField2.subRelField",
    });
    mainText = record.blogtext;
  }

  return (
    <>
      <ContentPage mainText={mainText} />
      <ContentImage />
      {blogVeri.map((item: blog) =>
        item.user_id === userId ? <ContentItem item={item} key={item.id} /> : ""
      )}
    </>
  );
}

export default Content;
