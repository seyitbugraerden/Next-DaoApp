import { pb } from "@/lib/pb";
import { loginUserType } from "../types/loginUserType";

export const fetchBlog = async () => {
  return await pb.collection("Blogs").getFullList();
};

export const fetchHeaders = async () => {
  return await pb.collection("Headers").getFullList();
};

export const fetchUsers = async () => {
  return await pb.collection("Users").getFullList();
};

export const loginUser = async ({ email, password }: loginUserType) => {
  try {
    const authData = await pb
      .collection("Users")
      .authWithPassword(email, password);
    pb.authStore.save(authData.token, authData.record);
    return authData;
  } catch (error) {
    console.error("Authentication error:", error);
    throw error;
  }
};
