"use client";

import Program from "../components/Program";

export default function yvrHacks() {
  return (
    <Program
      name="August Multi-Day Workshop - Beginner Personal Websites!"
      description=""
      meta={{
        when: "Saturday, August 9th, 2025 (Online, Discord/Zoom) and Sunday, August 10th (Library), 2025: 11:30am - 4:00pm",
        where:
          "Coquitlam Public Library, City Centre Branch, 1169 Pinetree Wy",
        who: "Any middle/high school student in Tri-Cities",
        prize: "Ice Cream (Sunday, on completion of website)!",
        sign_up: "coming soon",
        criteria: "https://swirl.hackclub.com/",
      }}
      banner="swirl-website-workshop.svg"
    >
      <div className="absolute left-0 top-0 -z-10 h-full w-screen overflow-hidden" />
    </Program>
  );
}
