"use client";

import Program from "../components/Program";

export default function yvrHacks() {
  return (
    <Program
      name="June Multi-Day Workshop - Intermediate Personal Websites!"
      description=""
      meta={{
        when: "Tuesday, June 17th, 2025 to Thursday, June 19th, 2025: 5:00pm - 7:00pm",
        where:
          "Pitt River Community Middle School",
        who: "Any middle/high school student in Tri-Cities",
        prize: "Ice Cream (Thursday, on completion of website)!",
        sign_up: "coming soon",
        criteria: "https://swirl.hackclub.com/",
      }}
      banner="swirl-website-workshop.svg"
    >
      <div className="absolute left-0 top-0 -z-10 h-full w-screen overflow-hidden" />
    </Program>
  );
}
