import PropTypes from 'prop-types'

import styled from 'styled-components'

import Loader from '@ddanailov/styled/loaders/BasicLoader'

const Wrapper = styled.section`
  position: relative;

  display: flex;
  justify-content: center;
`

function FormLoader({styles}) {
  return (
    <Wrapper css={styles}>
      <Loader />
    </Wrapper>
  )
}

FormLoader.defaultProps = {
  styles: [],
}

FormLoader.propTypes = {
  styles: PropTypes.array,
}

export default FormLoader
