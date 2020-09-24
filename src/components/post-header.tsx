/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { Link } from "gatsby"
import { Flex } from "@theme-ui/components"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import SharePageButton from "./share-page-button"
import ColorModeToggle from "./colormode-toggle"
import HeaderTitle from "./header-title"
import { tailwind } from "@theme-ui/presets"

type HeaderProps = {className?: string}

const PostHeader = ({className} : HeaderProps) => {
  const { navigation: nav } = useMinimalBlogConfig()
  const [colorMode, setColorMode] = useColorMode()
  let bgColor = `#FAFAFA`
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }
  return (
    <header className={className}
      sx={{
        pt: `8vh`, 
        "@media screen and (max-width: 1300px)": {
          pt: `4vh`
        },
        position: `absolute`,
        top: 0,
        left: 0,
        zIndex: `10`,
        width: `100vw`,
        height: `18vh`,
        marginLeft: `calc(-50vw + 50%)`,
        backgroundColor: bgColor,
        px: `2.7rem`,
      }}
    >
    <div
      sx={{
        maxWidth: `1220px`,
        margin: `auto`,
        alignItems: `center`, 
        justifyContent: `flex-start`,
      }}
    >
      <Flex 
        sx={{ 
          alignItems: `center`, 
          justifyContent: `space-between`,
        }}
      >
        <HeaderTitle />
            <div
              sx={{
                width: `25%`
              }}
            >
              <div 
                sx={{
                  "@media screen and (max-width: 1300px)": {
                    pr: 0,
                    "@media screen and (max-width: 800px)": {
                      display: `none`
                    }
                  },
                  pr: `5%`,
                  display: `flex`,
                  width: `100%`,
                  justifyContent: `space-around`,
                  p: {
                    fontSize: `16px`,
                    fontWeight: `normal`,
                    my: 0,
                    pt: `0.5rem`,
                    color: tailwind.colors.gray[8],
                    transition: `color 0.3s ease`,
                    "&:hover": {
                      color: `#000`,
                      transition: `color 0.3s ease`,
                    }
                  },
                }}
              >
                <Link to="/about">
                  <p className="nav-about">About</p>
                </Link>
                <Link to="/tags/dev">
                  <p className="nav-dev">Dev</p>
                </Link>
                <Link to="/tags/life">
                  <p className="nav-life">Life</p>
                </Link>
              </div>
              <div
                sx={{
                  display: `none`,
                  "@media screen and (max-width: 800px)": {
                    display: `block`
                  },
                  p: {
                    fontSize: `16px`,
                    fontWeight: `normal`,
                    my: 0,
                    pt: `0.5rem`,
                    color: tailwind.colors.gray[8],
                    transition: `color 0.3s ease`,
                    "&:hover": {
                      color: `#000`,
                      transition: `color 0.3s ease`,
                    }
                  },
                }}
              >
                <input type="checkbox" id="mobile-nav" 
                  sx={{
                    display:`none`,
                    "&:checked": {
                      body: {
                        overflow: `hidden`
                      }
                    },
                    "&:checked + label": {
                      "span:nth-child(2)": {
                        width: `100%`
                      }
                    },
                    "&:checked + label + div": {
                      height: `40vh`,
                      borderBottom: `0.5px solid`,
                      borderColor: tailwind.colors.gray[4],
                    }
                  }}
                />
                
                <label htmlFor="mobile-nav"
                  sx={{
                    cursor: `pointer`,
                    display: `block`,
                    position: `relative`,
                    width: `20px`,
                    height: `40px`,
                    float: `right`,
                    span: {
                      display: `block`,
                      position: `absolute`,
                      height: `1px`,
                      borderRadius: `30px`,
                      background: `#000`,
                      transition: `all .35s`
                    }
                  }}
                >
                  <span sx={{top: `50%`, width: `100%`,}}/>
                  <span sx={{top: `65%`, right: `0`, width: `70%`,}}/>
                </label>
                <div
                  sx={{
                    mt: `10vh`,
                    width: `100%`,
                    height:`0px`,
                    background: bgColor,
                    position: `absolute`,
                    top: `76px`,
                    left: `0`,
                    zIndex: `1`,
                    transition: `all .35s`,
                    overflow: `hidden`,
                    textAlign: `center`,
                    h4: {
                      color: tailwind.colors.gray[8],
                      fontWeight: `normal`,
                      fontSize: `22px`,
                      transition: `color 0.3s ease`,
                      "&:hover": {
                        color: `#000`,
                        transition: `color 0.3s ease`,
                      }
                    }
                  }}
                >
                  <Link to="/about">
                    <h4>About</h4>
                  </Link>
                  <Link to="/tags/dev">
                    <h4 className="nav-dev">Dev</h4>
                  </Link>
                  <Link to="/tags/life">
                    <h4 className="nav-life">Life</h4>
                  </Link>
                </div>
              </div>
            </div>
        </Flex>
        
      </div>
    </header>
  )
}

export default PostHeader