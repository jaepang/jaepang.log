/** @jsx jsx */
import { jsx } from "theme-ui"
import Title from "./title"
import { Link } from "gatsby"
import BlogListItem from "./blog-list-item"
import { tailwind } from "@theme-ui/presets"


type ListingProps = {
  title: string
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
  gridLayout?: string
  className?: string
  showTags?: boolean
  showLink?: boolean
  link: string
}


const Listing = ({ gridLayout, title, posts, className = ``, showTags = true, showLink = false, link=`` }: ListingProps) => {
  const isTile = gridLayout === 'tiles'
  return(
    <div
      sx={{
        pb: [3, 4, 5],
        width: `100vw`,
        ml: `calc(-50vw + 50%)`,
        pt: `.5rem`,
        boxSizing: `border-box`,
        backgroundColor: `#fff`,
        p: { 
          fontSize: [1, 2, 3], 
          mt: 2 
        }
      }}
    >
      <section className="list"
        sx={{
          maxWidth: `1220px`,
          margin: `0 auto`,
          display: isTile ? `grid`:`block`,
          alignContent: `stretch`,
          justifyContent: `stretch`,
          rowGap: `80px`,
          gridTemplateColumns: `1fr 15% 1fr`,
          "@media screen and (max-width: 1050px)": {
            gridTemplateColumns: `1fr 1fr`,
            "@media screen and (max-width: 768px)": {
              gridTemplateColumns: `1fr`,
            },
          }
        }}
      >
        {posts.map((post) => (
          <BlogListItem isTile={gridLayout==="tiles"} key={post.slug} post={post} showTags={showTags} />
        ))}
      </section>
    </div>
  )
}

export default Listing
