// import { getBlogPostForSlug } from "@/utils/file-utils"
import { ImageResponse } from "next/og"

export const runtime = "edge"

// Image metadata
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  // Font
  const interSemiBold = fetch(new URL("/public/Inter-SemiBold.ttf", import.meta.url)).then((res) => res.arrayBuffer())

  //   const blogPost = await getBlogPostForSlug(params.slug)

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          //   background: "rgb(15,18,62)",
          background: "linear-gradient(59deg, rgba(15,18,62,1) 25%, rgba(48,14,98,1) 75%)",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/* {blogPost?.frontmatter.title} */}
        {getBlogTitle(params.slug)}
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    },
  )
}

function getBlogTitle(slug: string) {
  return BLOG_TITLES[slug as keyof typeof BLOG_TITLES] || "Jallen.dev"
}

const BLOG_TITLES = {
  "react-jam-winter-2023": "React Jam Winter 2023",
  "react-jam-spring-2024": "React Jam Spring 2024",
  "pixi-react-tunnels": "Combining Pixi-React and HTML with Tunnels",
} as const
