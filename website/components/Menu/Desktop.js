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
  justify-content: left;
`

const Item = styled.li`
  margin-right: 1rem;
  color: ${themes.secondary.main};

  cursor: pointer;
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
