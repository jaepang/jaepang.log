/** @jsx jsx */
import { jsx, Link as TLink, Heading } from "theme-ui"
import { Box, Flex } from "@theme-ui/components"
import kebabCase from "lodash.kebabcase"
import { Link } from "gatsby"
import Layout from "./layout"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import SEO from "./seo"
import replaceSlashes from "../utils/replaceSlashes"

type PostsProps = {
  list: {
    fieldValue: string
    totalCount: number
  }[]
}

const Tags = ({ list }: PostsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  return (
    <Layout>
      <SEO title="Tags" />
      <Heading variant="styles.h2">Tags</Heading>
      <Box mt={[4, 5]}>
        {list.map((listItem) => (
          <Flex key={listItem.fieldValue} mb={[1, 1, 2]} sx={{ display: `inline-block`, alignItems: `center`, px: `1rem` }}>
            <TLink
              as={Link}
              sx={{ variant: `links.listItem`, 
                mr: 2,
                display: `block`,
              }}
              to={replaceSlashes(`/${basePath}/${tagsPath}/${kebabCase(listItem.fieldValue)}`)}
            >
              # {listItem.fieldValue} 
            </TLink>
            <span sx={{ display: `block`, color: `text` }}>총 {listItem.totalCount}개의 글</span>
          </Flex>
        ))}
      </Box>
    </Layout>
  )
}

export default Tags
