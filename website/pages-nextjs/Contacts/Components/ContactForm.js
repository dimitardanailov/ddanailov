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
  const [firstName, setFirstName] = useState(() => '')
  const [lastName, setLastName] = useState(() => '')
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

    sendStateRequest('LOADING')
    sendSubmitStateRequest('TOGGLE')

    console.log('firstName', firstName)
    console.log('lastName', lastName)
    console.log('email', email)
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <GridAWrapper>
          <GridItem>
            <BasicLabel htmlForm="contact-form-first-name">
              First name
            </BasicLabel>
            <InputField
              id="contact-form-first-name"
              required
              parentTypingCallback={setFirstName}
              styles={css`
                width: 100%;
              `}
            />
          </GridItem>
          <GridItem>
            <BasicLabel htmlForm="contact-form-last-name">Last name</BasicLabel>
            <InputField
              id="contact-form-last-name"
              required
              parentTypingCallback={setLastName}
              styles={css`
                width: 100%;
              `}
            />
          </GridItem>
        </GridAWrapper>
        <>
          <BasicLabel id="contact-form-email">E-mail*</BasicLabel>
          <EmailField
            id="contact-form-email"
            parentTypingCallback={setEmail}
            required
            placeholder="Type your Email address"
            styles={css`
              width: 100%;
            `}
          />
        </>
        <>
          <BasicLabel id="contact-form-subject">Subject*</BasicLabel>
          <InputField
            id="contact-form-subject"
            required
            parentTypingCallback={setSubject}
            styles={css`
              width: 100%;
            `}
          />
        </>
        <fieldset>
          <Submit
            type="submit"
            disabled={
              currentSubmitStateRequest.matches('disabled') ? true : false
            }
          >
            Hire me!!
          </Submit>
        </fieldset>

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
