import styled from 'styled-components'
import {mobileLayout} from '@ddanailov/styles/_sizes'

export const GridAWrapper = styled.section`
  position: relative;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${mobileLayout}) {
    flex-direction: column;
  }
`

export const GridItem = styled.section`
  position: relative;
  display: block;
  width: 47.5%;

  @media (max-width: ${mobileLayout}) {
    width: 100%;
  }
`
