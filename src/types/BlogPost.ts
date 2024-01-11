export type BlogPost = {
  slug: string
  content: string
  frontmatter: {
    title: string
    publishedOn: string
    abstract: string
  }
}
