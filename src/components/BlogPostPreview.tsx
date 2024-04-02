import { BlogPost } from "@/types/BlogPost"
import Image from "next/image"
import Link from "next/link"

export function BlogPostPreview({ blogPost }: { blogPost: Omit<BlogPost, "content"> }) {
  return (
    <article key={blogPost.slug} className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col basis-0 grow">
        <h3>
          <Link href={"blog/" + blogPost.slug} className="underline underline-offset-4">
            {blogPost.frontmatter.title}
          </Link>
        </h3>
        <p>{blogPost.frontmatter.abstract}</p>
      </div>
      <BlogPostImage slug={blogPost.slug} title={blogPost.frontmatter.title} />
    </article>
  )
}

function BlogPostImage({ slug, title }: { slug: string; title: string }) {
  try {
    return <Image src={require(`../../public/images/${slug}.png`)} width={320} alt={title} placeholder="blur" />
  } catch (e) {
    return null
  }
}
