/** @jsx jsx */
import { useState, useEffect } from "react"
import { jsx } from "theme-ui"
import Layout from "./layout"
import Listing from "./listing"
import Icons from "./icons"
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
    <Layout isHero={true}>
      <section 
        sx={{
          fontSize: 0,
          color: `#fff`,
          backgroundColor: `#000`,
          width: `100vw`,
          ml: `calc(-50vw + 50%)`,
          height: `82vh`,
          "@media screen and (max-width: 1300px)": {
            height: `86vh`
          },
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
            maxWidth: `1220px`,
            margin: `0 auto`
          }}
        >
        <div className="hero"
          sx={{
            display: `inline-block`,
            verticalAlign: `top`,
            pt: `20vh`,
            px: `2rem`,
            "@media screen and (min-width: 1301px)": {
              px: 0,
              width: `50%`,
            },
          }}
        >
          <Hero/>
        </div>
        <img src="https://github.com/jaepang/logo/blob/master/logo-white-transpatent.png?raw=true')"
          sx={{
            display: `inline-block`,
            width: `50%`,
            "@media screen and (max-width: 1300px)": {
              display: `none`
            },
          }}
        />
        </div>
      </section>
      <div className="gridToggle"
        sx={{
          position: `relative`,
          bg: `#fff`,
          width: `100vw`,
          ml: `calc(-50vw + 50%)`,
        }}
      >
        <div className="gridWrapper"
          sx={{
            maxWidth: `1210px`,
            margin: `0 auto`,
            pt: `2rem`,
            display: `flex`,
            justifyContent: `flex-end`,
            "@media screen and (max-width: 768px)": {
              justifyContent: `center`,
              pt: `65px`,
              pb: `2rem`
            }
          }}
        >
          <IconWrapper
            onClick={() => {
              localStorage.setItem("gridLayout", 'tiles')
              setGridLayout('tiles')
            }}
            active={gridLayout==='tiles'}
            aria-label="Set layout to tiles"
            title="Set layout to tiles"
            sx={{
              
            }}
          >
            <Icons.Tiles fill={gridLayout==='tiles' ? `#000`:fill} />
          </IconWrapper>
          <IconWrapper
            onClick={() => { 
              localStorage.setItem("gridLayout", 'rows')
              setGridLayout('rows')
            }}
            active={gridLayout==='rows'}
            aria-label="Set layout to rows"
            title="Set layout to rows"
            sx={{
              
            }}
          >
            <Icons.Rows fill={fill} />
          </IconWrapper>
        </div>
      </div>
      <Listing gridLayout={gridLayout} title="" posts={posts} showTags={true} 
              showLink={false} link={replaceSlashes(`/${basePath}/${blogPath}`)} />
    </Layout>
  )
}

const IconWrapper = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  opacity: ${p => p.active ? "1":"0.5"};
  position: relative;
  border-radius: 5px;
  width: 40px;
  height: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  transition: opacity 0.3s ease;
  margin-left: 5px;
  padding: 0;

  &:hover {
    opacity: 1;
  }

  &[data-a11y="true"]:focus::after {
    content: "";
    position: absolute;
    left: 0;
    top: -30%;
    width: 100%;
    height: 160%;
    border: 2px solid ${p => p.theme.colors.toggleIcon};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }
  @media screen and (max-width: 768px) {
    margin: 0 10px 0 10px;
  },
`

export default Homepage
