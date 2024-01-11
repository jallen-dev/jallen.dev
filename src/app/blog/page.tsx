import { getBlogPosts } from "@/utils/file-utils"

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()
  return (
    <main>
      {blogPosts.map((blogPost) => (
        <article key={blogPost.slug}>
          <h1>{blogPost.frontmatter.title}</h1>
          <p>{blogPost.frontmatter.abstract}</p>
        </article>
      ))}
    </main>
  )
}
