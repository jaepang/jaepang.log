/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { Link } from "gatsby"
import { Flex } from "@theme-ui/components"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import SharePageButton from "./share-page-button"
import ColorModeToggle from "./colormode-toggle"
import HeaderTitle from "./header-title"
import { tailwind } from "@theme-ui/presets"

type HeaderProps = {isHero?: boolean, isLife?: boolean, className?: string}

const Header = ({isHero=false, isLife=false, className} : HeaderProps) => {
  const { navigation: nav } = useMinimalBlogConfig()
  const [colorMode, setColorMode] = useColorMode()
  let bgColor = `transparent`
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }
  if(isHero) {
    bgColor = `#000`
    if(isLife) {
      bgColor = `#FAFAFA`
    }
  }
  return (
    <header className={className}
      sx={{
        pt: `8vh`, 
        "@media screen and (max-width: 1300px)": {
          pt: `4vh`
        },
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
          <HeaderTitle isHero={isHero} isLife={isLife} />
            {!isHero && (
              <div 
                sx={{
                  display: `flex`
                }}
              >
                <SharePageButton isDark={isDark}/>
                <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
              </div>
            )}
            {isHero && (
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
                  width: `25%`,
                  justifyContent: `space-around`,
                  p: {
                    fontSize: `16px`,
                    fontWeight: `normal`,
                    my: 0,
                    pt: `0.5rem`,
                    color: isLife ? tailwind.colors.gray[8]:tailwind.colors.gray[4],
                    transition: `color 0.3s ease`,
                    "&:hover": {
                      color: isLife ? `#000`: `#fff`,
                      transition: `color 0.3s ease`,
                    }
                  },
                }}
              >
                <Link to="/about">
                  <p id="nav-about">About</p>
                </Link>
                <Link to="/tags/dev">
                  <p id="nav-dev">Dev</p>
                </Link>
                <Link to="/tags/life">
                  <p id="nav-life">Life</p>
                </Link>
              </div>
            )}
        </Flex>
        
      </div>
    </header>
  )
}

export default Header
