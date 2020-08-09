/** @jsx jsx */
import { useState } from "react";
import { jsx, useColorMode } from "theme-ui"
import { Flex } from "@theme-ui/components"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import SharePageButton from "./share-page-button"
import ColorModeToggle from "./colormode-toggle"
import HeaderTitle from "./header-title"
import Icons from "./icons"

const Header = () => {
  const { navigation: nav } = useMinimalBlogConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header 
      sx={{
        my: [3, 4, 5], 
        width: `100vw`, 
        marginLeft: `calc(-50vw + 50%)`,
        backgroundColor: `background`,
        px: `2.7rem`,
        pt: `1rem`,
        pb: `1.5rem`
      }}
    >
      <div
        sx={{
          maxWidth: `1024px`,
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
          <HeaderTitle />
          <div 
            sx={{
              display: `flex`
            }}
          >
            <SharePageButton isDark={isDark}/>
            <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
          </div>
        </Flex>
        
      </div>
    </header>
  )
}

export default Header
