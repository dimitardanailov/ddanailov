import PropTypes from 'prop-types'

import Item from '../Item'

function Layout({items}) {
  return (
    <>
      {items.map(item => (
        <Item width={item.width} height={item.height}></Item>
      ))}
    </>
  )
}

Layout.propTypes = {
  items: PropTypes.array,
}

export default Layout
