import React from "react";
import Container from "@/components/Container";
import { blog } from "@/types/blog";
import Link from "next/link";

export const ContentItem: React.FC<{ item: blog }> = ({ item }) => {
  return (
    <div className="bg-bgColor text-white" key={item.id}>
      <Container>
        <div className="grid xl:grid-cols-3 gap-14 xl:max-w-[60vw] mx-auto pb-14">
          <div className="col-span-2 flex flex-col gap-6">
            <hr />
            <Link href={`/blogs/${item.slug}`}>
              <h2 className="xl:text-4xl text-xl">{item.title}</h2>
            </Link>
            <p className="text-sm opacity-50 text-justify">{item.desc}</p>
          </div>
          <div className="col-span-2 xl:col-span-1">
            <div className="bg-bgColor p-6">
              <p>{item.created.slice(0, 10).replace(/-/g, "/")}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
