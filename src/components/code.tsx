/* eslint react/destructuring-assignment: 0 */
import React, { useState } from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import loadable from "@loadable/component"
import theme from "../prism-react-renderer/themes/chester"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import { Language } from "../types"
import Icons from "./icons"

type CodeProps = {
  codeString: string
  language: Language
  noLineNumbers?: boolean
  metastring?: string
  [key: string]: any
}

function copyToClipboard(toCopy: string) {
  const el = document.createElement(`textarea`);
  el.value = toCopy;
  el.setAttribute(`readonly`, ``);
  el.style.position = `absolute`;
  el.style.left = `-9999px`;
  document.body.appendChild(el);
  el.select();
  document.execCommand(`copy`);
  document.body.removeChild(el);
}
interface CopyProps {
  toCopy: string
}

const Copy: React.FC<CopyProps> = ({ toCopy }) => {
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  function copyToClipboardOnClick() {
    if (hasCopied) return

    copyToClipboard(toCopy);
    setHasCopied(true)

    setTimeout(() => {
      setHasCopied(false);
    }, 2000)
  }

  return (
    <button className="code-copy" onClick={copyToClipboardOnClick} data-a11y="false">
      {hasCopied ? (
        <>
          Copied <Icons.Copied fill="rgb(134, 142, 150)" />
        </>
      ) : (
        <>
          Copy <Icons.Copy fill="rgb(134, 142, 150)" />
        </>
      )}
    </button>
  )
}

function getParams(className = ``) {
  const [lang = ``, params = ``] = className.split(`:`)

  return [
    // @ts-ignore
    lang.split(`language-`).pop().split(`{`).shift(),
  ].concat(
    // @ts-ignore
    params.split(`&`).reduce((merged, param) => {
      const [key, value] = param.split(`=`)
      // @ts-ignore
      merged[key] = value
      return merged
    }, {})
  )
}

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = (meta: string) => {
  if (!RE.test(meta)) {
    return () => false
  }
  const lineNumbers = RE.exec(meta)![1]
    .split(`,`)
    .map((v) => v.split(`-`).map((x) => parseInt(x, 10)))
  return (index: number) => {
    const lineNumber = index + 1
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    )
    return inRange
  }
}

const LazyLiveProvider = loadable(async () => {
  const Module = await import(`react-live`)
  const { LiveProvider, LiveEditor, LiveError, LivePreview } = Module
  return (props: any) => (
    <LiveProvider {...props}>
      <LiveEditor data-name="live-editor" />
      <LiveError />
      <LivePreview data-name="live-preview" />
    </LiveProvider>
  )
})

const Code = ({
  codeString,
  noLineNumbers = false,
  className: blockClassName,
  metastring = ``,
  ...props
}: CodeProps) => {
  const { showLineNumbers } = useMinimalBlogConfig()

  const [language, { title = `` }] = getParams(blockClassName)
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  const hasLineNumbers = !noLineNumbers && language !== `noLineNumbers` && showLineNumbers
  const radius = {borderTopLeftRadius: `5px`, borderTopRightRadius: `5px`}

  if (props[`react-live`]) {
    return <LazyLiveProvider code={codeString} noInline theme={theme} />
  }
  return (
    <Highlight {...defaultProps} code={codeString} language={language} theme={theme} sx={{position: `relative`}}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <React.Fragment>
          {title && (
            <div className="code-title">
              <div>{title}</div>
            </div>
          )}
          <div className="gatsby-highlight" data-language={language} style={title ? null : radius}>
            <Copy toCopy={codeString} />
            <pre className={className} style={style} data-linenumber={hasLineNumbers}>
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i })

                if (shouldHighlightLine(i)) {
                  lineProps.className = `${lineProps.className} highlight-line`
                }

                return (
                  <div {...lineProps}>
                    {hasLineNumbers && <span className="line-number-style">{i + 1}</span>}
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                )
              })}
            </pre>
          </div>
        </React.Fragment>
      )}
    </Highlight>
  )
}

export default Code
