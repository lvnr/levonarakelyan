/* eslint-disable react/no-danger */

import React from 'react'
// import low from 'lowlight'

import highlighter from './highlighter'

function createClassNameString(classNames) {
  return classNames.join(' ')
}

function createChildren() {
  let childrenCount = 0
  return children => {
    childrenCount += 1
    return children.map((child, i) => createElement({
      node: child,
      // style,
      key:`code-segment-${childrenCount}-${i}`
    }))
  }
}

function createElement({ node, key }) {
  const { properties, type, tagName, value } = node
  if (type === 'text') {
    return value
  } else if (tagName) {
    const TagName = tagName
    const childrenCreator = createChildren()
    const props = { className: createClassNameString(properties.className) }
    const children = childrenCreator(node.children)
    return <TagName key={key} {...props}>{ children }</TagName>
  }
}

const synter = (literals, ...expressions) => {
   let children = []

   let codeTree = literals.reduce((accumulator, part) => accumulator + 'REACT_NODE' + part)

   // let codeTree = low.highlight('js', codeTree).value

   codeTree = highlighter(codeTree).split('REACT_NODE')

   codeTree.length === 1
      ? children.push(codeTree[0])
      : codeTree.reduce((accumulator, part, i) => {
         children.push(accumulator)
         typeof expressions[i - 1] === 'object'
            && children.push({ ...expressions[i - 1], key: `${ i - 1 }-comp` })
         children.push(part)
      })

   return (
      <pre>
         <code>
            { children.map((c, i) => (
               typeof c === 'string'
                  ? <span key={i} dangerouslySetInnerHTML={{ __html: c }} />
                  // ? createElement({ node, key: `code-segement-${ i }` })
                  : c
            )) }
         </code>
      </pre>
   )

}

export default synter
