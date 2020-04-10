/**
 * Idea: https://codepen.io/megatroncoder/pen/Xqeyva
 */

/**
 * Usage:
 * 
 * <Blob
    width="80%"
    size="40px"
    height="60px"
    rightBackground="#0ff"
    leftBlobBackground="#fff"
    />
 */

import React from 'react'

import PropTypes from 'prop-types'

import styled from 'styled-components'

import {left, right} from '../keyframe'

const Wrapper = styled.section`
  position: relative;

  display: flex;
  justify-content: center;
  margin: 1rem auto;

  width: ${props => props.width};
  height: ${props => props.height};
`

const Centered = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 100%;
  height: ${props => props.height};

  transform: translate(-50%, -50%);
  background: #fff;
  filter: blur(10px) contrast(20);
`

const BasicBlob = styled.div`
  position: absolute;

  width: ${props => props.size};
  height: ${props => props.size};
  background-color: #fff;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const LeftBlob = styled(BasicBlob)`
  left: 20%;
  animation: ${left} 2.5s ease infinite;
  background-color: ${props => props.backgroundColor};

  border: 0.9rem solid #f00;
`

const RightBlob = styled(BasicBlob)`
  left: 80%;
  animation: ${right} 2.5s ease infinite;
  background-color: ${props => props.backgroundColor};
`

function Blob({width, size, height, leftBlobBackground, rightBackground}) {
  return (
    <>
      <Wrapper height={height} width={width}>
        <Centered height={height}>
          <LeftBlob size={size} backgroundColor={leftBlobBackground} />
          <RightBlob size={size} backgroundColor={rightBackground} />
        </Centered>
      </Wrapper>
    </>
  )
}

Blob.defaultProps = {
  size: '7rem',
  leftBlobBackground: '#000',
  rightBackground: '#ff0000',
  height: '100px',
  width: '40%',
}

Blob.propTypes = {
  size: PropTypes.string,
  leftBlobBackground: PropTypes.string,
  rightBackground: PropTypes.string,
  height: PropTypes.string,
}

export default Blob
