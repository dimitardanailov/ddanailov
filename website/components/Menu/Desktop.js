import styled from 'styled-components'

import items from 'data/menu-items'
import NavItem from './NavItem'

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;

  font-size: 2rem;
  justify-content: center;
`

function DesktopMenu() {
  return (
    <nav>
      <List>
        {items.map((item, i) => (
          <NavItem
            key={i}
            href={item.href}
            title={item.title}
            text={item.text}
          />
        ))}
      </List>
    </nav>
  )
}

export default DesktopMenu
