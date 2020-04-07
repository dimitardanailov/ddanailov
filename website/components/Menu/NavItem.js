import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Href = styled.a`
  color: inherit;
`

function NavItem({href, title, text}) {
  return (
    <Link href={href}>
      <Href title={title}>{text}</Href>
    </Link>
  )
}

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default NavItem
