import React from 'react'
import low from 'lowlight'

function createClassNameString(classNames) {
  return classNames.join(' ')
}

function createChildren(style) {
  let childrenCount = 0
  return children => {
    childrenCount += 1
    return children.map((child, i) => createElement({
      node: child,
      style,
      key:`code-segment-${childrenCount}-${i}`
    }))
  }
}

function createElement({ node, style, key }) {
  const { properties, type, tagName, value } = node
  if (type === 'text') {
    return value
  } else if (tagName) {
    const TagName = tagName
    const childrenCreator = createChildren(style)
    const props = { className: createClassNameString(properties.className) }
    const children = childrenCreator(node.children)
    return <TagName key={key} {...props}>{ children }</TagName>
  }
}

export default function () {
 return function SyntaxHighlighter(props) {
    const {
      language,
      children,
      codeTagProps = {},
      ...rest
    } = props
    const codeTree = language ? low.highlight(language, children) : low.highlightAuto(children)
    // const defaultPreStyle = { backgroundColor: '#fff' }
    const preProps = Object.assign({}, rest, { className: 'hljs' })

    return (
      <pre {...preProps}>
        <code {...codeTagProps}>
          { codeTree.value.map((node, i) => createElement({
            node,
            // style,
            key: `code-segement-${i}`
          })) }
        </code>
      </pre>
    )
  }
}
