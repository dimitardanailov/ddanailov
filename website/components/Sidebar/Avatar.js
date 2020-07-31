import React, {useEffect} from 'react'

import styled from 'styled-components'

import avatar from './dimitar-danailov-javascript-consultant.png'

const Wrapper = styled.img`
  position: relative;

  display: block;
  width: 240px;
  height: 240px;

  border: 0.2rem solid #fff;
  border-radius: 100%;
`

/**
 * Resources:
 * - https://davidwalsh.name/detect-iphone
 */

function isIphone() {
  return window.navigator.userAgent.match(/iPhone/i)
}

function isPad() {
  return window.navigator.userAgent.match(/iPad/i)
}

function isAndroid() {
  return window.navigator.userAgent.match(/Android/i)
}

function detectDevice() {
  if (isPad()) {
    return 'tablet'
  }

  if (isIphone() || isAndroid()) {
    return 'mobile'
  }

  return 'desktop'
}

function Image() {
  const title = 'Javascript consultant'

  return (
    <Wrapper src={avatar} title={title} alt={title} width="240" height="240" />
  )
}

function Avatar() {
  const [device, setDevice] = React.useState('')

  useEffect(() => {
    const tempDevice = detectDevice()
    setDevice(tempDevice)
  }, [device])

  return device === 'desktop' ? Image() : null
}

export default Avatar
