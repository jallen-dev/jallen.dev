import { BlogPostPreview } from "@/components/BlogPostPreview"
import { getBlogPosts } from "@/utils/file-utils"
import { ExternalLinkIcon } from "@radix-ui/react-icons"
import Image from "next/image"

import astroclicker from "../../public/images/astroclicker.png"

export default async function Home() {
  const blogPosts = await getBlogPosts()
  return (
    <main className="flex flex-col gap-16 pb-8">
      <section>
        <h2 className="text-fuchsia-600">Featured project</h2>
        <article className="flex gap-2">
          <Image src={astroclicker} alt="Screen shot of my game AstroClicker" className="w-80 rounded-2xl" />
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
      </section>
      <section>
        <h2 className="text-fuchsia-600">Recent blog posts</h2>
        {blogPosts.map((blogPost) => (
          <BlogPostPreview key={blogPost.slug} blogPost={blogPost} />
        ))}
      </section>
    </main>
  )
}
