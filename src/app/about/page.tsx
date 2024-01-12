import Image from "next/image"
import Link from "next/link"

import image from "../../../public/images/me.jpeg"

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <PictureWithNameTitle />
      <Blurb />
    </div>
  )
}

function Blurb() {
  return (
    <section>
      <h2>Hello! 👋</h2>
      <p>
        I&apos;m a full-stack developer with a decade of professional experience. I mainly write TypeScript on the
        frontend and backend. Lately I have been getting into making web games with React, PixiJS and Three.js. I&apos;m
        building{" "}
        <a href="https://astroclicker.com" target="_blank">
          AstroClicker
        </a>
        , a casual incremental game built with React and React-Three-Fiber. You can also check out some{" "}
        <Link href="/projects">other projects</Link> I&apos;ve worked on.
      </p>
      <p>
        I built this site with Next.js and host it on Cloudflare. You can see the{" "}
        <a href="https://github.com/jallen-dev/jallen.dev" target="_blank">
          source code on GitHub
        </a>
        .
      </p>
    </section>
  )
}

function PictureWithNameTitle() {
  return (
    <div className="flex flex-col items-center">
      <Picture />
      <span className="text-3xl font-bold mt-2">Justin Allen</span>
      <span>Senior Software Engineer</span>
      <span>Boston, MA, USA</span>
    </div>
  )
}

function Picture() {
  return (
    <div className="rounded-full overflow-hidden aspect-square w-64 h-64">
      <Image src={image} alt="Picture of the author" width={256} height={256} style={{ objectFit: "cover" }} />
    </div>
  )
}
