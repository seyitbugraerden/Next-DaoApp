import Charge from "@/components/Charge";
import Counters from "@/components/Counters";
import Customers from "@/components/Customers";
import Doyoulikefaces from "@/components/Doyoulikefaces";
import Mission from "@/components/Mission";
import TripleImages from "@/components/TripleImages";
import Whatwedo from "@/components/Whatwedo";
import Whatwedontknow from "@/components/Whatwedontknow";

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
