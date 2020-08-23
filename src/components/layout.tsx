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

type LayoutProps = { children: React.ReactNode; className?: string; isHero?: boolean }

const Layout = ({ children, className = ``, isHero = false }: LayoutProps) => (
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
        ".utterances": {
          marginTop: `2rem`,
          maxWidth: `100% !important`
        }
      })}
    />
    <SEO />
    <SkipNavLink>Skip to content</SkipNavLink>
    <Container>
      <Header isHero={isHero} />
      <Box id="skip-nav" sx={{ ...CodeStyles }} className={className}>
        {children}
      </Box>
      <Footer isHero={isHero} />
    </Container>
  </React.Fragment>
)

export default Layout
