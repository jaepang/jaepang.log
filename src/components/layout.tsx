/** @jsx jsx */
import React from "react"
import { Global } from "@emotion/core"
import { Box, Container, jsx } from "theme-ui"
//import "typeface-ibm-plex-sans"
import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"
import CodeStyles from "../styles/code"
import SkipNavLink from "./skip-nav"

type LayoutProps = { children: React.ReactNode; className?: string; isHero?: boolean, isLife?: boolean, isPost?: boolean }

const Layout = ({ children, className = ``, isHero=false, isLife=false, isPost=false }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(theme) => ({
        "*": {
          boxSizing: `inherit`,
        },
        html: {
          WebkitTextSizeAdjust: `100%`,
        },
        body: {
          overflowX: `hidden`
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: theme.colors.text,
          color: theme.colors.background,
        },
        a: {
          color: theme.colors.sub,
          textDecoration: `none !important`,
          transition: `color 0.3s ease`,
          ":hover": {
            transition: `color 0.3s ease`,
            color: theme.colors.text,
            textDecoration: `none !important`,
          },
        },
        ".anchor-header": {
          position: `absolute`,
          top: 0,
          left: 0,
          transform: `translateX(-100%)`,
          paddingRight: `4px`,
          svg: {
            opacity: 0,
            transition: `0.1s ease`,
            "&:hover": {
              opacity: 1,
              transition: `0.1s ease`,
            }
          }
        },
        ".utterances": {
          marginTop: `2rem`,
          maxWidth: `100% !important`
        },
        ".DevHero .nav-dev": {
          color: `#fff`
        },
        ".DevLife .nav-life": {
          color: `#000`
        },
      })}
    />
    <SEO />
    <SkipNavLink>Skip to content</SkipNavLink>
    <Container>
      {!isPost &&
        <Header isHero={isHero} isLife={isLife} className={className} />
      }
      <Box id="skip-nav" sx={{ ...CodeStyles }} className={className}>
        {children}
      </Box>
      <Footer isHero={isHero} />
    </Container>
  </React.Fragment>
)

export default Layout
