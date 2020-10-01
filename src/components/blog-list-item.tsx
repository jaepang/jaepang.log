/** @jsx jsx */
import React, { useContext, useEffect } from "react"
import { jsx, Link as TLink } from "theme-ui"
import { Box } from "@theme-ui/components"
import { Link } from "gatsby"
import ItemTags from "./item-tags"
import { tailwind } from "@theme-ui/presets"

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
  isTile?: boolean
}

const BlogListItem = ({ isTile = true, post, showTags = true }: BlogListItemProps) => {
  const imageStyle = {
    objectFit: `cover`,
    objectPosition: `center center`,
    width: `100%`,
    height: !isTile ?`100%`:`300px`,
    borderRadius: `5px`,
    mb: `10px`,
    transition: `transform 0.3s ease-out, 
                box-shadow 0.3s ease-out`,
    "@media screen and (max-width: 768px)": {
      display: !isTile ? `none`:null
    }
  }
  return (
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
    <Box className="list-item"
      sx={{
        display: isTile ? `block`:`grid`,
        gridTemplateColumns: "30% 70%",
        margin: `1rem`,
        borderRadius: `5px`,
        backgroundColor: `#fff`,
        h4: {
          mt: 0
        },
        p: { 
          fontSize: [1, 2], 
          mt: 2 
        },
        "@media screen and (max-width: 768px)": {
          display: `block`,
          boxShadow: isTile ? `rgba(0, 0, 0, 0.2) 0px 20px 40px`:null,
          borderBottom: !isTile ? `1px solid`:null,
          borderColor: tailwind.colors.gray[4],
          
          h4: {
            px: isTile ? `1rem`:null,
          },
          p: {
            px: isTile ? `1rem`:null,
            pb: `1rem`,
          },
          img: {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
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
            transform: isTile ? `translateY(-1px)`:null,
            boxShadow: isTile ? `0 50px 80px -20px rgba(0, 0, 0, 0.27), 
                        0 30px 50px -30px rgba(0, 0, 0, 0.3)`:null,
            transition: isTile ? `transform 0.3s ease-out, 
                        box-shadow 0.3s ease-out`:null
          },
        }
      }}
    >
      {post.banner && (<img src= {post.banner.childImageSharp.resize.src} sx={imageStyle}/>)}
      {(!post.banner && post.tags[0].slug !== "dev") && (<img src= {"/post.png"} sx={imageStyle}/>)}
      {(!post.banner && post.tags[0].slug === "dev") && (<img src= {"/code.png"} sx={imageStyle}/>)}
      <div sx={{pl: !isTile ? '5%':0}}>
        <h4 
          sx={{ 
            fontWeight: `bold`, 
            fontSize: `1.3rem`, 
            color: `#000`, 
            mb: `0.5rem`,
            textOverflow: `ellipsis`,
            overflow: `hidden`,
            display: `-webkit-box`,
            "-webkit-line-clamp" : `2`,
            "-webkit-box-orient": `vertical`,
            maxHeight: `4rem`,
          }}
        >
          {post.title}
        </h4>
        <p
          sx={{ 
            fontSize: `0.875rem !important`, 
            mt: 1, 
            color: `rgb(134, 142, 150)`, 
            height: `2.5rem`,
            overflow: `hidden`,
            textOverflow: `ellipsis`,
            display: `-webkit-box`,
            "-webkit-line-clamp" : `2`,
            "-webkit-box-orient": `vertical`,
          }}
        >
            {post.description ? post.description : post.excerpt}
        </p>
        <p 
          sx={{ 
            height: `10%`,
            color: `sub`, 
            my: 1, 
            fontSize: `0.75rem !important`,
            display: showTags ? null:`none`
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
      </div>
    </Box>
    </TLink>
  )
}

export default BlogListItem
