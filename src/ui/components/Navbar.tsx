"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";

import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <Fragment>
      <MobileNavbar />
      <div className="z-40 hidden items-center justify-between py-10 md:flex md:w-[1024px] md:max-w-[1024px]">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12">
            <Image src="/icons/logo.png" alt="Logo" fill={true} />
          </div>
          <h1 className="text-2xl font-medium text-white">
            Fraser Hack Club
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <a href="https://www.youtube.com/@fhchackclub" target="_blank">
            <i className="fab fa-youtube text-xl text-white transition duration-300 hover:text-m-300" />
          </a>
          <a href="https://tiktok.com/@fraserhackclub" target="_blank">
            <i className="fab fa-tiktok text-xl text-white transition duration-300 hover:text-m-300" />
          </a>
          <a
            href="https://discord.gg/zpe6P2gEdZ"
            target="_blank"
            className="relative flex transform select-none items-center gap-2 overflow-hidden rounded-md bg-white px-5 py-2 duration-300 hover:scale-105"
          >
            <i className="fab fa-discord text-b-800" />
            <p className="font-medium text-b-800">Join</p>
          </a>
        </div>
      </div>
    </Fragment>
  );
}
