import React, {useEffect} from 'react'

import styled from 'styled-components'

import avatar from './ddanailov-avatar.jpg'

const Wrapper = styled.img`
  position: relative;

  display: block;
  width: 240px;
  height: 180px;

  border: 0.2rem solid #fff;
  border-radius: 12.5%;
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
    <Wrapper src={avatar} title={title} alt={title} width="240" height="180" />
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
