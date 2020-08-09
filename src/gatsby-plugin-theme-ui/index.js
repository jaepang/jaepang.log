import { merge } from "theme-ui"
import { tailwind } from "@theme-ui/presets"

const theme = merge(tailwind, {
  initialColorModeName: `light`,
  useCustomProperties: true,
  colors: {
    primary: `#EE5DA9`,
    secondary: `#283F69`,
    background: `#FFF`,
    //background: `#FAFAFA`,
    toggleIcon: tailwind.colors.gray[8],
    heading: `#1A202C`,
    header: `#FFFFFF`,
    divide: tailwind.colors.gray[4],
    sub: `rgb(134, 142, 150)`,
    modes: {
      dark: {
        text: tailwind.colors.gray[4],
        secondary: `#7f8ea3`,
        toggleIcon: tailwind.colors.gray[4],
        background: `#1A202C`,
        heading: tailwind.colors.white,
        header: `#212938`,
        divide: tailwind.colors.gray[8],
        sub: tailwind.colors.gray[5],
        muted: tailwind.colors.gray[8],
      },
    },
  },
  fonts: {
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"`,
  },
  styles: {
    header: {
      fontSize: [4, 5, 6],
      mt: 4,
      color: `heading`,
    },
    root: {
      color: `text`,
      backgroundColor: `background`,
      margin: 0,
      pl: `2rem`,
      pr: `2rem`,
      pb: `2rem`,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`,
    },
    p: {
      fontSize: [1, 1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
    },
    ul: {
      li: {
        fontSize: [1, 1, 2],
        letterSpacing: `-0.003em`,
        lineHeight: `body`,
        "--baseline-multiplier": 0.179,
        "--x-height-multiplier": 0.35,
      },
    },
    ol: {
      li: {
        fontSize: [1, 1, 2],
        letterSpacing: `-0.003em`,
        lineHeight: `body`,
        "--baseline-multiplier": 0.179,
        "--x-height-multiplier": 0.35,
      },
    },
    h1: {
      variant: `text.heading`,
      fontFamily: `Pacifico, cursive`,
      fontSize: [5, 6, 7],
      mt: 4,
    },
    h2: {
      variant: `text.heading`,
      fontSize: [3, 4, 5],
      mt: 4,
    },
    h3: {
      variant: `text.heading`,
      fontSize: [2, 3, 4],
      mt: 4,
    },
    h4: {
      variant: `text.heading`,
      fontSize: [1, 2, 3],
      mt: 3,
    },
    h5: {
      variant: `text.heading`,
      fontSize: [0.5, 1, 2],
      mt: 3,
    },
    h6: {
      variant: `text.heading`,
      fontSize: 1,
      mb: 2,
    },
    blockquote: {
      color: tailwind.colors.gray[6],
      mx: 0,
      mt: -3,
      mb: `1.75rem`,
      p: {
        fontStyle: `italic`,
        //fontFamily: `Gelasio, serif`,
        padding: `0 2.5%`,
      },
      "&::before": {
        content: `'\\201c'`, // "
        fontSize: `6rem`,
        fontFamily: 'Arizonia, serif',
        display: `block`,
        mt: `-2.5rem`,
        mb: [`-6.5rem`, `-7rem`],
      }
    },
    table: {
      width: `100%`,
      my: 4,
      borderCollapse: `separate`,
      borderSpacing: 0,
      [[`th`, `td`]]: {
        textAlign: `left`,
        py: `4px`,
        pr: `4px`,
        pl: 0,
        borderColor: `muted`,
        borderBottomStyle: `solid`,
      },
    },
    th: {
      verticalAlign: `bottom`,
      borderBottomWidth: `2px`,
      color: `heading`,
    },
    td: {
      verticalAlign: `top`,
      borderBottomWidth: `1px`,
    },
    hr: {
      mx: 0,
    },
  },
  layout: {
    container: {
      //paddingBottom: `3%`,
      //paddingLeft: [`5%`, `10%`],
      //paddingRight: [`5%`, `10%`],
      maxWidth: `1024px`,
    },
  },
  text: {
    heading: {
      fontFamily: `heading`,
      fontWeight: `heading`,
      lineHeight: `heading`,
      color: `heading`,
    },
  },
  dividers: {
    bottom: {
      borderBottomStyle: `solid`,
      borderBottomWidth: `1px`,
      borderBottomColor: `divide`,
      pb: 3,
    },
    top: {
      borderTopStyle: `solid`,
      borderTopWidth: `1px`,
      borderTopColor: `divide`,
      pt: 3,
    },
  },
  links: {
    secondary: {
      color: `sub`,
      textDecoration: `none`,
      transition: `color 0.3s ease`,
      ":hover": { 
        transition: `color 0.3s ease`,
        color: `heading` 
      } 
    },
    listItem: {
      fontFamily: `Pacifico`,
      backgroundColor: `primary`,
      borderRadius: `5px`,
      fontSize: [1, 2, 3],
      px: `0.5rem`,
      color: `white`,
    },
  },
})

export default theme
