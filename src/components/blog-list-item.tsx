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
  <TLink as={Link} to={post.slug}
    sx={{
      "@media screen and (min-width: 1051px)": {
        "&:nth-child(4n-1)": {
          gridColumn: `span 2`
        },
        "&:nth-child(4n-2)": {
          gridColumn: `span 2`
        },
      }
    }}
  >
  <Box
    sx={{
      margin: `1rem`,
      padding: `2rem`, 
      backgroundColor: `header`,
      h4: {
        mt: 0
      },
      p: { 
        fontSize: [1, 2], 
        mt: 2 
      },
      "&:hover": {
        h4: {
          color: `primary`,
          transition: `color 0.3s ease`
        },
        img: {
          transform: `translateY(-1px)`,
          boxShadow: `0 50px 80px -20px rgba(0, 0, 0, 0.27), 
                      0 30px 50px -30px rgba(0, 0, 0, 0.3)`,
          transition: `transform 0.3s ease-out, 
                      box-shadow 0.3s ease-out`
        }
      }
    }}
  >
    {post.banner && (
        <img src= {post.banner.childImageSharp.resize.src}
        sx={{
          objectFit: `cover`,
          objectPosition: `center center`,
          width: `100%`,
          height: `300px`,
          borderRadius: `5px`,
          mb: `25px`,
          transition: `transform 0.3s ease-out, 
                      box-shadow 0.3s ease-out`
        }}
      />
    )}
    <div>
      <h4 
        sx={{ 
          fontWeight: `bold`, 
          fontSize: `1.3rem`, 
          color: `text`, 
          mb: `1rem` 
        }}
      >
        <WordLimit limit={70}>
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
