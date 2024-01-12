import { CodeBlock } from "@/components/CodeBlock"
import { Hero } from "@/components/Hero"
import { getBlogPostForSlug } from "@/utils/file-utils"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"

import styles from "./style.module.css"

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
      <Hero title={blogPost.frontmatter.title} slug={params.slug} />
      <div className={styles.page}>
        {/* @ts-expect-error type of components */}
        <MDXRemote source={blogPost.content} components={components} />
      </div>
    </article>
  )
}

const components = {
  pre: CodeBlock,
} as const
