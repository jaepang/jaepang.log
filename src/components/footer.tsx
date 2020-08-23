/** @jsx jsx */
import { jsx } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"
import SocialLinks from "./SocialLinks"
import { tailwind } from "@theme-ui/presets"

type footerProps = {isHero?: boolean}

const Footer = ({isHero=false}: footerProps) => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        width: `100vw`,
        ml: `calc(-50vw + 50%)`,
        pt: [6],
        pb: 4,
        mb: `-4rem`,
        bg: isHero ? `#fff`:null,
        color: isHero ? `rgb(134, 142, 150)`:`sub`,
        a: {
          variant: `links.secondary`,
        },
        "@media screen and (max-width: 1230px)": {
          px: `2.7rem`
        }
      }}
    >
      <div
        sx={{
          variant: `dividers.top`,
          borderColor: isHero ? tailwind.colors.gray[4]:null,
          margin: `0 auto`,
          maxWidth: `1220px`,
          boxSizing: `border-box`,
          display: `flex`,
          justifyContent: `space-between`,
          flexDirection: `row`,
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
      </div>
    </footer>
  )
}

export default Footer
