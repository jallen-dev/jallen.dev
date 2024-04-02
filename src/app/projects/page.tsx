import { ExternalLinkIcon } from "@radix-ui/react-icons"
import Image from "next/image"

import astroclicker from "../../../public/images/astroclicker.png"
import coinjar from "../../../public/images/coinjar.png"
import openpilot from "../../../public/images/openpilot.png"

export default function ProjectsPage() {
  return (
    <main>
      <h2 className="text-fuchsia-600">Projects</h2>
      <div className="flex flex-col gap-4">
        <article className="flex flex-col md:flex-row gap-4">
          <Image
            src={coinjar}
            alt="Screen shot of my game Coin Jar"
            width={384}
            height={233}
            className="rounded-2xl w-[384px] h-[233px]"
            placeholder="blur"
          />
          <div className="flex flex-col basis-0 grow">
            <h3 className="underline underline-offset-4">
              <a href="https://coinjargame.com" target="_blank" className="flex gap-2 items-baseline">
                Coin Jar <ExternalLinkIcon className="w-6 h-6" />
              </a>
            </h3>
            <p>
              Coin Jar is a physics-based incremental game where you drop coins into a jar and merge coins of the same
              value. Score points and buy upgrades to get more coins, a bigger jar, unlock new types of coins, and more.
            </p>
          </div>
        </article>

        <article className="flex flex-col md:flex-row gap-4">
          <Image
            src={astroclicker}
            alt="Screen shot of my game AstroClicker"
            width={384}
            height={233}
            className="rounded-2xl w-[384px] h-[233px]"
            placeholder="blur"
          />
          <div className="flex flex-col basis-0 grow">
            <h3 className="underline underline-offset-4">
              <a href="https://astroclicker.com" target="_blank" className="flex gap-2 items-baseline">
                AstroClicker <ExternalLinkIcon className="w-6 h-6" />
              </a>
            </h3>
            <p>
              AstroClicker is a casual incremental game where you gather resources to purchase upgrades or buy/sell them
              in a realistic trading simulator that supports market orders and limit orders.
            </p>
          </div>
        </article>

        <article className="flex flex-col md:flex-row gap-4">
          <Image
            src={openpilot}
            alt="Screenshot of OpenPilot"
            width={384}
            height={233}
            className="rounded-2xl w-[384px] h-[233px]"
            placeholder="blur"
          />
          <div className="flex flex-col basis-0 grow">
            <h3 className="underline underline-offset-4">
              <a href="https://github.com/jallen-dev/openpilot" target="_blank" className="flex gap-2 items-baseline">
                OpenPilot <ExternalLinkIcon className="w-6 h-6" />
              </a>
            </h3>
            <p>
              OpenPilot is an open-source AI programming assistant for Visual Studio Code. It converts a project&apos;s
              source files into embeddings and stores them in a vector DB so they can be searched based on the semantic
              content of the user&apos;s prompt.
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}
