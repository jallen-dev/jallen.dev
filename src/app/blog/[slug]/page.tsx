import { Code } from "@/components/Code"
import { getBlogPostForSlug } from "@/utils/file-utils"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blogPost = await getBlogPostForSlug(params.slug)
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
      {/* @ts-expect-error type of components */}
      <MDXRemote source={blogPost.content} components={components} />
    </article>
  )
}

const components = {
  pre: Code,
} as const
