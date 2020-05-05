import PropTypes from 'prop-types'

/**
 * Switch component helps code spliting
 *
 * More about nextjs and code spliting:
 * https://web.dev/code-splitting-with-dynamic-imports-in-nextjs/
 *
 * Note:
 * The current design doesn't support Tablet version
 *
 * @param {string} device
 * @param {Object} DesktopPage
 * @param {Object} MobilePage
 */
const Switch = ({device, DesktopPage, MobilePage}) => {
  switch (device) {
    case 'desktop':
      return <DesktopPage />
    case 'tablet':
      return <MobilePage />
    case 'mobile':
      return <MobilePage />
    default:
      return null
  }
}

Switch.defaultProps = {
  device: null,
}

Switch.propTypes = {
  device: PropTypes.string.isRequired,
  DesktopPage: PropTypes.object.isRequired,
  MobilePage: PropTypes.object.isRequired,
}

export default Switch
