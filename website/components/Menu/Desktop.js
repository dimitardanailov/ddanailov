import styled from 'styled-components'

import items from 'data/menu-items'
import NavItem from './NavItem'

import themes from 'styles/colors/light'

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;

  font-size: 2rem;
  justify-content: center;
`

const Item = styled.li`
  padding: 0 0.5rem;
  color: ${themes.secondary.main};
`

function DesktopMenu() {
  return (
    <nav>
      <List>
        {items.map((item, i) => (
          <Item key={i}>
            <NavItem href={item.href} title={item.title} text={item.text} />
          </Item>
        ))}
      </List>
    </nav>
  )
}

export default DesktopMenu
