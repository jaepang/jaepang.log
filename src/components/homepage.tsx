/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "./layout"
import Title from "./title"
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
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()

  return (
    <Layout>
      <section 
        sx={{ 
          my: [3, 4, 5],
          padding: `5%`, 
          backgroundColor: `header`, 
          borderStyle: `solid`,
          borderWidth: `1px`,
          borderColor: `divide`,
          borderRadius: `15px`,
          p: { 
            fontSize: [1, 2, 3], 
            mt: 2 
          }
          }}
        >
        <Hero />
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
