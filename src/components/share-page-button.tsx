/** @jsx jsx */
import { useState } from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import Icons from "./icons"
import { tailwind } from "@theme-ui/presets"

type Props = {
  isDark: boolean
  toggle: (e: any) => void
}

// Adapted from: https://codepen.io/aaroniker/pen/KGpXZo and https://github.com/narative/gatsby-theme-novela/blob/714b6209c5bd61b220370e8a7ad84c0b1407946a/%40narative/gatsby-theme-novela/src/components/Navigation/Navigation.Header.tsx

export function copyToClipboard(toCopy: string) {
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

const SharePageButton = ({ isDark }: Props) => {
  const [hasCopied, setHasCopied] = useState<boolean>(false);
  const fill = isDark ? tailwind.colors.gray[4] : tailwind.colors.gray[8];

  function copyToClipboardOnClick() {
    if (hasCopied) return;

    copyToClipboard(window.location.href);
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 1000);
  }

  return (
    <IconWrapper
      onClick={copyToClipboardOnClick}
      data-a11y="false"
      aria-label="Copy URL to clipboard"
      title="Copy URL to clipboard"
    >
      <Icons.Link fill={fill} />
    </IconWrapper>
  );
};

const IconWrapper = styled.button<{ isDark: boolean }>`
  margin-top: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  position: relative;
  border-radius: 5px;
  width: 40px;
  height: 25px;
  
  
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  margin-left: 30px;

  &:hover {
    opacity: 1;
  }

  &[data-a11y="true"]:focus::after {
    content: "";
    position: absolute;
    left: 0;
    top: -30%;
    width: 100%;
    height: 160%;
    border: 2px solid ${p => p.theme.colors.toggleIcon};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }
`

export default SharePageButton
