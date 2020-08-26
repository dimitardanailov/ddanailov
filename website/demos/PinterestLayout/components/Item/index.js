import PropTypes from 'prop-types'

function Item({width, height}) {
  console.log('width', width)
  console.log('height', height)
  return <>Item</>
}

Item.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}

export default Item
