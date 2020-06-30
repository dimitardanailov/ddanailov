import PropTypes from 'prop-types'

function BlockQuote({children}) {
  return <>{children}</>
}

BlockQuote.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlockQuote
