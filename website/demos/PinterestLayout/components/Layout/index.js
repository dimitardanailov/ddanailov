import PropTypes from 'prop-types'

import Item from '../Item'

function Layout({items}) {
  return (
    <>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Item width={item.width} height={item.height}></Item>
          </li>
        ))}
      </ul>
    </>
  )
}

Layout.propTypes = {
  items: PropTypes.array,
}

export default Layout
