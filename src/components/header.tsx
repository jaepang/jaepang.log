/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { Flex } from "@theme-ui/components"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import SharePageButton from "./share-page-button"
import ColorModeToggle from "./colormode-toggle"
import HeaderTitle from "./header-title"

type HeaderProps = {isHome?: boolean}

const Header = ({isHome=false} : HeaderProps) => {
  const { navigation: nav } = useMinimalBlogConfig()
  const [colorMode, setColorMode] = useColorMode()
  let bgColor = `transparent`
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }
  if(isHome) {
    bgColor = `#000`
  }
  return (
    <header 
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
          justifyContent: `space-between`,
        }}
      >
        <Flex 
          sx={{ 
            alignItems: `center`, 
            justifyContent: `space-between`,
          }}
        >
          <HeaderTitle isHome={isHome} />
            {!isHome && (
              <div 
                sx={{
                  display: `flex`
                }}
              >
                <SharePageButton isDark={isDark}/>
                <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
              </div>
            )}
            {isHome && (
              <div 
                sx={{
                  display: `flex`
                }}
              >
                
              </div>
            )}
        </Flex>
        
      </div>
    </header>
  )
}

export default Header
/*<div 
            sx={{
              display: `flex`
            }}
          >
            <SharePageButton isDark={isDark}/>
            <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
          </div> */