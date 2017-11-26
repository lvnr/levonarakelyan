import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import CodeWrapper from './CodeWrapper'
import EmojiButton from './EmojiButton'
import synter from '../utils/synter'

class Interests extends Component {
   constructor(props) {
      super(props)
      this.state = {
         showPianoVideo: false
      }
   }

   render() {
      const { state } = this

      return (
         <CodeWrapper>

{synter`
${ <Link to='/'> {'<--'} </Link> }

import { interests } from './levon'

[
   ${ <EmojiButton onClick={() => this.setState({ showPianoVideo: !state.showPianoVideo })}>🎹</EmojiButton> },
   ${ <a href='http://photography.levonarakelyan.com' target='_blank'>📸</a> },
   'machine learning',
   'acoustics',
]

${ state.showPianoVideo && <iframe width="560" height="315" src="https://www.youtube.com/embed/tEn8mE8gfrU?rel=0&amp;controls=0&amp;showinfo=0" frameBorder="0" allowFullScreen></iframe> }
`}

         </CodeWrapper>
      )
   }
}

export default Interests
