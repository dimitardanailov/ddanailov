import React, {useEffect, useState} from 'react'

import PropTypes from 'prop-types'

import styled from 'styled-components'
import BasicField from '@ddanailov/styled/form/BasicField'

const Field = styled(BasicField)`
  position: relative;

  display: block;
`

function EmailField({id, placeholder, required, styles, parentTypingCallback}) {
  const [value, setValue] = useState('')

  useEffect(() => {
    parentTypingCallback(value)
  }, [required, value])

  return (
    <>
      <Field
        id={id}
        data-testid={id}
        type="email"
        placeholder={placeholder}
        css={styles}
        required={required}
        onChange={e => setValue(e.target.value)}
      />
    </>
  )
}

EmailField.defaultProps = {
  placeholder: '',
  required: false,
  styles: [],
}

EmailField.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool.isRequired,
  parentTypingCallback: PropTypes.func.isRequired,
  styles: PropTypes.array,
}

export default EmailField
