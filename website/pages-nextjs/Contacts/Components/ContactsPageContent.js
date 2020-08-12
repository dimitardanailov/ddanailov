import styled from 'styled-components'

import ContactForm from './ContactForm'
import {mobileLayout} from '@ddanailov/styles/_sizes'

const Wrapper = styled.section`
  position: relative;

  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const BackgroundWrapper = styled.div`
  position: relative;

  display: block;
  width: 60%;

  @media (max-width: ${mobileLayout}) {
    width: 95%;
  }
`

const Title = styled.h2`
  font-size: 2.4rem;

  @media (max-width: ${mobileLayout}) {
    text-align: center;
  }
`

const SubTitle = styled.p`
  font-size: 1.6rem;
  font-style: italic;

  @media (max-width: ${mobileLayout}) {
    text-align: center;
  }
`

function ContactsPageContent() {
  return (
    <Wrapper>
      <BackgroundWrapper>
        <Title>Hire me as a software engineer</Title>
        <SubTitle>
          Ready to start your next project with me? Fill out the form below, and
          I'll be in touch!
        </SubTitle>
        <ContactForm />
      </BackgroundWrapper>
    </Wrapper>
  )
}

export default ContactsPageContent
