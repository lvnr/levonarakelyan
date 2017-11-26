import styled from 'styled-components'

const CodeWrapper = styled.div`
   display: flex;
   height: 100%;
   padding: 100px 0;
   align-items: center;
   justify-content: center;

   a {
      text-decoration: none;
      background: transparent;
      background: rgba(0, 0, 0, .2);
      padding: 2px 6px 4px 6px;
      margin: 0 2px;
      ${''/* transition: all .3s ease-in-out; */}
   }

   a, a span {
      color: #32aaee;
      font-weight: 300;
      transition: color .7s ease-in-out;
   }

   a:hover {
      background: rgba(255, 204, 51, 1);
      cursor: pointer;
   }

   a:hover, a:hover span {
      color: black;
   }

   pre {
      min-width: 50%;
   }
`

export default CodeWrapper
