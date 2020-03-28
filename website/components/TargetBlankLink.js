import PropTypes from 'prop-types'

import Link from '@ddanailov/styled/Link'

function TargetBlankLink({children, href, title}) {
  return (
    <Link href={href} target="_blank" title={title} rel="noopener">
      {children}
    </Link>
  )
}

TargetBlankLink.prototypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default TargetBlankLink
