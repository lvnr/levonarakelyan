import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.span`
   cursor: default;
   position: relative;
`

const TooltipContent = styled.div`
   position: fixed;
   padding: 5px 10px;
   background: orange;
   border-radius: 20px;
   line-height: 1em;
   font-size: .8em;
   color: #000;
   left: ${ props => (props.position.x || 0) + (props.offsetX || 0) }px;
   top: ${ props => (props.position.y || 0) + (props.offsetY || 0) }px;
`

class Tooltip extends Component {
   state = {
      position: { x: 0, y: 0 },
      showTooltip: false,
   }

   handleTooltipAppear = () => {
      this.setState({ showTooltip: true })
   }

   handleTooltipDisappear = () => {
      this.setState({ showTooltip: false })
   }

   handleTooltipPosition = (e) => {
      this.setState({ position: { x: e.clientX, y: e.clientY } })
   }

   render() {
      const { children, body } = this.props
      const { showTooltip, position } = this.state

      return (
         <Wrapper
            onMouseEnter={this.handleTooltipAppear}
            onMouseLeave={this.handleTooltipDisappear}
            onMouseMove={this.handleTooltipPosition}
         >
            {showTooltip && (
               <TooltipContent
                  position={position}
                  offsetX={10}
                  offsetY={20}
               >
                  {body}
               </TooltipContent>
            )}
            {children}
         </Wrapper>
      )
   }
}

export default Tooltip
