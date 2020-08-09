/** @jsx jsx */
import { jsx } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"
import SocialLinks from "./SocialLinks"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        mb: 4,
        color: `sub`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
      &copy; {new Date().getFullYear()} {siteTitle}
      </div>
      <div>
        <SocialLinks
          sx={{
            margin: 0
          }}
          links={
            [
              {
                name: `instagram`, 
                url: `https://instagram.com/jk_extends_soldier`
              },
              {
                name: `github`, 
                url: `https://github.com/jaepang`
              }
            ]
          }
        />
      </div>
    </footer>
  )
}

export default Footer
