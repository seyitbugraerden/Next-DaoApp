import Container from "@/components/Container";
import Link from "next/link";
import React from "react";
import Loader from "../settings/components/loader";

function ContactPage() {
  return (
    <>
      <Loader />
      <div className="bg-mainColor text-white text-center py-60">
        <Container>
          <span className="opacity-50">Contact</span>
          <h1 className="text-6xl font-bold xl:max-w-[50vw] mx-auto">
            Contact Me
          </h1>
          <div className="grid grid-cols-2 mt-12">
            <div>
              <Link href="https://github.com/seyitbugraerden">Github Page</Link>
            </div>
            <div>
              <Link href="mailto:seyitbugraerden@gmail.com">
                Send Me An E-Mail
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ContactPage;
