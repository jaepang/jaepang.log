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

const imageStyle = {
    objectFit: `cover`,
    objectPosition: `center center`,
    width: `100%`,
    height: `300px`,
    borderRadius: `5px`,
    mb: `10px`,
    transition: `transform 0.3s ease-out, 
                box-shadow 0.3s ease-out`
}

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
      borderRadius: `5px`,
      backgroundColor: `header`,
      h4: {
        mt: 0
      },
      p: { 
        fontSize: [1, 2], 
        mt: 2 
      },
      "@media screen and (max-width: 768px)": {
        boxShadow: `rgba(0, 0, 0, 0.2) 0px 20px 40px`,
        h4: {
          px: `1rem`,
        },
        p: {
          px: `1rem`,
          pb: `1rem`,
        }
      },
      "&:hover": {
        h4: {
          color: `primary`,
          transition: `color 0.3s ease`
        },
        "@media screen and (min-width: 769px)": {
          img: {
            transform: `translateY(-1px)`,
            boxShadow: `0 50px 80px -20px rgba(0, 0, 0, 0.27), 
                        0 30px 50px -30px rgba(0, 0, 0, 0.3)`,
            transition: `transform 0.3s ease-out, 
                        box-shadow 0.3s ease-out`
          }
        },
        "@media screen and (max-width: 768px)": {
          transform: `translateY(-1px)`,
          boxShadow: `0 50px 80px -20px rgba(0, 0, 0, 0.27), 
                      0 30px 50px -30px rgba(0, 0, 0, 0.3)`,
          transition: `transform 0.3s ease-out, 
                      box-shadow 0.3s ease-out`
        },
      }
    }}
  >
    {post.banner && (
        <img src= {post.banner.childImageSharp.resize.src}
        sx={imageStyle}
      />
    )}
    {!post.banner && (
        <img src= {"/banner.jpg"}
        sx={imageStyle}
      />
    )}
    <div>
      <h4 
        sx={{ 
          fontWeight: `bold`, 
          fontSize: `1.3rem`, 
          color: `text`, 
          mb: `0.5rem`,
          textOverflow: `ellipsis`,
          overflow: `hidden`,
          whiteSpace: `nowrap`
        }}
      >
        {post.title}
      </h4>
      <p
        sx={{ 
          fontSize: `0.875rem !important`, 
          mt: 1, 
          color: `sub`, 
          height: `2.5rem`,
          overflow: `hidden`,
          textOverflow: `ellipsis`,
          display: `-webkit-box`,
          webkitLineClamp : 2,
          webkitBoxOrient: `vertical`
        }}
      >
          {post.description ? post.description : post.excerpt}
      </p>
    </div>
      <p 
        sx={{ 
          height: `10%`,
          color: `sub`, 
          my: 1, 
          fontSize: `0.75rem !important`,
        }}
      >
        {post.timeToRead}min to read
        {post.tags && showTags && (
          <React.Fragment>
            {`  —  `}
            <ItemTags tags={post.tags} isOnList={true} />
          </React.Fragment>
        )}
      </p>
    
  </Box>
  </TLink>
)

export default BlogListItem
