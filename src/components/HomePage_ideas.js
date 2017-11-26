import React from 'react'
import { Link } from 'react-router-dom'

import CodeWrapper from './CodeWrapper'
import synter from '../utils/synter'

// import SyntaxHighlighter from '../utils/SyntaxHighlighter'
import Glitcher from '../utils/Glitcher'
import FullScreenGlitch from '../utils/FullScreenGlitch'

const HomePage = () => {
   return (
      <CodeWrapper>
         <FullScreenGlitch />
{synter`
/**
 * welcome to levon's personal space!
 */

class levon extends human {

   static profession = null
   static religion = 'christian'
   static beliefs = [ ${ <Glitcher amount={3}>loading...</Glitcher> } ]
   static values = [ cannot load... ]
   static principles = [ 'dependencies' ]
   static secrets = [ ]
   static quotes = [
      'never say never',
      'be the change you want to see in the world'
   ]
   static friends = [ ${ <input type='text' /> } ]

   personality
   skills
   work
   hobbies
   contacts
   static thoughts = [
      'on form & essence',
      'on asking the right questions',
      'on the power of belief',
      'on government innovation',
      'on convergence of disciplines'
   ]

   static social = {
      facebook: '${ <a href='http://facebook.com/levonarakelyan' target='_blank'>levonarakelyan</a> }',
      twitter: '${ <a href='http://twitter.com/levonarakelian' target='_blank'>@levonarakelian</a> }'
   }

   static contact = {
      ✉️ => '${ <a href='mailto:me@levon.me'>me@levon.me</a> }',
      📱 => '${ <a href='tel:374-95-773-700'>+374 95 77-37-00</a>}'
   }

   ${ <Link to='/interests'>interests()</Link> }

   static personality = {${ <Link to='/languages'>🤔 😎 🤠 😇 🤑 👻</Link> }}
   static settings = {${ <Link to='/languages'>...</Link> }}
}

export default levon
`}

{/* {`
// welcome!
class levon extends human {
   mood = "😆"
   settings = {
      openminded: true,
      compassion: "●●●●●●●●●●",
      respectfulness: "●●●●●●●●●○",
   }
   values = [ ]
   interests = { }
   startups = [ "pushloop", "boomerang", "iUNU" ]
   knowledge = {
      programming: [ "react.js", "meteor", ...stuff ]
   }
   languages = () => {`}<Link to='/languages'>...languages</Link>{`}
   twitter = () => `}<a href='//twitter.com/levonarakelian' target='_blank'>@levonarakelian</a>{`
   facebook = () => `}<a href='//facebook.com/levonarakelyan' target='_blank'>levonarakelyan</a>{`
   `}<a href='//facebook.com/levonarakelyan' target='_blank'>play()</a>{`
}
`} */}
      </CodeWrapper>
   )
}

export default HomePage
