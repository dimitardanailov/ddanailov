import BasicButton from '@ddanailov/styled/buttons/BasicButton'
import Slogan from '@ddanailov/styled/Slogan'

import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  flex-direction: center;
  justify-content: space-end;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`

const StyledSlogan = styled(Slogan)`
  margin-top: 0 auto;
`

const StyledButton = styled(BasicButton)`
  margin-left: auto;
`

const PageHeaderContainer = ({refreshMethod}) => {
  const onClickHandler = () => {
    refreshMethod()
  }

  return (
    <Wrapper>
      <StyledSlogan>Coins:</StyledSlogan>
      <StyledButton
        onClick={onClickHandler}
        type="button"
        fontSize="1.2rem"
        padding="1rem 2rem"
      >
        Refresh
      </StyledButton>
    </Wrapper>
  )
}

export default PageHeaderContainer
