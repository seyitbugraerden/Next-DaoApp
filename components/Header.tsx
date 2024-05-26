import Link from "next/link";
import React from "react";
import Container from "./Container";
import HeaderItem from "./header/HeaderItem";
import { fetchHeaders } from "./fetch/fetch";

async function Header() {
  const headerList = await fetchHeaders();
  return (
    <header className="bg-mainColor">
      <Container>
        <nav id="navScroll" className=" bg-dark text-white py-5">
          <div className="flex flex-row justify-between items-center">
            <Link
              className="text-white flex flex-row items-center gap-2 no-underline hover:opacity-70 duration-500"
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-stack"
                viewBox="0 0 16 16"
              >
                <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
                <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
              </svg>
              <span className="text-bold text-3xl !no-underline">Klar</span>
            </Link>

            <ul className="flex flex:md-row  items-center justify-center mb-0 gap-3">
              {headerList.map((item) => (
                <HeaderItem item={item} key={item.id} />
              ))}
            </ul>
            <Link
              href="https://github.com/seyitbugraerden"
              target="_blank"
              aria-label="Download this template"
              className="border-[1px] no-underline text-white px-3 py-2 rounded-full hover:bg-white hover:!text-black transition animate-pulse text-xs duration-300 hidden md:block"
            >
              Go to Github
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
