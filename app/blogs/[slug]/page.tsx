"use client";
import Container from "@/components/Container";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import "ldrs/ring";
import { reuleaux } from "ldrs";
import Loader from "@/app/settings/components/loader";
interface Blog {
  id: string;
  slug: string;
  title: string;
  desc: string;
}

function Page() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const path = usePathname();
  const slugElement = path.split("/").pop();

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await fetch(
          "https://nao-blogapp.pockethost.io/api/collections/Blogs/records"
        );
        const data = await response.json();
        const foundItem = data.items.find(
          (item: Blog) => item.slug === slugElement
        );
        setSelectedBlog(foundItem || null);
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };

    fetchRecords();
    reuleaux.register();
  }, [slugElement]);
  return (
    <div className="bg-bgColor relative">
      <Loader />
      <Container>
        <div className="text-white py-24 xl:max-w-[30vw] mx-auto">
          {selectedBlog ? (
            <>
              <h1 className="text-6xl">{selectedBlog.title}</h1>
              <br />
              <p className="text-white opacity-50 text-xs italic">
                Author: {selectedBlog.id}
              </p>
              <hr className="mt-8" />
              <p className="lead border-top pt-5 mt-5" data-aos="fade-up">
                {selectedBlog.desc}
              </p>
            </>
          ) : (
            ""
          )}
        </div>
      </Container>
    </div>
  );
}

export default Page;
