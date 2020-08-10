/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "./layout"
import ItemTags from "./item-tags"
import Utterance from "./utterance"
import SEO from "./seo"

type PostProps = {
  data: {
    post: {
      slug: string
      title: string
      date: string
      tags?: {
        name: string
        slug: string
      }[]
      description?: string
      body: string
      excerpt: string
      timeToRead?: number
      banner?: {
        childImageSharp: {
          resize: {
            src: string
          }
        }
      }
    }
  }
}

const px = [`32px`, `16px`, `8px`, `4px`]
const shadow = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`)

const Post = ({ data: { post } }: PostProps) => (
  <Layout sx={{px: [0, `1rem`, `2rem`, `3rem`]}}>
    <SEO
      title={post.title}
      description={post.description ? post.description : post.excerpt}
      image={post.banner ? post.banner.childImageSharp.resize.src : undefined}
      pathname={post.slug}
    />
    <Heading variant="styles.header">{post.title}</Heading>
    <p sx={{ color: `secondary`, mt: 3, a: { color: `secondary` }, fontSize: 1 }}>
      <time>{post.date}</time>
      {post.tags && (
        <React.Fragment>
          {` — `}
        </React.Fragment>
      )}
      {post.timeToRead && <span>{post.timeToRead}분이면 읽을 수 있어요!</span>}
    </p>
    <section sx={{ my: 5, ".gatsby-resp-image-wrapper": { my: [4, 4, 5], boxShadow: shadow.join(`, `) } }}>
      <MDXRenderer>{post.body}</MDXRenderer>
    </section>
    <ItemTags sx={{variant: `divider.bottom`}} tags={post.tags} isOnList={false} />
    <Utterance repo={`jaepang/jaepang.log`} />
  </Layout>
)

export default Post
