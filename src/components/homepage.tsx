/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "./layout"
import Listing from "./listing"
import List from "./list"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"
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

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()

  return (
    <Layout isHome={true}>
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
      <Listing title="" posts={posts} showTags={true} 
              showLink={true} link={replaceSlashes(`/${basePath}/${blogPath}`)} />
      <List>
        <Bottom />
      </List>
    </Layout>
  )
}

export default Homepage
