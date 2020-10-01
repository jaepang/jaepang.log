/** @jsx jsx */
import { useState, useEffect } from "react"
import { jsx } from "theme-ui"
import Layout from "./layout"
import { Link } from "gatsby"
import BlogListItem from "./blog-list-item"
import Footer from "./footer"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"
import styled from "@emotion/styled"
import { tailwind } from "@theme-ui/presets"
// @ts-ignore
import Hero from "../texts/hero"
// @ts-ignore
import Bottom from "../texts/bottom"


type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    banner?: {
      childImageSharp: {
        resize: {
          src: string
        }
      }
    }
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}
let flag = true
const linkBlockStyle = {
  position: `relative`,
  display: `inline-block`,
  width: `100%`,
  height: `35vh`,
  padding: `2.5rem`,
  borderRadius: `5px`,
  boxShadow: `rgba(0, 0, 0, 0.2) 0px 20px 40px`,
  transition: `transform 0.3s ease-out, 
              box-shadow 0.3s ease-out`,
  "&:hover": {
    transform: `translateY(-1px)`,
    boxShadow: `0 50px 80px -20px rgba(0, 0, 0, 0.27), 
                0 30px 50px -30px rgba(0, 0, 0, 0.3)`,
    transition: `transform 0.3s ease-out, 
                box-shadow 0.3s ease-out`
  },
  h4: {
    color: `#000`,
    fontFamily: `Pacifico`,
    fontSize: [`30px`, `35px`],
    mt: `1rem`,
    mb: `0.5rem`
  },
  img: {
    height: `calc(35vh - 5rem)`,
    float: `right`
  },
  p: {
    position: `absolute`,
    bottom: `2rem`
  },
  ".list-item": {
    display: `block`,
    height: `calc(35vh - 5rem)`,
    margin: `0 !important`,
    transform: `none !important`,
    boxShadow: `none !important`,
    h4: {
      overflow: `visible`,
      fontSize: [ `20px`, `30px`, `35px`],
      padding: 0
    },
    p: {
      pl: 0
    },
    img: {
      ml: `2.5rem`,
      width: `auto`,
      float: `right !important`,
      objectFit: `scale-down`,
      "@media screen and (max-width: 1169px)": {
        display: `none`
      }
    },
    "&:hover": {
      h4: {
        color: `#000`
      },
      img: {
        transform: `none !important`,
        boxShadow: `none !important`,
      }
    },
  },
  "@media screen and (max-width: 1169px)": {
    margin: `0 auto`,
    "@media screen and (max-width: 679px)": {
      img: {
        float: `none`,
        display: `block`,
        margin: `0 auto`,
        height: `60%`,
      },
      p: {
        bottom: `0.7rem`
      }
    }
  },
}
const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()
  const [gridLayout, setGridLayout] = useState('tiles')
  if(flag) {
    localStorage.setItem("gridLayout", 'tiles')
    flag = false
  }
  
  const fill = tailwind.colors.gray[8]
  useEffect(() => {setGridLayout(localStorage.getItem("gridLayout"))})
  return (
    <Layout isHero={true} bgColor={`#000`}>
      <section 
        sx={{
          fontSize: 0,
          color: `#fff`,
          backgroundColor: `#000`,
          width: `100vw`,
          ml: `calc(-50vw + 50%)`,
          position: `absolute`,
          top: 0,
          left: 0,
          zIndex: `1`,
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `center`,
          px: `2.7rem`,
          height: `100vh`,
          h2: {
            color: `#fff !important`,
            fontSize: [5, 6, 7],
            mb: [2, 3, 4]
          },
          p: {
            color: `sub`,
            fontSize: [1, 2], 
            mt: 2 
          }
        }}
      >
        <div className="hero-wrapper" 
          sx={{
            position: `relative`,
            maxWidth: `1220px`,
            margin: `0 auto`,
            pr: `35%`,
            "@media screen and (max-width: 900px)": {
              pr: 0
            },
          }}
        >
        <Hero/>
        <img src="/homeHero.png"
          sx={{
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
          }}
        />
        </div>
      </section>
      <section
        sx={{
          pt: `100vh`,
          width: `100vw`,
          ml: `calc(-50vw + 50%)`,
          pb: `2.5rem`,
          h1: {
            color: `#000`,
            fontSize: [`40px`, `44px`],
            maxWidth: `1220px`,
            textAlign: `left`,
            margin: `0 auto`,
            "@media screen and (max-width: 1300px)": {
              px: `2.5rem`,
            },
          }
        }}
      >
        <div className="featured-post" 
          sx={{
            maxWidth: `1220px`,
            margin: `0 auto`,
            mt: `4rem`,
            "@media screen and (max-width: 1300px)": {
              px: `2.5rem`,
            },
          }}
        >
          <h4>Recent Post</h4>
          <div className="featured-post-block" sx={linkBlockStyle}>
            <BlogListItem key={posts[0].slug} post={posts[0]} showTags={false} />
          </div>
        </div>
        <div className="hero-link"
          sx={{
            maxWidth: `1220px`,
            margin: `0 auto`,
            mt: `4rem`,
            "@media screen and (max-width: 1300px)": {
              px: `2.5rem`,
            },
          }}
        >
          <h4>Topics</h4>
          <div className="link-wrapper"
            sx={{
              display: `grid`,
              gridTemplateColumns: `1fr 1fr`,
              columnGap: `20px`,
              "@media screen and (max-width: 1300px)": {
                gridTemplateColumns: `1fr`,
                rowGap: `50px`,
              },
            }}
          >
            <Link to="/tags/dev" sx={linkBlockStyle}>
              <img src="/devHero.png"/>
              <h4>Deverlop.log</h4>
              <p>See posts →</p>
            </Link>
            <Link to="/tags/life" sx={linkBlockStyle}>
              <img src="/lifeHero.png"/>
              <h4>Life.log</h4>
              <p>See posts →</p>
            </Link>
          </div>
        </div>
      </section>
    </Layout>

  )
}

export default Homepage
