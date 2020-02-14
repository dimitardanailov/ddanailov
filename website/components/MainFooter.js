import styled from 'styled-components'

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;

  display: flex;
  justify-content: content;
  text-align: center;
  height: 60px;

  text-align: center;
`

const ContentWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  width: 100%;
`

function MainFooter() {
  return (
    <Footer>
      <ContentWrapper>
        Contacts:{' '}
        <a
          href="mailto:dimityr.danailov@gmail.com"
          title="Javascript Consultant"
        >
          dimityr.danailov@gmail.com
        </a>
      </ContentWrapper>
    </Footer>
  )
}

export default MainFooter
