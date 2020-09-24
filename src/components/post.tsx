/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "./layout"
import PostHeader from "./post-header"
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
const heroStyle = {
  zIndex: `1`,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignContent: `center`,
  width: `100vw`,
  marginLeft: `calc(-50vw + 50%)`,
  px: `2.7rem`,
  height: `100vh`,
  bg: `#FAFAFA`,
  ".post-hero-content": {
    position: `relative`,
    margin: `0 auto`,
    maxWidth: `1220px`,
    pr: `35%`,
    zIndex: `1`,
    h2: {
      fontSize: `44px`,
      mb: `1.5rem`
    }
  }
}
const imageStyle = {
  position: `absolute`,
  top: `-25%`,
  right: `0`,
  zIndex: `11`,
  width: `45%`,
  height: `150%`,
  borderRadius: `20px`,
  overFlow: `hidden`,
  objectFit: `cover`,
  objectPosition: `center center`,
}

const Post = ({ data: { post } }: PostProps) => (
  <Layout isPost={true} sx={{px: [0, `1rem`, `2rem`, `3rem`]}}>
    <SEO
      title={post.title}
      description={post.description ? post.description : post.excerpt}
      image={post.banner ? post.banner.childImageSharp.resize.src : undefined}
      pathname={post.slug}
    />
    <PostHeader/>
    <div className="post-hero" sx={heroStyle}>
      <div className="post-hero-content">
        <Heading className="post-title" variant="styles.header">{post.title}</Heading>
        {post.tags && (
          <ItemTags tags={post.tags} isOnList={false} />
        )}
        <p sx={{ color: `secondary`, mt: 3, a: { color: `secondary` }, fontSize: 1 }}>
          <time>{post.date}</time>
          <React.Fragment>
            {` — `}
          </React.Fragment>
          {post.timeToRead && <span>{post.timeToRead}분이면 읽을 수 있어요</span>}
        </p>
        {post.banner && (
            <img src= {post.banner.childImageSharp.resize.src}
            sx={imageStyle}
          />
        )}
        {!post.banner && (
            <img src= {"/banner.jpg"}
            sx={imageStyle}
          />
        )}
      </div>
    </div>
    <section sx={{ mt: 5, mb: 6, ".gatsby-resp-image-wrapper": { my: [4, 4, 5], boxShadow: shadow.join(`, `) } }}>
      <MDXRenderer>{post.body}</MDXRenderer>
    </section>
    {post.tags && (
      <ItemTags tags={post.tags} isOnList={false} />
    )}
    <Utterance repo={`jaepang/jaepang.log`} />
  </Layout>
)

export default Post
