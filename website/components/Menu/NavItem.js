import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const Item = styled.li`
  padding: 0 0.5rem;
`

function NavItem({href, title, text}) {
  return (
    <Item>
      <Link href={href}>
        <a title={title}>{text}</a>
      </Link>
    </Item>
  )
}

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default NavItem
