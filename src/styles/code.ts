import { tint } from "@theme-ui/color"

const code = {
  "[data-name='live-preview'], [data-name='live-editor']": {
    fontFamily: `Ubuntu Mono !important`,
    mx: [0, 0, 0, -3],
    zIndex: 0
  },
  "[data-name='live-editor']": {
    fontSize:  [`0.75rem`, `1rem`],
    borderTopLeftRadius: `10px`,
    borderTopRightRadius: `10px`,
    "textarea, pre": {
      padding: (t: any) => `${t.space[3]} !important`,
    },
  },
  "[data-name='live-preview']": {
    padding: (t: any) => `calc(${t.space[2]} + 10px) !important`,
    backgroundColor: tint(`primary`, 0.2),
    borderBottomLeftRadius: `10px`,
    borderBottomRightRadius: `10px`,
    mb: 4,
  },
  ".prism-code": {
    fontFamily: `Ubuntu Mono`,
    fontSize:  [`0.75rem`, `1rem`],
    padding: 3,
    webkitOverflowScrolling: `touch`,
    backgroundColor: `#2C3643`,
    overflow: `initial`,
    float: `left`,
    minWidth: `100%`,
    mb: 0,
    '&[data-linenumber="false"]': {
      ".token-line": {
        pl: 3,
      },
    },
  },
  ".token": {
    display: `inline-block`,
  },
  "p > code, li > code": {
    fontFamily: `Ubuntu Mono`,
    fontSize:  [`0.75rem`, `1rem`],
    //backgroundColor: `#2C3643`,
    backgroundColor: `#EDECEB`,
    //color: `#f8f8f2`,
    color: `primary`,
    px: 2,
    py: 1,
    borderRadius: `5px`,
  },
  ".gatsby-highlight": {
    fontSize: [1, 1, 2],
    position: `relative`,
    webkitOverflowScrolling: `touch`,
    bg: `#2C3643`,
    color: `white`,
    overflow: `auto`,
    borderBottomLeftRadius: `10px`,
    borderBottomRightRadius: `10px`,
    mx: [0, 0, 0, -3],
    mb: 3,
    ".token-line": {
      mx: -3,
    },
    "pre.language-": {
      mt: 0,
    },
    "pre.language-noLineNumbers": {
      mt: 0,
    },
    'pre[class*="language-"]:before': {
      bg: `white`,
      borderRadius: `0 0 0.25rem 0.25rem`,
      color: `black`,
      fontSize: `12px`,
      letterSpacing: `0.025rem`,
      padding: `0.1rem 0.5rem`,
      position: `absolute`,
      left: `1rem`,
      textAlign: `right`,
      textTransform: `uppercase`,
      top: 0,
    },
    'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before': {
      content: `"js"`,
      background: `#f7df1e`,
      color: `black`,
    },
    'pre[class~="language-jsx"]:before': {
      content: `"jsx"`,
      background: `#61dafb`,
      color: `black`,
    },
    'pre[class~="language-ts"]:before': {
      content: `"ts"`,
      background: `#61dafb`,
      color: `black`,
    },
    'pre[class~="language-tsx"]:before': {
      content: `"tsx"`,
      background: `#61dafb`,
      color: `black`,
    },
    'pre[class~="language-html"]:before': {
      content: `"html"`,
      background: `#005a9c`,
      color: `white`,
    },
    'pre[class~="language-xml"]:before': {
      content: `"xml"`,
      background: `#005a9c`,
      color: `white`,
    },
    'pre[class~="language-svg"]:before': {
      content: `"svg"`,
      background: `#005a9c`,
      color: `white`,
    },
    'pre[class~="language-graphql"]:before': {
      content: `"GraphQL"`,
      background: `#E10098`,
    },
    'pre[class~="language-css"]:before': {
      content: `"css"`,
      background: `#ff9800`,
      color: `black`,
    },
    'pre[class~="language-mdx"]:before': {
      content: `"mdx"`,
      background: `#f9ac00`,
      color: `black`,
    },
    'pre[class~="language-text"]:before': {
      content: `"text"`,
    },
    "pre[class~='language-shell']:before": {
      content: `'shell'`,
    },
    "pre[class~='language-sh']:before": {
      content: `'sh'`,
    },
    "pre[class~='language-bash']:before": {
      content: `'bash'`,
    },
    "pre[class~='language-yaml']:before": {
      content: `'yaml'`,
      background: `#ffa8df`,
    },
    "pre[class~='language-yml']:before": {
      content: `'yml'`,
      background: `#ffa8df`,
    },
    "pre[class~='language-markdown']:before": {
      content: `'md'`,
    },
    "pre[class~='language-json']:before, pre[class~='language-json5']:before": {
      content: `'json'`,
      background: `linen`,
    },
    "pre[class~='language-diff']:before": {
      content: `'diff'`,
      background: `#e6ffed`,
    },
  },
  '.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]': {
    wordSpacing: `normal`,
    wordBreak: `normal`,
    overflowWrap: `normal`,
    lineHeight: 1.5,
    tabSize: 4,
    hyphens: `none`,
  },
  ".line-number-style": {
    display: `inline-block`,
    width: `3em`,
    userSelect: `none`,
    opacity: 0.3,
    textAlign: `center`,
    position: `relative`,
  },
  ".code-title": {
    borderTopLeftRadius: `10px`,
    borderTopRightRadius: `10px`,
    backgroundColor: tint(`primary`, 0.2),
    color: `white`,
    fontSize: 0,
    px: 3,
    py: 2,
    fontFamily: `Ubuntu Mono`,
    mx: [0, 0, 0, -3],
  },
  ".token-line": {
    pr: 3,
  },
  ".highlight-line": {
    backgroundColor: `#222A34`,
    borderLeft: `4px solid #0C7D9D`,
    ".line-number-style": {
      width: `calc(3em - 4px)`,
      opacity: 0.5,
      left: `-2px`,
    },
  },
}

export default code
