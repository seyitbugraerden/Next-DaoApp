import { pb } from "@/lib/pb";
import { loginUserType } from "../../types/loginUserType";

export const fetchBlog = async () => {
  return await pb.collection("Blogs").getFullList();
};

export const fetchHeaders = async () => {
  return await pb.collection("Headers").getFullList({ requestKey: null });
};

export const fetchUsers = async () => {
  return await pb.collection("Users").getFullList({ requestKey: null });
};

export const loginUser = async ({ email, password }: loginUserType) => {
  try {
    const authData = await pb
      .collection("Users")
      .authWithPassword(email, password, { requestKey: null });
    pb.authStore.save(authData.token, authData.record);
    return authData;
  } catch (error) {
    console.error("Authentication error:", error);
    throw error;
  }
};

export const fetchAboutUs = async () => {
  return await pb.collection("about_us").getOne("hkfgmjfldkcmhgj");
};
export const fetchLegal = async () => {
  return await pb.collection("legal").getOne("tahhsb5pf3pm0sz");
};
export const fetchCareer = async () => {
  return await pb.collection("career").getOne("dfhnbvgyjklytre");
};
