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

function Avatar() {
  const title = 'Javascript consultant'

  return (
    <Wrapper src={avatar} title={title} alt={title} width="240" height="180" />
  )
}

export default Avatar
