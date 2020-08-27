import PropTypes from 'prop-types'

import styled from 'styled-components'

import Item from '../Item'

const ListItemContainer = styled.section`
  position: relative;

  border: 4px solid blue;
  width: 1000px;
  height: ${props => props.height}px;
`

const List = styled.ul`
  position: relative;

  list-style: none;
  border: 3px solid green;
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

function findMinimumHeight(columns) {
  const keys = Object.keys(columns)
  const output = {
    height: Number.MAX_SAFE_INTEGER,
    column: 0,
  }

  keys.forEach(key => {
    if (output.height > columns[key]) {
      output.height = columns[key]
      output.column = parseInt(key)
    }
  })

  return output
}

function Layout({items}) {
  let firstRowItems = 0
  const maximumRowItems = 5
  let top = 0
  let left = 0
  let columns = {}
  let containerHeight = 0

  const ListItems = items.map(function (item, i) {
    if (firstRowItems === maximumRowItems) {
      const output = findMinimumHeight(columns)
      const key = output.column
      left = key * item.width
      top = output.height

      const columnHeight = top + item.height
      columns[key] = columnHeight

      if (columnHeight > containerHeight) {
        containerHeight = columnHeight
      }
    }

    if (firstRowItems < maximumRowItems) {
      left = firstRowItems * item.width
      columns[i] = item.height
      firstRowItems++

      if (item.height > containerHeight) {
        containerHeight = item.height
      }
    }

    return (
      <ListItem key={item.id} top={top} left={left}>
        <Item width={item.width} height={item.height}></Item>
      </ListItem>
    )
  })

  return (
    <>
      <h2>Pinterest Layout</h2>

      <ListItemContainer height={containerHeight}>
        <List>{ListItems}</List>
      </ListItemContainer>
    </>
  )
}

Layout.propTypes = {
  items: PropTypes.array,
}

export default Layout
