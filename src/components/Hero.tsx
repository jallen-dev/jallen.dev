import Image from "next/image"

import image from "../../public/images/react-jam-winter-2023.png"

export function Hero({ title, slug }: { title: string; slug: string }) {
  return (
    <div className="flex flex-col gap-4">
      <Image src={image} alt={title} className="" />
      <h1 className="">{title}</h1>
    </div>
  )
}
