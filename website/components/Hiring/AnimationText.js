import Typing from '@ddanailov/components/Animations/Typing'
import AdaptiveLayout from '@ddanailov/components/AdaptiveComponents/Layout'
import Slogan from '@ddanailov/styled/Slogan'

import {mobileLayout} from '@ddanailov/styles/_sizes'

import styled from 'styled-components'

const TypingWrapper = styled.span`
  margin-top: 0.3rem;
  margin-left: 0.5rem;

  @media (max-width: ${mobileLayout}) {
    margin: 0;
  }
`

function AnimationText() {
  return (
    <AdaptiveLayout alignItems="center" overflow="hidden">
      <Slogan>Hire me as:</Slogan>
      <TypingWrapper>
        <Typing />
      </TypingWrapper>
    </AdaptiveLayout>
  )
}

export default AnimationText
