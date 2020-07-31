import dynamic from 'next/dynamic'

import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: flex-start;

  width: 100%;
  height: 315px;
`

function Iframe({url}) {
  const YoutubeIframe = dynamic(() => import('./YoutubeIframe'))

  return (
    <Wrapper>
      <YoutubeIframe url={url} />
    </Wrapper>
  )
}

Iframe.propTypes = {
  url: PropTypes.string.isRequired,
}

export default Iframe
