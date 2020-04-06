import dynamic from 'next/dynamic'

import PropTypes from 'prop-types'

import ComponentLoader from '@ddanailov/components/ComponentLoader'

const HomePageDesktop = dynamic(() => import('./_Desktop'))
const HomePageMobile = dynamic(() => import('./_Mobile'))

const Switch = ({device}) => {
  return ComponentLoader(
    device,
    HomePageDesktop,
    HomePageMobile,
    HomePageMobile,
  )
}

Switch.defaultProps = {
  device: null,
}

Switch.propTypes = {
  device: PropTypes.string.isRequired,
}

export default Switch
