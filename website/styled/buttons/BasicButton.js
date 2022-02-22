import styled from 'styled-components'

import themes from '@ddanailov/components/Theme/configurations/dark'

const BasicButton = styled.button`
  position: relative;

  display: block;
  padding: ${props => props.padding};
  font-size: ${props => props.fontSize};
  border-radius: 0.5rem;
  border: none;
  background-color: ${themes.secondary.main};
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: ${themes.secondary.dark};
    color: #fff;
  }
`

export default BasicButton
