import dynamic from 'next/dynamic'

import PropTypes from 'prop-types'

const HomePageDesktop = dynamic(() => import('./_Desktop'))
const HomePageMobile = dynamic(() => import('./_Mobile'))

const Switch = ({device}) => {
  switch (device) {
    case 'desktop':
      return <HomePageDesktop />
    case 'tablet':
      return <HomePageMobile />
    case 'mobile':
      return <HomePageMobile />
    default:
      return null
  }
}

Switch.defaultProps = {
  device: null,
}

Switch.propTypes = {
  device: PropTypes.string.isRequired,
}

export default Switch
