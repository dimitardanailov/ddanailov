import styled from 'styled-components'

import {
  opacity,
  borderRadius,
  boxShadow,
} from '@ddanailov/styles/form/configurations'

const BasicField = styled.input`
  position: relative;

  text-indent: 1rem;
  padding: 1rem 0;
  border-radius: ${borderRadius};

  background-color: #fff;
  color: #000;
  border: 1px solid #e0e0e0;

  box-shadow: ${boxShadow};
  opacity: ${opacity};
`

export default BasicField
