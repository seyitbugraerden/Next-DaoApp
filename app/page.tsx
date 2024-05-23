import Charge from "@/components/Maincomps/Charge";
import Customers from "@/components/Maincomps/Customers";
import Doyoulikefaces from "@/components/Maincomps/Doyoulikefaces";
import Mission from "@/components/Maincomps/Mission";
import TripleImages from "@/components/Maincomps/TripleImages";
import Whatwedo from "@/components/Maincomps/Whatwedo";
import Whatwedontknow from "@/components/Maincomps/Whatwedontknow";
import { pb } from "@/lib/pb";

export default async function Home() {
  const records = await pb.collection('users').getFullList()
  console.log(records);
  return (
    <>
      <Mission />
      <TripleImages />
      <Whatwedo />
      <Whatwedontknow />
      <Doyoulikefaces />
      <Charge />
      <Customers />
    </>
  );
}
