import { BlogPost } from "@/types/BlogPost"
import Image from "next/image"
import Link from "next/link"

import image from "../../public/images/react-jam-winter-2023.png"

export function BlogPostPreview({ blogPost }: { blogPost: Omit<BlogPost, "content"> }) {
  return (
    <article key={blogPost.slug} className="flex flex-col md:flex-row gap-2">
      <Image src={image} alt={blogPost.frontmatter.title} className="w-80" placeholder="blur" />
      <div className="flex flex-col">
        <h3>
          <Link href={"blog/" + blogPost.slug} className="underline underline-offset-4">
            {blogPost.frontmatter.title}
          </Link>
        </h3>
        <p>{blogPost.frontmatter.abstract}</p>
      </div>
    </article>
  )
}
