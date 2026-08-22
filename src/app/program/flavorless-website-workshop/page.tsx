"use client";

import Program from "../components/Program";

export default function flavorless_workshop() {
  return (
    <Program
      name="August Workshop - HTML + JS Websites: no CSS allowed!"
      description=""
      meta={{
        when: "Monday, August 31st, 2026: 10:00am - 5:00pm",
        where: "Coquitlam Public Library, City Centre Branch, 1169 Pinetree Wy",
        who: "All students aged 13-18",
        prize:
          "Pizza & Stickers (end of workshop, on completion of website)!",
        sign_up: "https://fraserhackclub.fillout.com/flavorless",
        criteria: "https://flavorless.hackclub.com/",
      }}
      banner="flavorless-website-workshop.svg"
    >
      <div className="absolute left-0 top-0 -z-10 h-full w-screen overflow-hidden" />
    </Program>
  );
}
