import { DiscordLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { GitHub, Twitch, Twitter } from "react-feather"

export function Header() {
  return (
    <header className="flex flex-col mb-8">
      <div className="md:flex justify-between items-baseline">
        <span className="flex gap-4">
          <a href="https://twitter.com/jallen_dev" target="_blank">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="https://github.com/jallen-dev" target="_blank">
            <GitHub className="w-6 h-6" />
          </a>
          <a href="https://www.twitch.tv/jallen_dev" target="_blank">
            <Twitch className="w-6 h-6" />
          </a>
          <a href="https://discord.gg/KKew8hNJVf" target="_blank">
            <DiscordLogoIcon className="w-6 h-6" />
          </a>
        </span>

        <h1 className="text-6xl font-bold text-center leading-loose mb-0">
          <Link href="/" className="text-transparent bg-clip-text bg-gradient-to-r to-amber-200 from-fuchsia-600">
            Jallen.dev
          </Link>
        </h1>

        <div className="flex justify-end">
          <ul className="flex gap-4 py-2 w-fit text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            <li>
              <Link href="/blog">blog</Link>
            </li>
            <li>
              <Link href="/projects">projects</Link>
            </li>
            <li>
              <Link href="/about">about</Link>
            </li>
          </ul>
        </div>
        {/* <span className="grow basis-0"></span> */}
      </div>

      <hr />
    </header>
  )
}
