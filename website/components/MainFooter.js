import {register, unregister} from 'next-offline/runtime'
import styled from 'styled-components'

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;

  display: flex;
  justify-content: content;
  text-align: center;
  height: 70px;

  text-align: center;
`

const ContentWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  width: 100%;

  font-size: 1.4rem;
`

const ContentItem = styled.span`
  position: relative;

  display: block;
  width: 100%;
  color: #515151;
`

const ContentItemLink = styled.a`
  color: #515151;
`

class MainFooter extends React.Component {
  componentDidMount() {
    register()
  }
  componentWillUnmount() {
    unregister()
  }

  render() {
    return (
      <Footer>
        <ContentWrapper>
          <ContentItem>Contact me:</ContentItem>
          <ContentItem>
            <ContentItemLink
              href="mailto:dimityr.danailov@gmail.com"
              title="Javascript Consultant"
            >
              dimityr.danailov@gmail.com
            </ContentItemLink>
          </ContentItem>
        </ContentWrapper>
      </Footer>
    )
  }
}

export default MainFooter
