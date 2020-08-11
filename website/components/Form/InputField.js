import React, {useEffect, useState} from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import usePrevious from '@ddanailov/hooks/usePrevious'

import BasicField from '@ddanailov/styled/form/BasicField'

const Field = styled(BasicField)`
  position: relative;
`

function oldValueShouldBeDifferent(oldPreviousValue, value) {
  return value !== oldPreviousValue.value
}

function InputField({
  id,
  type,
  placeholder,
  required,
  error,
  previousValue,
  parentTypingCallback,
  styles,
}) {
  const [value, setValue] = useState(() => previousValue)

  // Get the previous value (was passed into hook on last render)
  const oldPreviousValue = usePrevious({value})

  useEffect(() => {
    const isValid = typeof oldPreviousValue === 'object'
    parentTypingCallback(value)

    let oldValueIsValid = false
    if (isValid) {
      oldPreviousValue
    }

    if (required && isValid && oldValueIsValid) {
      setRequiredFieldIsVisible(value)
    }
  }, [required, oldPreviousValue, value])

  const [requiredFieldIsHidden, setRequiredFieldIsVisible] = useState(
    () => !error,
  )
  useEffect(() => {
    setRequiredFieldIsVisible(!error)
  }, [error])

  return (
    <>
      <Field
        id={id}
        data-testid={id}
        type={type}
        required={required}
        placeholder={placeholder}
        onChange={e => setValue(e.target.value)}
        css={styles}
      />

      {!requiredFieldIsHidden && <BasicError text="Required" />}
    </>
  )
}

InputField.defaultProps = {
  type: 'text',
  placeholder: '',
  required: false,
  error: false,
  previousValue: '',
  styles: [],
}

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool.isRequired,
  error: PropTypes.bool,
  previousValue: PropTypes.string,
  parentTypingCallback: PropTypes.func.isRequired,
  styles: PropTypes.array,
}

export default InputField
