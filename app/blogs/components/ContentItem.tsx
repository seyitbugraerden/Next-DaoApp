import React from "react";
import Container from "@/components/Container";
function ContentItem() {
  return (
    <div className="bg-bgColor text-white">
      <Container>
        <div className="grid xl:grid-cols-3 gap-14 xl:max-w-[60vw] mx-auto pb-14">
          <div className="col-span-2 flex flex-col gap-6">
            <hr />
            <h2 className="xl:text-5xl text-xl">01.Dolar istam est</h2>
            <p className="text-sm opacity-50 text-justify">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat.
            </p>
          </div>
          <div className="col-span-2 xl:col-span-1">
            <div className="bg-bgColor p-6">
              <p>
                tl;dr Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ContentItem;
