import styled from 'styled-components'

import LeftItem from './_LeftItem'
import NightShiftModeToggleButton from '@ddanailov/components/NightShiftMode/ToggleButton'

const NavMenu = styled.nav`
  position: relative;

  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

function Menu() {
  return (
    <NavMenu>
      <LeftItem />
      <NightShiftModeToggleButton />
    </NavMenu>
  )
}

export default Menu
