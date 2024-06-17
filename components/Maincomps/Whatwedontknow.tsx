import Image from "next/image";
import Link from "next/link";
import React from "react";
import img1 from "@/public/images/abstract3.webp";
import img2 from "@/public/images/abstract2.webp";
import img3 from "@/public/images/abstract17.webp";
import img4 from "@/public/images/abstract4.webp";
import Container from "../Container";
import { pb } from "@/lib/pb";

async function Whatwedontknow() {
  const resultList = await pb.collection("Blogs").getList(1, 6);
  const blogItems = resultList.items.reverse();
  return (
    <div className="bg-black py-36">
      <Container>
        <div
          className="grid grid-cols-1 xl:grid-cols-2"
          style={{
            alignItems: "start",
            gap: "5rem",
            gridAutoFlow: "dense",
          }}
        >
          <div className="flex flex-col gap-24">
            <div className="bg-bgColor rounded-[36px]">
              <Image
                src={img1}
                width="582"
                height="327"
                alt="abstract image"
                className="rounded-t-[36px]"
                loading="lazy"
              />
              <div className="px-10 pb-24 pt-10">
                <Link href={`blogs/${blogItems[0].slug}`}>
                  <h2 className="text-white text-4xl font-medium line-clamp-2">
                    {blogItems[0].title}
                  </h2>
                </Link>
                <p className="py-2 text-white opacity-50 italic">
                  {blogItems[0].user_id}
                </p>
                <p className="text-white opacity-50 mt-2 text-lg line-clamp-3 text-justify">
                  {blogItems[0].desc}
                </p>
              </div>
            </div>
            <div className="bg-bgColor rounded-[36px]">
              <div className="bg-dark shadow rounded-5 p-0">
                <Image
                  src={img3}
                  width="582"
                  height="390"
                  alt="abstract image"
                  className="rounded-t-[36px]"
                  loading="lazy"
                />
                <div className="px-10 pb-24 pt-10">
                  <Link href={`blogs/${blogItems[1].slug}`}>
                    <h2 className="text-white text-4xl font-medium line-clamp-2">
                      {blogItems[1].title}
                    </h2>
                  </Link>
                  <p className="py-2 text-white opacity-50 italic">
                    {blogItems[1].user_id}
                  </p>
                  <p className="text-white opacity-50 mt-2 text-lg line-clamp-3 text-justify">
                    {blogItems[1].desc}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-bgColor rounded-[36px]">
              <div className="bg-dark shadow rounded-5 p-0">
                <Image
                  src={img3}
                  width="582"
                  height="390"
                  alt="abstract image"
                  className="rounded-t-[36px]"
                  loading="lazy"
                />
                <div className="px-10 pb-24 pt-10">
                  <Link href={`blogs/${blogItems[2].slug}`}>
                    <h2 className="text-white text-4xl font-medium line-clamp-2">
                      {blogItems[2].title}
                    </h2>
                  </Link>
                  <p className="py-2 text-white opacity-50 italic">
                    {blogItems[2].user_id}
                  </p>
                  <p className="text-white opacity-50 mt-2 text-lg line-clamp-3 text-justify">
                    {blogItems[2].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-24">
            <div className="rounded-[36px]">
              <div className="bg-dark shadow rounded-5 p-0">
                <div className="flex justify-center items-start flex-col md:p-10 px-0 py-10">
                  <span className="text-white text-4xl opacity-50">
                    Last 5 Blogs
                  </span>
                  <h2 className="text-white text-6xl">
                    Here you can find access to prominently reviewed and
                    noteworthy contents.
                  </h2>
                </div>
                <div className="rounded-5 bg-bgColor rounded-[36px]">
                  <Image
                    src={img2}
                    width="582"
                    height="327"
                    alt="abstract image"
                    className="rounded-t-[36px] max-h-96 object-cover"
                    loading="lazy"
                  />
                  <div className="px-10 pb-24 pt-10 h-full">
                    <Link href={`blogs/${blogItems[4].slug}`}>
                      <h2 className="text-white text-4xl font-medium line-clamp-2">
                        {blogItems[4].title}
                      </h2>
                    </Link>
                    <p className="py-2 text-white opacity-50 italic">
                      {blogItems[4].user_id}
                    </p>
                    <p className="text-white opacity-50 mt-2 text-lg line-clamp-3 text-justify">
                      {blogItems[4].desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-bgColor rounded-[36px]">
              <div className="bg-dark shadow rounded-5 p-0">
                <Image
                  src={img4}
                  width="582"
                  height="327"
                  alt="abstract image"
                  className="rounded-t-[36px]"
                  loading="lazy"
                />
                <div className="px-10 pb-24 pt-10 h-full">
                  <Link href={`blogs/${blogItems[3].slug}`}>
                    <h2 className="text-white text-4xl font-medium line-clamp-2">
                      {blogItems[3].title}
                    </h2>
                  </Link>
                  <p className="py-2 text-white opacity-50 italic">
                    {blogItems[3].user_id}
                  </p>
                  <p className="text-white opacity-50 mt-2 text-lg line-clamp-3 text-justify">
                    {blogItems[3].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Whatwedontknow;
