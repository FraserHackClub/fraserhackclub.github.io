import Program from "./Program";

export default function Programs() {
  const programs = [
    {
      name: "Website Workshop",
      image: "website-workshop.svg",
      href: "/program/website-workshop",
      duration: "January 2025",
      complete: true,
    }
  ];

  return (
    <div className="relative flex h-full w-screen flex-col items-center px-4 py-12 md:py-0">
      <div className="flex flex-col gap-4 md:w-[1024px] md:max-w-[1024px]">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-white md:text-3xl">
            Meet like-minded students
          </h1>
          <p className="text-sm text-w-300 md:text-base">
            Join us at our events and workshops! Connect with fellow teens interested in tech around Tri-Cities and BC!
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          {programs.map((program, i) => (
            <Program key={i} {...program} />
          ))}
        </div>
      </div>
    </div>
  );
}
