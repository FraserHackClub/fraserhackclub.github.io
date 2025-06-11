export default function Footer() {
  return (
    <div className="flex w-full items-center justify-center gap-4 py-4">
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
  )
}
