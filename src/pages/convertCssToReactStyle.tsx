import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import React, { useCallback, useState } from "react"
import { CopyBlock, dracula } from "react-code-blocks"
import TextareaAutosize from "@material-ui/core/TextareaAutosize"
import { cssToReactStyleConverter } from "../scripts/cssToReactStyleConverter"

const language = "css"

const ConvertCssToReactStyle: React.FC = () => {
  const [text, setText] = useState(
    "position: 'static',\nleft: '0%',\nright: '0%',\ntop: '0%',\nbottom: '0%',\nfontFamily: 'Noto Sans JP',\nfontStyle: 'normal',\nfontWeight: 'normal',\nfontSize: '13px',\nlineHeight: '156.5%',\nletterSpacing: '0.03em',\ncolor: '#4F4F4F',\nflex: 'none',\norder: '0',\nalignSelf: 'center',\nflexGrow: '0',\nmargin: '2px 0px',"
  )

  const handler = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const s = cssToReactStyleConverter(e.target.value)
      setText(s)
    },
    []
  )

  return (
    <Layout>
      <SEO title={"ip-address"} />
      <TextareaAutosize
        onChange={handler}
        style={{ width: "100%" }}
        aria-label="minimum height"
        rowsMin={3}
        placeholder="/* #name */&#13;&#10;position: static;&#13;&#10;left: 0%;&#13;&#10;right: 0%;&#13;&#10;top: 0%;&#13;&#10;bottom: 0%;&#13;&#10;font-family: Noto Sans JP;&#13;&#10;font-style: normal;&#13;&#10;font-weight: normal;&#13;&#10;font-size: 13px;&#13;&#10;line-height: 156.5%;&#13;&#10;/* or 20px */&#13;&#10;letter-spacing: 0.03em;&#13;&#10;/* Gray 2 */&#13;&#10;color: #4F4F4F;&#13;&#10;/* Inside Auto Layout */&#13;&#10;flex: none;&#13;&#10;order: 0;&#13;&#10;align-self: center;&#13;&#10;flex-grow: 0;&#13;&#10;margin: 2px 0px; "
      />
      <CopyBlock
        text={text}
        language={language}
        theme={dracula}
        wrapLines
        codeBlock
      />
    </Layout>
  )
}

export default ConvertCssToReactStyle
