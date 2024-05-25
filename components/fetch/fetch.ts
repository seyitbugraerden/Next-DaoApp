import { pb } from "@/lib/pb";


export const fetchBlog = async () => {
  return await pb.collection("Blogs").getFullList();
};
