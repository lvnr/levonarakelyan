import React, { Component } from 'react'

class Glitcher extends Component {
   constructor(props) {
      super(props)
      this.state = {
         body: '',
         nextDelay: 100
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

   effects = [
      () => '❖',
      () => '◼︎',
      () => '►',
      () => '☒',
      () => '3',
   ]


   componentDidMount() {
      this.timer = this.createTimer()
   }

   componentWillUnmount() {
      clearTimeout(this.timer)
   }

   glitch() {
      const { children, amount = 1 } = this.props
      const characters = '▓▓░░░░☒▶︎❖◇⦿⁌✤✷✦❈✳︎✕✘❧✾❆⎈⌬⍅⍉⍋⍚⍟⍝⌒⌨⎂⎃⌇⎮⌠⁒〈〉⎇⌗⌦⌧⌘⎋⏎⏏⇧⌥'
      let newBody = children.split('')

      for (let i = 0; i < amount; i++) {
         const randomIndex = Math.floor(Math.random() * children.length)
         const randomSymbol = Math.floor(Math.random() * characters.length)
         newBody[randomIndex] = characters[randomSymbol]
      }

      this.setState({
         body: newBody.join(''),
         nextDelay: Math.random() * 30000
      })

      this.createTimer()
   }

   render() {
      const { children: body } = this.props

      return (
         <span>
            { this.state.body }
         </span>
      )
   }
}

export default Glitcher
