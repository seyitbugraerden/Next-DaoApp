import { pb } from "@/lib/pb";
import React from "react";

async function Page() {
  const records = await pb.collection("Blogs").getFullList({
    sort: "-created",
  });
  return <div>Page</div>;
}

export default Page;
