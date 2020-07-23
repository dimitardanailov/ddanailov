import TargetBlank from '@ddanailov/components/TargetBlankLink'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import BlockQuote from './BlockQuote'

const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
`

function BlockQuoteComponent({children, title, href}) {
  return (
    <Wrapper>
      <BlockQuote>{children}</BlockQuote>
      Source:{' '}
      <TargetBlank title={title} href={href}>
        {title}
      </TargetBlank>
    </Wrapper>
  )
}

BlockQuoteComponent.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

export default BlockQuoteComponent
