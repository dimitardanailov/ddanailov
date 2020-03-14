import * as React from 'react'

import styled from 'styled-components'

import avatar from './ddanailov-avatar.jpg'

import {useMachine} from '@xstate/react'
// import deviceMachine from '../../machines/deviceMachine'

const Wrapper = styled.img`
  position: relative;

  display: block;
  width: 240px;
  height: 180px;

  border: 0.2rem solid #fff;
  border-radius: 12.5%;
`

function Image() {
  const title = 'Javascript consultant'

  return (
    <Wrapper src={avatar} title={title} alt={title} width="240" height="180" />
  )
}

function Avatar() {
  // const [current, send] = useMachine(deviceMachine)
  // console.log(current)
  // const device = deviceMachine.initialState.value

  /*
  React.useEffect(() => {
    if (device === 'desktop' || device === 'tablet') {
      return Image()
    } else {
      return null
    }
  }) */

  return null
}

export default Avatar
