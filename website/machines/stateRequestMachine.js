import {Machine} from 'xstate'

/**
 * Machine tracks different use cases related with backend interaction.
 * States:
 * Default: Idle
 * Loading UI waits response from the backend
 * Success: response code is equal to 200
 * Error: response code is not equal to 200
 *
 * Final state: Completed
 * The final state must be activated
 * if the application layer doesn't expect an additional backend requests.
 */
const stateRequestMachine = Machine({
  id: 'stateRequestMachine',
  initial: 'idle',
  states: {
    idle: {
      on: {
        LOADING: 'loading',
      },
    },
    loading: {
      on: {
        SUCCESS: 'success',
        ERROR: 'error',
        COMPLETED: 'completed',
      },
    },
    success: {
      on: {
        LOADING: 'loading',
        ERROR: 'error',
        COMPLETED: 'completed',
      },
    },
    error: {
      on: {
        LOADING: 'loading',
        SUCCESS: 'success',
        COMPLETED: 'completed',
      },
    },
    completed: {
      type: 'final',
    },
  },
})

export default stateRequestMachine
