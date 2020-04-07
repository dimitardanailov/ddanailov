import styled from 'styled-components'

import items from 'data/menu-items'
import NavItem from './NavItem'

import themes from 'styles/colors/light'

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;

  font-size: 1.4rem;
`

const Item = styled.li`
  text-align: center;
  padding: 0.25rem 0;

  background-color: ${themes.secondary.main};
  color: #fff;
`

function MobileMenu() {
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

export default MobileMenu
