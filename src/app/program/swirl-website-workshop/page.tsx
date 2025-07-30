"use client";

import Program from "../components/Program";

export default function swirl_workshop() {
  return (
    <Program
      name="August Two-Day Workshop - Beginner Personal Websites!"
      description=""
      meta={{
        when: "Saturday, August 9th, 2025 (Online, Discord/Zoom) and Sunday, August 10th (Library), 2025: 11:30am - 4:00pm on both days",
        where:
          "Coquitlam Public Library, City Centre Branch, 1169 Pinetree Wy",
        who: "Any middle/high school student in Tri-Cities",
        prize: "Ice Cream (end of workshop on Sunday, on completion of website)!",
        sign_up: "https://fraserhackclub.fillout.com/t/4UMaXnFvvCus",
        criteria: "https://swirl.hackclub.com/",
      }}
      banner="swirl-website-workshop.svg"
    >
      <div className="absolute left-0 top-0 -z-10 h-full w-screen overflow-hidden" />
    </Program>
  );
}
