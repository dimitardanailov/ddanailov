import PropTypes from 'prop-types'

import styled from 'styled-components'

import config from '@ddanailov/demos/PinterestLayout/config'

import Item from '@ddanailov/demos/PinterestLayout/components/Item'
import records from '@ddanailov/demos/PinterestLayout/dummy/records.json'

import {calcRowHeightParams} from '@ddanailov/demos/PinterestLayout/getLayoutParams'

const ListItemContainer = styled.section`
  position: relative;

  width: ${props => props.width}px;
  height: ${props => props.height}px;

  border: 4px solid blue;
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

function Layout({
  initialItems,
  initialContainerHeight,
  containerWidth,
  maximumRowItems,
  initialColumns,
}) {
  const [page, setPage] = React.useState(0)

  React.useEffect(() => {
    if (page === 0) return

    const paginationItems = records['page' + page]['items']
    const rowData = calcRowHeightParams(
      paginationItems,
      columns,
      containerHeight,
    )

    setColumns(rowData.columns)
    setContainerHeight(rowData.containerHeight)

    const listItems = items.concat(rowData.listItems)
    setItems(listItems)
  }, [page, setPage])

  const [containerHeight, setContainerHeight] = React.useState(
    initialContainerHeight,
  )
  const [columns, setColumns] = React.useState(initialColumns)
  const [items, setItems] = React.useState(initialItems)

  const loadMoreRecords = () => {
    if (page < config.pages) {
      setPage(page + 1)
    }
  }

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

      <div>Height: {containerHeight}</div>
      <div>Inital Height: {initialContainerHeight}</div>
      <div>Maximum items per row: {maximumRowItems}</div>
      <div>Columns: {JSON.stringify(columns)}</div>
      <div>Items: {items.length}</div>

      <div>
        <div>Page: {page}</div>
        <button onClick={loadMoreRecords}>Get More Records</button>
      </div>

      <ListItemContainer height={containerHeight} width={containerWidth}>
        <List>{ListItems}</List>
      </ListItemContainer>

      <div>
        <div>Page: {page}</div>
        <button onClick={loadMoreRecords}>Get More Records</button>
      </div>
    </>
  )
}

Layout.propTypes = {
  initialItems: PropTypes.array.isRequired,
  initialContainerHeight: PropTypes.number,
  containerWidth: PropTypes.number,
  maximumRowItems: PropTypes.number,
  initialColumns: PropTypes.object,
}

export default Layout
