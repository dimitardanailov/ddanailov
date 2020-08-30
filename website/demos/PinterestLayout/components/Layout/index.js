import PropTypes from 'prop-types'

import styled from 'styled-components'

import Item from '@ddanailov/demos/PinterestLayout/components/Item'
import records from '@ddanailov/demos/PinterestLayout/dummy/records.json'

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

function Layout({
  items,
  initialContainerHeight,
  containerWidth,
  maximumRowItems,
}) {
  const [page, setPage] = React.useState(1)
  const [containerHeight, setContainerHeight] = React.useState(
    initialContainerHeight,
  )

  React.useEffect(() => {
    if (page > 1 && page < 9) {
      const paginationItems = records['page' + page]
      console.log('paginationItems', paginationItems)
    }
  }, [page, setPage])

  const loadMoreRecords = () => {
    setPage(page + 1)
    setContainerHeight(containerHeight + 4000)
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

      <div>
        <div>Page: {page}</div>
        <button onClick={loadMoreRecords}>Get More Records</button>
      </div>

      <ListItemContainer height={containerHeight} width={containerWidth}>
        <List>{ListItems}</List>
      </ListItemContainer>
    </>
  )
}

Layout.propTypes = {
  items: PropTypes.array.isRequired,
  initialContainerHeight: PropTypes.number,
  containerWidth: PropTypes.number,
  maximumRowItems: PropTypes.number,
}

export default Layout
