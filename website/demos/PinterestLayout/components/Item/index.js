import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;

  display: flex;
  border: 1px solid red;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`

function Item({width, height, number}) {
  return (
    <>
      <Wrapper width={width} height={height}>
        Item - {number}
      </Wrapper>
    </>
  )
}

Item.defaultProps = {
  width: 100,
  height: 100,
}

Item.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  number: PropTypes.number,
}

export default Item
