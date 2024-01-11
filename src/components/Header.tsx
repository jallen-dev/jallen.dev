import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { Twitch, Twitter, GitHub } from "react-feather";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex flex-col gap-4">
      <div className="md:flex items-baseline">
        <span className="grow basis-0 flex gap-4">
          <a href="https://twitter.com/jallen_dev" target="_blank">
            <Twitter className="w-8 h-8" />
          </a>
          <a href="https://github.com/jallen-dev" target="_blank">
            <GitHub className="w-8 h-8" />
          </a>
          <a href="https://www.twitch.tv/jallen_dev" target="_blank">
            <Twitch className="w-8 h-8" />
          </a>
          <a href="https://discord.gg/KKew8hNJVf" target="_blank">
            <DiscordLogoIcon className="w-8 h-8" />
          </a>
        </span>
        <h1 className="grow basis-0 text-5xl text-center leading-loose">
          Jallen.dev
        </h1>
        <span className="grow basis-0"></span>
      </div>
      <ul className="flex gap-4">
        <li>
          <Link href="/blog">blog</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
      </ul>
    </header>
  );
}
