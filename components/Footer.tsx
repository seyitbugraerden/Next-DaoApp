import Link from "next/link";
import React from "react";
import Container from "./Container";

function Footer() {
  return (
    <footer className="bg-mainColor">
      <Container>
        <div className="container grid grid-cols-2 gap-10 xl:grid-cols-4 py-20 text-white">
          <div>
            <Link
              className="text-white hover:opacity-70 duration-500 no-underline"
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-stack inline-block me-3"
                viewBox="0 0 16 16"
              >
                <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
                <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
              </svg>
              <span className="no-underline text-3xl opacity-50">Klar</span>
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <span className="opacity-70">Company</span>
            <Link href="/about-us" className="text-white hover:opacity-70 duration-500">
              About us
            </Link>
            <Link href="/legal" className="text-white hover:opacity-70 duration-500">
              Legal
            </Link>

            <Link href="/career" className="text-white hover:opacity-70 duration-500">
              Career
            </Link>
            <Link href="/contact" className="text-white hover:opacity-70 duration-500">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <span className="opacity-70">Services</span>
            <Link href="#" className="text-white hover:opacity-70 duration-500">
              Pricing
            </Link>
            <Link href="#" className="text-white hover:opacity-70 duration-500">
              Products
            </Link>
            <Link href="#" className="text-white hover:opacity-70 duration-500">
              Customers
            </Link>
            <Link href="#" className="text-white hover:opacity-70 duration-500">
              Portfolio
            </Link>
            <Link href="#" className="text-white hover:opacity-70 duration-500">
              Success Stories
            </Link>
            <Link href="#" className="text-white hover:opacity-70 duration-500">
              More
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <span className="opacity-70">Support</span>
            <Link href="#" className="text-white hover:opacity-70 duration-500">
              Legal
            </Link>
            <Link href="#" className="text-white hover:opacity-70 duration-500">
              Career
            </Link>
            <Link href="#" className="text-white hover:opacity-70 duration-500">
              Contact
            </Link>
          </div>
        </div>
        <div className="text-white text-center py-3 bg-mainColor">
          <span className="opacity-50">Made by</span>
          <Link
            href="https://github.com/seyitbugraerden"
            className="text-white hover:opacity-70 duration-500 mx-2"
            target="_blank"
          >
            Github
          </Link>
          <span className="opacity-50">by Seyit Buğra Erden</span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
