import Image from "next/image";
import { Fragment } from "react";

export default function Landing() {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-10 py-12 pt-0 md:flex-row md:gap-0 md:py-20">
      <div className="order-2 flex w-full flex-grow flex-col items-start justify-start gap-3 md:order-1">
        <h1 className="max-w-md text-3xl font-bold text-w-300 md:text-4xl xl:max-w-xl">
          <span className="inline-block">Coquitlam&apos;s</span>{" "}
          <span className="inline-block">Largest Public Teen</span>{" "}
          <span className="inline-block">Coding Community</span>
        </h1>
        <h6 className="text-sm text-w-500 md:max-w-lg xl:max-w-xl xl:text-base">
          <span className="md:inline-block">
            A community of middle/high school students
          </span>{" "}
          <span className="md:inline-block">
            who code and learn together, based in Tri-Cities, BC.
          </span>{" "}
        </h6>
        <a
          href="https://discord.gg/zpe6P2gEdZ"
          target="_blank"
          className="relative flex transform select-none items-center gap-2 overflow-hidden rounded-md bg-white px-6 py-2 duration-300 hover:scale-[1.03]"
        >
          <i className="fab fa-discord text-b-800 md:text-lg" />
          <p className="font-medium text-b-800 md:text-lg">Join our Discord</p>
        </a>
        <div className="mt-2 flex flex-row gap-2 md:mt-4">
          <a href="https://bcydc.ca/" target="_blank">
            <p className="text-xs text-white underline">This website was based on the BCYDC website</p>
          </a>
          <p className="text-xs text-white">x</p>
          <a href="https://github.com/fraserhackclub/fraserhackclub.github.io/blob/main/README.md" target="_blank">
            <p className="text-xs text-white underline">Learn more</p>
          </a>
        </div>
      </div>
    </div>
  );
}
