import PropTypes from 'prop-types'

import styled from 'styled-components'

import Item from '../Item'

const ListItemContainer = styled.section`
  position: relative;

  width: ${props => props.width}px;
  height: ${props => props.height}px;
`

const List = styled.ul`
  position: relative;

  list-style: none;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`

const ListItem = styled.li`
  position: absolute;

  top: ${props => props.top}px;
  left: ${props => props.left}px;
`

function Layout({items, containerHeight, containerWidth}) {
  const ListItems = items.map(function (item, i) {
    return (
      <ListItem key={item.id} top={item.top} left={item.left}>
        <Item width={item.width} height={item.height} id={item.id}>
          {i}
        </Item>
      </ListItem>
    )
  })

  return (
    <>
      <h2>Pinterest Layout</h2>

      <ListItemContainer height={containerHeight} width={containerWidth}>
        <List>{ListItems}</List>
      </ListItemContainer>
    </>
  )
}

Layout.propTypes = {
  items: PropTypes.array.isRequired,
  containerHeight: PropTypes.number,
  containerWidth: PropTypes.number,
}

export default Layout
