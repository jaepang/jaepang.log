import React from "react"
import { Link as TLink } from "theme-ui"
import { Link } from "gatsby"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"
import { tint } from "@theme-ui/color"

type TagsProps = {
  tags: {
    name: string
    slug: string
  }[],
  isOnList: boolean
}

const ItemTags = ({ tags, isOnList=false }: TagsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()
  const style = {
    color: `white`,
    fontWeight: `light`,
    backgroundColor: tint(`primary`, 0.2),
    borderRadius: `5px`,
    fontSize: `0.8rem`,
    padding: `0.5rem`,
    a: {
      "hover": {
        border: `none !important`
      }
    }
  }
  if(isOnList) {
    return (
      <React.Fragment>
        <React.Fragment key={tags[0].slug}>
          <TLink as={Link} to={replaceSlashes(`/${basePath}/${tagsPath}/${tags[0].slug}`)} sx={style}>
            {tags[0].name}
          </TLink>
        </React.Fragment>
    </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      {tags.map((tag, i) => (
        <React.Fragment key={tag.slug}>
          {!!i && ` `}
          <TLink as={Link} to={replaceSlashes(`/${basePath}/${tagsPath}/${tag.slug}`)} sx={style}>
            {tag.name}
          </TLink>
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default ItemTags
