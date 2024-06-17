import Charge from "@/components/Maincomps/Charge";
import Customers from "@/components/Maincomps/Customers";
import Doyoulikefaces from "@/components/Maincomps/Doyoulikefaces";
import Mission from "@/components/Maincomps/Mission";
import TripleImages from "@/components/Maincomps/TripleImages";
import Whatwedo from "@/components/Maincomps/Whatwedo";
import Whatwedontknow from "@/components/Maincomps/Whatwedontknow";
import Loader from "./settings/components/loader";

export default async function Home() {
  return (
    <>
      <Loader />
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
