import { BlogPost } from "@/types/BlogPost"
import { getBlogPostForSlug } from "@/utils/file-utils"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  console.log({ params })
  const blogPost = await getBlogPostForSlug(params.slug)
  console.log({ blogPost })
  if (!blogPost) {
    notFound()
  }

  return {
    title: blogPost.frontmatter.title,
    description: blogPost.frontmatter.abstract,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const blogPost = await getBlogPostForSlug(params.slug)
  if (!blogPost) {
    notFound()
  }

  return (
    <article>
      <h1>{blogPost.frontmatter.title}</h1>
      <p>{blogPost.content}</p>
    </article>
  )
}
