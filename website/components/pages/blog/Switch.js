import dynamic from 'next/dynamic'

import PropTypes from 'prop-types'

import ComponentLoader from '@ddanailov/components/ComponentLoader'

const BlogPageDesktop = dynamic(() => import('./_Desktop'))
const BlogPageMobile = dynamic(() => import('./_Mobile'))

const Switch = ({device}) => {
  return ComponentLoader(
    device,
    BlogPageDesktop,
    BlogPageMobile,
    BlogPageMobile,
  )
}

Switch.defaultProps = {
  device: null,
}

Switch.propTypes = {
  device: PropTypes.string.isRequired,
}

export default Switch
