/** @jsx jsx */
import React from "react"
import { jsx, Link as TLink } from "theme-ui"
import { Box } from "@theme-ui/components"
import { Link } from "gatsby"
import ItemTags from "./item-tags"
import WordLimit from "react-word-limit"

type BlogListItemProps = {
  post: {
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
  }
  showTags?: boolean
}

var today = new Date(),
date = today.getDate()
console.log(date)

const BlogListItem = ({ post, showTags = true }: BlogListItemProps) => (
  <TLink as={Link} to={post.slug} sx={{width: [`100%`, `50%`, `50%`, `33%`],}}>
    {post.banner && (
      <img src= {post.banner.childImageSharp.resize.src}/>
    )}
  <Box
    sx={{
      margin: `1rem`,
      padding: `2rem`, 
      pt: post.tags && showTags ? 0:`2rem`,
      backgroundColor: `header`, 
      //borderStyle: `solid`,
      //borderWidth: `1px`,
      //borderColor: `divide`,
      //borderRadius: `15px`,
      //width: `20rem`,
      height: `20rem`,
      display: `flex`,
      flexDirection: `column`,
      p: { 
        fontSize: [1, 2], 
        mt: 2 
      }
    }}
  >

    <div className={`tags`} sx={{display: `flex`, flexDirection: `row`}}>
      {post.tags && showTags && (
        <React.Fragment>
          <ItemTags tags={post.tags} isOnList={true}
            sx= {{
              top: 0
            }}
          />
        </React.Fragment>
      )}
    </div>
    <div
      sx={{
        height: `90%`
      }}
    >
      <h4 sx={{ fontWeight: `bold`, fontSize: [`1.3rem`, `1rem`, `1rem`, `1.25rem`], color: `text`, mb: `1rem` }}>
        <WordLimit limit={50}>
          {post.title}
        </WordLimit>
      </h4>
      <p sx={{ fontSize: `0.875rem !important`, mt: 1, color: `text`}}>
        <WordLimit limit={100}>
          {post.description ? post.description : post.excerpt}
        </WordLimit>
      </p>
    </div>
      <p 
        sx={{ 
          height: `10%`,
          display: `flex`, 
          color: `sub`, 
          my: 1, 
          fontSize: `0.75rem !important` 
          }}
        >
        <time>{post.date}</time>
      </p>
    
  </Box>
  </TLink>
)

export default BlogListItem
