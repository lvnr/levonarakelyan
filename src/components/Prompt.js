import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import levon from '../api/levon'

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
`

const Heading = styled.h2`

`

const InputArea = styled.div`
   input {
      width: 50vw;
      background: RGBA(0, 0, 0, .2);
      border: 0;
      outline: 0;
      border-radius: 6px;
      font-size: 36px;
      padding: 10px 20px;
      color: RGB(255, 255, 255);
   }
`

const Caret = styled.div`
   width: 20px;
   height: 50px;
   background-color: RGB(247, 127, 0);
   display: none;
`

class Prompt extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      const { ui } = this.props

      return (
         <Wrapper>
            <Heading>
               ask away...
            </Heading>
            <InputArea>
               <input type='text' />
               <Caret />
            </InputArea>
         </Wrapper>
      )
   }
}

const mapStateToProps = state => ({
   ui: state.ui
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Prompt)
