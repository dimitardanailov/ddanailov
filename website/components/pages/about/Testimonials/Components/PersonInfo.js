import PropTypes from '@ddanailov/components/Pages/about/Testimonials/Components/prop-types'

import styled from '@ddanailov/components/Pages/about/Testimonials/Components/styled-components'

const Wrapper = styled.span`
  position: relative;

  font-style: italic;
  display: inline-block;
`

function PersonInfo({children}) {
  return (
    <Wrapper>
      {'-- '}
      {children}
    </Wrapper>
  )
}

PersonInfo.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PersonInfo
