import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;

  display: flex;
  border: 1px solid red;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: ${props => props.bgColor};
  color: #fff;
  justify-content: center;
  align-items: center;
`

function Item({width, height, id, bgColor}) {
  return (
    <>
      <Wrapper width={width} height={height} bgColor={bgColor}>
        {id}
      </Wrapper>
    </>
  )
}

Item.defaultProps = {
  width: 100,
  height: 100,
  backgroundColor: 'red',
}

Item.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  id: PropTypes.string,
  backgroundColor: PropTypes.string,
}

export default Item
