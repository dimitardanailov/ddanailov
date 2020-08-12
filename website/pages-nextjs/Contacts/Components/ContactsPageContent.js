import styled from 'styled-components'

import ContactForm from './ContactForm'

const Wrapper = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`

function ContactsPageContent() {
  return (
    <Wrapper>
      <h2>Hire me as a software engineer</h2>
      <p>
        Ready to start your next project with me? Fill out the form below, and
        I'll be in touch!
      </p>
      <ContactForm />
    </Wrapper>
  )
}

export default ContactsPageContent
