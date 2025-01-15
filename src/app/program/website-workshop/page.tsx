"use client";

import Program from "../components/Program";

export default function yvrHacks() {
  return (
    <Program
      name="January Workshop - Personal Website"
      description=""
      meta={{
        when: "Saturday, January 18th, 2025: 12:00pm - 3:30pm",
        where:
          "Coquitlam Public Library, City Centre Branch",
        who: "Any middle/high school student in Tri-Cities",
        prize: "Boba and snacks!",
        sign_up: "https://forms.gle/GoYAboQ68RDo77Qb9",
      }}
      banner="website-workshop.svg"
    >
      <div className="absolute left-0 top-0 -z-10 h-full w-screen overflow-hidden" />
    </Program>
  );
}
