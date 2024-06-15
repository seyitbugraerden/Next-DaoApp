import React from "react";
import ContentPage from "./components/ContentPage";
import ContentImage from "./components/ContentImage";
import { fetchBlog } from "@/components/fetch/fetch";
import { blog } from "@/components/types/blog";
import { ContentItem } from "./components/ContentItem";

async function Content() {
  const blogVeri: any = await fetchBlog();
  return (
    <>
      <ContentPage />
      <ContentImage />
      {blogVeri.map((item: blog) => (
        <ContentItem item={item} key={item.id} />
      ))}
    </>
  );
}

export default Content;
