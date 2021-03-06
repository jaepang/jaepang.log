/** @jsx jsx */
import { jsx, Heading, Link as TLink } from "theme-ui"
import { Flex } from "@theme-ui/components"
import { Link } from "gatsby"
import Layout from "./layout"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import Listing from "./listing"
import replaceSlashes from "../utils/replaceSlashes"
import SEO from "./seo"
import Hero from "./hero"

type TagProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags: {
      name: string
      slug: string
    }[]
  }[]
  pageContext: {
    isCreatedByStatefulCreatePages: boolean
    slug: string
    name: string
    [key: string]: any
  }
}

const Tag = ({ posts, pageContext }: TagProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()
  const isDev = pageContext.slug === 'dev'
  const isLife = pageContext.slug === 'life'
  const isHero = isDev || isLife
  if(isHero) {
    return (<Hero posts={posts} pageContext={pageContext}/>)
  }
  return (
    <Layout bgColor={`#fff`}>
      <SEO title={`Tag: ${pageContext.name}`} />
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap`, mt: `18vh`, mb: `2rem` }}>
        <Heading sx={{fontFamily: `Pacifico`, margin: 0}} variant="styles.h2"># {pageContext.name}</Heading>
        <TLink as={Link} sx={{ variant: `links.secondary` }} to={replaceSlashes(`/${basePath}/${tagsPath}`)}>
          View all tags
        </TLink>
      </Flex>
      <Listing posts={posts} sx={{ mt: [4, 5] }} />
    </Layout>
  )
}

export default Tag
