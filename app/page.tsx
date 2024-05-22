import Charge from "@/components/Maincomps/Charge";
import Counters from "@/components/Maincomps/Counters";
import Customers from "@/components/Maincomps/Customers";
import Doyoulikefaces from "@/components/Maincomps/Doyoulikefaces";
import Mission from "@/components/Maincomps/Mission";
import TripleImages from "@/components/Maincomps/TripleImages";
import Whatwedo from "@/components/Maincomps/Whatwedo";
import Whatwedontknow from "@/components/Maincomps/Whatwedontknow";

export default function Home() {
  return (
    <>
      <Mission />
      <TripleImages />
      <Whatwedo />
      <Whatwedontknow/>
      <Doyoulikefaces/>
      <Charge/>
      <Counters/>
      <Customers/>
    </>
  );
}
