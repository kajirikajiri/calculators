const replacer = (T: string): string => {
  // eslint-disable-next-line no-useless-escape, no-control-regex
  T = T.replace(/(\|\\r|	|\\f|\\v)+/g, "") // Remove line breaks, tabs etc.
  T = T.replace(/\/\*.+?\*\//g, "") // Remove comments.
  T = T.replace(/ +/g, " ") // Remove redundant whitespace.
  T = T.replace(/ *{ */g, "{") // Remove spaces around {
  T = T.replace(/ *} */g, "}") // Remove spaces around }
  T = T.replace(/ *: */g, ":") // Remove spaces around :
  T = T.replace(/ *; */g, ";") // Remove spaces around ;
  T = T.replace(/([^{])\s*\{\s*([^}]*?)\s*}/, "\n")
  return T
}

function camelize(str: string): string {
  const arr = str.split("-")
  const capital = arr.map((item, index) =>
    index
      ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
      : item.toLowerCase()
  )
  const capitalString = capital.join("")
  return capitalString
}

const getKebabList = (str: string): RegExpMatchArray | null => {
  return str.match(/[0-9A-Za-z]{1,}-[0-9A-Za-z]{1,}:/g)
}

export const cssToReactStyleConverter = (css: string): string => {
  css = replacer(css)

  const kebabList = getKebabList(css)
  kebabList?.forEach(kebab => {
    css = css.replace(kebab, camelize(kebab))
  })

  // ; => ';改行
  let s = css.replace(/;/g, "',\n")
  // : => : '
  s = s.replace(/:/g, ": '")

  // なぜか１文字目に存在する空白を削除
  if (s.charAt(0) === " ") s = s.slice(1)

  return s
}
