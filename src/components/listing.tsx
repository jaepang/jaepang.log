/** @jsx jsx */
import { jsx } from "theme-ui"
import Title from "./title"
import { Link } from "gatsby"
import BlogListItem from "./blog-list-item"

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
  className?: string
  showTags?: boolean
  showLink?: boolean
  link: string
}

const Listing = ({ title, posts, className = ``, showTags = true, showLink = false, link=`` }: ListingProps) => (
  <div
    sx={{
      mb: [3, 4, 5],
      boxSizing: `border-box`,
      p: { 
        fontSize: [1, 2, 3], 
        mt: 2 
      }
    }}
  >
    <Title text={title} sx={{mt: `2em`}}>
    {showLink && (
      <Link to={link}>Read all posts</Link>
    )}
    </Title>
    <section className={className}
      sx={{
        margin: `-1rem`,
        display: `grid`,
        alignContent: `stretch`,
        justifyContent: `stretch`,
        gridTemplateColumns: `1fr 25% 1fr`,
        "@media screen and (max-width: 1250px)": {
          //gridTemplateColumns: `1fr 25% 1fr`,
          "@media screen and (max-width: 1050px)": {
            gridTemplateColumns: `1fr`,
          },
        }
      }}
    >
      {posts.map((post) => (
        <BlogListItem key={post.slug} post={post} showTags={showTags} />
      ))}
    </section>
  </div>
)

export default Listing
