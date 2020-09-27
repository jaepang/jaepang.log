/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "./layout"
import ItemTags from "./item-tags"
import { FacebookProvider, Comments } from 'react-facebook'
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
    site: {
      siteMetadata: {
        facebookAppID
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
    pr: `40%`,
    zIndex: `1`,
    h2: {
      fontSize: [`30px`, `35px`, `40px`, `44px`],
      mb: `0.5rem`
    },
    "@media screen and (max-width: 900px)": {
      pr: 0
    },
  }
}
const imageStyle = {
  position: `absolute`,
  top: `50%`,
  right: 0,
  zIndex: `11`,
  width: `30vw`,
  borderRadius: `20px`,
  overFlow: `hidden`,
  objectFit: `cover`,
  transform: `translateY(-50%)`,
  objectPosition: `center center`,
  "@media screen and (max-width: 1400px)": {
    display: `none`
  },
}

const Post = ({ data: { post, site } }: PostProps) => (
  <Layout bgColor="#FAFAFA">
    <SEO
      title={post.title}
      description={post.description ? post.description : post.excerpt}
      image={post.banner ? post.banner.childImageSharp.resize.src : undefined}
      pathname={post.slug}
    />
    <div className="post-hero" sx={heroStyle}>
      <div className="post-hero-content">
        <Heading className="post-title" variant="styles.header">{post.title}</Heading>
        <p sx={{ color: `secondary`, mt: 0, ml: 1, mb: 3, a: { color: `secondary` }, fontSize: 1 }}>
          <time>{post.date}</time>
          <React.Fragment>
            {` — `}
          </React.Fragment>
          {post.timeToRead && <span>{post.timeToRead}분이면 읽을 수 있어요</span>}
        </p>
        {post.tags && (
          <ItemTags tags={post.tags} isOnList={false} />
        )}
        {post.banner && (<img src= {post.banner.childImageSharp.resize.src} sx={imageStyle}/>)}
        {(!post.banner && post.tags[0].slug !== "dev") && (<img src= {"/post.png"} sx={imageStyle}/>)}
        {(!post.banner && post.tags[0].slug === "dev") && (<img src= {"/code.png"} sx={imageStyle}/>)}
      </div>
    </div>
    <section sx={{ mt: 5, mb: 6, ".gatsby-resp-image-wrapper": { my: [4, 4, 5], boxShadow: shadow.join(`, `) } }}>
      <MDXRenderer>{post.body}</MDXRenderer>
    </section>
    <section sx={{maxWidth: `680px`, margin: `0 auto`}}>
      {post.tags && (
        <ItemTags tags={post.tags} isOnList={false} />
      )}
      <FacebookProvider appId={site.siteMetadata.facebookAppID}>
        <Comments href="YOUR_HOMEPAGE_ADDRESS" />
      </FacebookProvider>
    </section>
  </Layout>
)

export default Post
