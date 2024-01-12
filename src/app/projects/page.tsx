import { ExternalLinkIcon } from "@radix-ui/react-icons"
import Image from "next/image"

import astroclicker from "../../../public/images/astroclicker.png"
import openpilot from "../../../public/images/openpilot.gif"

export default function ProjectsPage() {
  return (
    <main>
      <h2 className="text-fuchsia-600">Projects</h2>
      <div className="flex flex-col gap-4">
        <article className="flex gap-2">
          <Image
            src={astroclicker}
            alt="Screen shot of my game AstroClicker"
            width={384}
            height={233}
            className="rounded-2xl"
          />
          <div className="flex flex-col">
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

        <article className="flex gap-2">
          <Image
            src={openpilot}
            alt="Screen shot of my game AstroClicker"
            width={384}
            height={233}
            className="rounded-2xl"
          />
          <div className="flex flex-col">
            <h3 className="underline underline-offset-4">
              <a href="https://astroclicker.com" target="_blank" className="flex gap-2 items-baseline">
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
