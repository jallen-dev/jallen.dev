export type BlogPost = {
  slug: string
  content: string
  frontmatter: {
    title: string
    publishedOn: Date
    abstract: string
  }
}
