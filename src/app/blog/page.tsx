import { BlogPostPreview } from "@/components/BlogPostPreview"
import { getBlogPosts } from "@/utils/file-utils"

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()
  return (
    <main>
      <h1>Recent blog posts</h1>
      {blogPosts.map((blogPost) => (
        <BlogPostPreview key={blogPost.slug} blogPost={blogPost} />
      ))}
    </main>
  )
}
