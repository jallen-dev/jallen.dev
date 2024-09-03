import { ExternalLinkIcon } from "@radix-ui/react-icons"
import Image, { StaticImageData } from "next/image"

export function DuskGame({ image, children }: { image: StaticImageData; children: React.ReactNode }) {
  return (
    <div className="w-72 relative">
      <Image src={image} alt="" placeholder="blur" />
      <div className="flex flex-col gap-2 absolute bottom-0 bg-gradient-to-t from-[#240038] h-full w-full from-30% to-60% justify-end p-2">
        {children}
      </div>
    </div>
  )
}

DuskGame.Name = Name
DuskGame.Plays = Plays
DuskGame.ReactJam = ReactJam
DuskGame.LeaderboardBounty = LeaderboardBounty

function Plays({ plays }: { plays: string }) {
  return (
    <div className="flex gap-4 items-center">
      <span className="text-3xl">🎮</span>
      {plays} plays
    </div>
  )
}

function ReactJam({ place, name }: { place: 1 | 2 | 3; name: string }) {
  return (
    <div className="flex gap-4 items-center">
      <span className="text-3xl">{place === 1 ? "🥇" : place === 2 ? "🥈" : "🥉"}</span>
      {name}
    </div>
  )
}

function LeaderboardBounty() {
  return (
    <div className="flex gap-4 items-center">
      <span className="text-3xl">🏆</span>
      Leaderboard Bounty
    </div>
  )
}

function Name({ link, children }: { link: string; children: React.ReactNode }) {
  return (
    <h3 className="mb-0">
      <a href={link} target="_blank" className="flex gap-2 items-baseline">
        {children} <ExternalLinkIcon className="w-6 h-6" />
      </a>
    </h3>
  )
}
