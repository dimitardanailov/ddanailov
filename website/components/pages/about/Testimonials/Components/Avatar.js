import PropTypes from '@ddanailov/components/Pages/about/Testimonials/Components/prop-types'

import styled from '@ddanailov/components/Pages/about/Testimonials/Components/styled-components'

const Frame = styled.div`
  position: relative;

  display: block;
  width: 200px;
  height: 200px;

  border: 0.3rem solid #000;
  border-radius: 100%;
`

const Image = styled.img`
  position: relative;

  border-radius: 100%;
`

function Avatar({href, src, title}) {
  return (
    <Frame>
      <a href={href} title={title} rel="noopener" target="_blank">
        <Image src={src} alt={title} title={title} width="200" height="200" />
      </a>
    </Frame>
  )
}

Avatar.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}

export default Avatar
