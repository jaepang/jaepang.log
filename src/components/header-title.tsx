/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import replaceSlashes from "../utils/replaceSlashes"
import useSiteMetadata from "../hooks/use-site-metadata"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"

type HeaderTitleProps = {color?: string}

const HeaderTitle = ({color=``}: HeaderTitleProps) => {
  const { siteTitle } = useSiteMetadata()
  const { basePath } = useMinimalBlogConfig()
  let hdColor = color

  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ 
        fontFamily: `Pacifico, cursive`, 
        color: hdColor, 
        textDecoration: `none`, 
        ":hover": {
          color: hdColor,
        } 
      }}
    >
      <h1 sx={{ my: 0, fontWeight: `medium`, fontSize: 3 }}>{siteTitle}</h1>
    </Link>
  )
}

export default HeaderTitle
