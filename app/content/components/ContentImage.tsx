import React from "react";
import img1 from "@/public/images/abstract12.webp";
import Image from "next/image";
import Container from "@/components/Container";
function ContentImage() {
  return (
    <div className="bg-black pb-24">
      <Container>
        <Image
          src={img1}
          width="1446"
          height="982"
          alt="abstract image"
          className="rounded-[36px] xl:max-h-[70vh] max-h-[20vh] object-cover"
        />
      </Container>
    </div>
  );
}

export default ContentImage;
