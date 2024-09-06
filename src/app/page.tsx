import { BlogPostPreview } from "@/components/BlogPostPreview"
import { getBlogPosts } from "@/utils/file-utils"
import { ExternalLinkIcon } from "@radix-ui/react-icons"
import Image from "next/image"

import coinjar from "../../public/images/coinjar.png"

export default async function Home() {
  const blogPosts = await getBlogPosts()
  return (
    <main className="flex flex-col gap-16">
      <section>
        <h2 className="text-fuchsia-600">Featured project</h2>
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
      </section>
      <section>
        <h2 className="text-fuchsia-600">Recent blog posts</h2>
        <div className="flex flex-col gap-8">
          {blogPosts.map((blogPost) => (
            <BlogPostPreview key={blogPost.slug} blogPost={blogPost} />
          ))}
        </div>
      </section>
    </main>
  )
}
