import React, { Component } from 'react'
import _ from 'lodash'
import styled from 'styled-components'

const Wrapper = `

`

const Particle = styled.div`
   width: 10px;
   height: 14px;
   background: yellow;
   position: fixed;
   top: ${ props => props.y ? props.y : 0 }px;
   left: ${ props => props.x ? props.x : 0 }px;
`

class FullScreenGlitch extends Component {
   constructor(props) {
      super(props)
      this.state = {
         body: '',
         nextDelay: 100,
         height: 0,
         width: 0
      }
      this.glitch = this.glitch.bind(this)
      this.createTimer = this.createTimer.bind(this)
   }

   createTimer() {
      return setTimeout(
         () => this.glitch(),
         this.state.nextDelay
      )
   }

   componentDidMount() {
      this.timer = this.createTimer()
      this.setState({
         height: window.innerHeight,
         width: window.innerWidth
      })
   }

   componentWillUnmount() {
      clearTimeout(this.timer)
   }

   glitch() {
      const { children, amount = 1 } = this.props
      const characters = '☒▶︎❖◇⦿⁌✤✷✦❈✳︎✕✘❧✾❆⎈⌬⍅⍉⍋⍚⍟⍝⌒⌨⎂⎃⌇⎮⌠⁒〈〉⎇⌗⌦⌧⌘⎋⏎⏏⇧⌥'
      let newBody = children.split('')

      for (let i = 0; i < amount; i++) {
         const randomIndex = Math.floor(Math.random() * children.length)
         const randomSymbol = Math.floor(Math.random() * characters.length)
         newBody[randomIndex] = characters[randomSymbol]
      }

      this.setState({
         body: newBody.join(''),
         nextDelay: Math.random() * 3000
      })

      this.createTimer()
   }

   generate() {
      const x = 50
      const y = 50
      const particles = _.range(100)

      return (
         <div>
            { particles.map((p, i) =>
               <Particle
                  key={`glitch-particle-${ i }`}
                  x={Math.random() * this.state.width}
                  y={Math.random() * this.state.height}
               />
            )}
         </div>
      )
   }

   render() {
      return (
         <div>
            { this.generate() }
         </div>
      )
   }
}

export default FullScreenGlitch
