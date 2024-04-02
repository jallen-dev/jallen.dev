import { BlogPost } from "@/types/BlogPost"
import fs from "fs/promises"
import matter from "gray-matter"
import path from "path"
import { cache } from "react"

export const getBlogPostForSlug = cache(async function getBlogPostForSlug(slug: string) {
  try {
    const fileContent = await readFile(`/content/${slug}.mdx`)
    const { data: frontmatter, content } = matter(fileContent)
    return { frontmatter, content } as BlogPost
  } catch (e) {
    return null
  }
})

export async function getBlogPosts() {
  const fileNames = await readDir("/content")
  const blogPosts: Array<Omit<BlogPost, "content">> = []

  for (let fileName of fileNames) {
    const fileContent = await readFile(`/content/${fileName}`)
    // TODO: validate frontmatter
    // @ts-expect-error missing properties
    const { data: frontmatter } = matter(fileContent) as { data: BlogPost["frontmatter"] }
    frontmatter.publishedOn = new Date(frontmatter.publishedOn)

    blogPosts.push({
      slug: fileName.replace(".mdx", ""),
      frontmatter,
    })
  }

  return blogPosts.sort((a, b) => (a.frontmatter.publishedOn < b.frontmatter.publishedOn ? 1 : -1))
}

function readFile(localPath: string) {
  return fs.readFile(path.join(process.cwd(), localPath), "utf8")
}

function readDir(localPath: string) {
  return fs.readdir(path.join(process.cwd(), localPath))
}
