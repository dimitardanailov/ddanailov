import {Machine} from 'xstate'

const submitButtonStateMachine = Machine({
  id: 'submitButtonStateMachine',
  initial: 'enabled',
  states: {
    disabled: {
      on: {
        TOGGLE: 'enabled',
      },
    },
    enabled: {
      on: {
        TOGGLE: 'disabled',
      },
    },
  },
})

export default submitButtonStateMachine
