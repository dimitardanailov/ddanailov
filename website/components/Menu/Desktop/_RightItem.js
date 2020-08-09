import styled from 'styled-components'
import NightShiftModeToggleButton from '@ddanailov/components/NightShiftMode/ToggleButton'

const NavMenu = styled.nav`
  position: relative;

  display: inline-block;
`

function RightItem() {
  return <NightShiftModeToggleButton />
}

export default RightItem
