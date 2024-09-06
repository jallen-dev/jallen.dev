import { BlogPostPreview } from "@/components/BlogPostPreview"
import { getBlogPosts } from "@/utils/file-utils"

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()
  return (
    <main>
      <h2 className="text-fuchsia-600">Blog posts</h2>
      <div className="flex flex-col gap-8">
        {blogPosts.map((blogPost) => (
          <BlogPostPreview key={blogPost.slug} blogPost={blogPost} />
        ))}
      </div>
    </main>
  )
}
