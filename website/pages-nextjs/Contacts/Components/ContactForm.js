import React, {useState} from 'react'

import {useMachine} from '@xstate/react'

import Wrapper from '@ddanailov/styled/form/BasicWrapper'
import Form from '@ddanailov/styled/form/BasicForm'
import Submit from '@ddanailov/styled/form/BasicSubmit'
import InputField from '@ddanailov/components/Form/InputField'
import EmailField from '@ddanailov/components/Form/EmailField'
import BasicLabel from '@ddanailov/styled/form/BasicLabel'
import Loader from '@ddanailov/components/Form/Loader'
import {GridAWrapper, GridItem} from '@ddanailov/styled/grids/grid-a'

// Global machines
import stateRequestMachine from 'machines/stateRequestMachine'
import submitButtonStateMachine from 'machines/submitButtonStateMachine'

import {css} from 'styled-components'

function ContactForm() {
  const [name, setName] = useState(() => '')
  const [email, setEmail] = useState(() => '')
  const [subject, setSubject] = useState(() => '')

  const [currentSubmitStateRequest, sendSubmitStateRequest] = useMachine(
    submitButtonStateMachine,
  )
  const [currentStateRequest, sendStateRequest] = useMachine(
    stateRequestMachine,
  )

  const handleSubmit = e => {
    e.preventDefault()

    // sendStateRequest('LOADING')
    // sendSubmitStateRequest('TOGGLE')
    const mail = 'dimityr.danailov@gmail.com'
    window.open(`mailto:${mail}?subject=${subject}`)
  }

  const inputFieldStyle = css`
    width: 100%;
    margin-bottom: 1rem;
  `

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <>
          <BasicLabel id="contact-form-subject">Subject</BasicLabel>
          <InputField
            id="contact-form-subject"
            parentTypingCallback={setSubject}
            styles={inputFieldStyle}
          />
        </>
        <Submit
          type="submit"
          disabled={
            currentSubmitStateRequest.matches('disabled') ? true : false
          }
        >
          Hire me!!
        </Submit>

        {currentStateRequest.matches('loading') ? (
          <Loader
            styles={css`
              margin-top: 1rem;
              width: 100%;
            `}
          />
        ) : null}
      </Form>
    </Wrapper>
  )
}

export default ContactForm
