import styled from 'styled-components'

import {rotate} from '@ddanailov/styles/_keyframes'

const borderSize = '4px'

const BasicLoader = styled.span`
  border: ${borderSize} solid orange;
  border-top: ${borderSize} solid gray;
  border-radius: 50%;
  width: 24px;
  height: 24px;

  animation: ${rotate} 2s linear infinite;
`

export default BasicLoader
