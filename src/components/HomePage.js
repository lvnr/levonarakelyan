import React from 'react'
import { Link } from 'react-router-dom'

import CodeWrapper from './CodeWrapper'
import Tooltip from './Tooltip'
import synter from '../utils/synter'

const HomePage = () => {
   return (
      <CodeWrapper>
{synter`
/**
 * welcome to levon arakelyan's personal website!
 */

class levon extends ${ <Tooltip body='human'>👨</Tooltip> } {

   residence = ${ <Tooltip body='armenia'>🇦🇲</Tooltip> }
   profession = undefined 🤹‍
   fortes = [ ${ <Tooltip body='quick study'>👨‍🎓</Tooltip> }, ${ <Tooltip body='attention to detail'>🔎</Tooltip> } ]

   ${ <Link to='/interests'>interests()</Link> }

   work = [ ${ <a href='http://mojilytics.com' target='_blank'>mojilytics</a> }, 'iUNU' ]

   social = {
      facebook: '${ <a href='http://facebook.com/levonarakelyan' target='_blank'>levonarakelyan</a> }',
      twitter: '${ <a href='http://twitter.com/levonarakelian' target='_blank'>@levonarakelian</a> }'
   }

   contact = {
      ✉️ => '${ <a href='mailto:me@levon.me'>me@levon.me</a> }',
      📱 => '${ <a href='tel:374-95-773-700'>+374 95 77-37-00</a>}'
   }
}

export default levon
`}
      </CodeWrapper>
   )
}

export default HomePage
