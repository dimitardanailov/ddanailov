import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Href = styled.a`
  color: ${props => props.color};

  cursor: pointer;
`

function NextJsLink({href, title, children, color}) {
  return (
    <Link href={href}>
      <Href title={title} color={color}>
        {children}
      </Href>
    </Link>
  )
}

NextJsLink.defaultProps = {
  color: 'inherit',
}

NextJsLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
  color: PropTypes.string,
}

export default NextJsLink
