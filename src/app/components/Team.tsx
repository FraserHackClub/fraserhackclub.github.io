export default function Team() {
  return (
    <div className="flex w-full flex-col items-center gap-10 py-12 md:py-24">
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-center text-3xl font-bold text-white md:text-4xl">
          The Team
        </h3>
        <h6 className="max-w-sm text-center text-lg font-light text-white md:text-xl">
          Leading Fraser Hack Club
        </h6>
      </div>
      <div className="flex w-full flex-col gap-4 md:gap-10">
        <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row md:gap-40">
          <Member
            name="Paya Maroufi"
            image="paya.png"
            role="President"
            href="https://payamaroufi.xyz/"
          />
          <Member
            name="Harry Liu"
            image="harry.png"
            role="Vice President"
            href="https://github.com/fengyuan66"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row md:gap-40">
          <Member
            name="Poshkin Omer"
            image="poshkin.png"
            role="Marketing"
            href="https://github.com/poshkin11"
          />
          <Member
            name="Parsa Rezazadeh-Masouleh"
            image="parsa.png"
            role="Sponsorship"
            href="https://github.com/PullRequestPR"
          />
          <Member
            name="William Wen"
            image="william.png"
            role="Logistics"
            href="https://github.com/stickmanned"
          />
        </div>
      </div>
    </div>
  );
}

function Member({
  name,
  image,
  role,
  href,
}: {
  name: string;
  image: string;
  role: string;
  href?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/team/${image}`} alt={name} className="w-40 rounded-xl" />
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2">
          <p className="text-xl font-bold text-white">{name}</p>
          {href && (
            <a href={href} target="_blank">
              <i className="fas fa-external-link-alt text-xl text-white" />
            </a>
          )}
        </div>
        <p className="text-lg text-white">{role}</p>
      </div>
    </div>
  );
}
