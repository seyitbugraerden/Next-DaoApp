import { pb } from "@/lib/pb";

export const fetchBlogData = async () => {
  try {
    const response = await fetch(
      "https://json-placeholder.mock.beeceptor.com/posts"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const fetchBlog = async () => {
  try {
    const response = await pb.collection("Blogs").getFullList();
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
