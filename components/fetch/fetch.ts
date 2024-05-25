import { pb } from "@/lib/pb";

pb.autoCancellation(false);
export const fetchBlog = async () => {
  return await pb.collection("Blogs").getFullList();
};
