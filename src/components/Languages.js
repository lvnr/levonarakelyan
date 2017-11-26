import React from 'react'
import { Link } from 'react-router-dom'

import CodeWrapper from './CodeWrapper'
import synter from '../utils/synter'

const Languages = () => {
   return (
      <CodeWrapper>
{synter`
class levon extends human {
   static languages = () => ${ <Link to='/'>home</Link> }
   static twitter = () => ${ <a href='//twitter.com/levonarakelian' target='_blank'>@levonarakelian</a> }
}
`}
      </CodeWrapper>
   )
}

export default Languages
