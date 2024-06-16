import MainText from "@/components/MainText";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { pb } from "@/lib/pb";

function isJwtPayload(token: string | jwt.JwtPayload | null): token is jwt.JwtPayload {
  return token !== null && typeof token !== "string";
}

async function page() {
  const token = cookies().get("DaoAuth")?.value;
  const decodedToken = token ? jwt.decode(token) : null;
  const userId = isJwtPayload(decodedToken) ? decodedToken.id : null;

  const career = userId
    ? await pb.collection("users").getOne(userId, { expand: "relField1,relField2.subRelField" }).then(record => ({
        title: record.career?.title || "No title available",
        description: record.career?.description || "No description available",
        subject: record.career?.subject || "No subject available",
      })).catch(() => ({
        title: "Error",
        description: "Unable to retrieve career information",
        subject: "N/A",
      }))
    : {
        title: "Ascend Your Career: Strategies for Success",
        description: "In today's competitive job market, navigating your career path requires strategic planning and continuous self-improvement. By setting clear goals, embracing lifelong learning, and building a strong network, you can position yourself for success. Seek feedback, demonstrate leadership, and remain adaptable in the face of change. Promote your achievements and leverage your strengths to propel your career forward. Remember, each step you take is an opportunity for growth, leading you closer to realizing your professional aspirations.",
        subject: "Career",
      };

  return (
    <MainText
      title={career.title}
      description={career.description}
      subject={career.subject}
    />
  );
}

export default page;
