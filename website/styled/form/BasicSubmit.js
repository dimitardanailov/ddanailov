import styled from 'styled-components'

import themes from '@ddanailov/components/Theme/configurations/dark'

const BasicSubmit = styled.button`
  position: relative;

  display: block;
  width: 100%;
  padding: 1.5rem 0;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  border: none;
  background-color: ${themes.secondary.main};
  color: #fff;
  cursor: pointer;

  &:disabled {
    background-color: ${themes.primary.light};
    color: #fff;
  }
`

export default BasicSubmit
