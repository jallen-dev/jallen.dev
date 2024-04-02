import Image from "next/image"

export function Hero({ title, slug }: { title: string; slug: string }) {
  return (
    <div className="flex flex-col gap-4">
      <HeroImage slug={slug} />
      <h1>{title}</h1>
    </div>
  )
}

function HeroImage({ slug }: { slug: string }) {
  try {
    return <Image src={require(`../../public/images/${slug}.png`)} alt={slug} placeholder="blur" />
  } catch (e) {
    return null
  }
}
