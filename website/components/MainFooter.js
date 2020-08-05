import dynamic from 'next/dynamic'

import {register, unregister} from 'next-offline/runtime'
import styled from 'styled-components'

import {footerSize} from 'styles/_sizes'

const SocialIcons = dynamic(() => import('@ddanailov/components/SocialIcons'))

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: content;
  text-align: center;
  height: ${footerSize};

  text-align: center;
`

const ContentWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  width: 100%;
  margin-bottom: 0.5rem;

  font-size: 1.2rem;
  font-weight: bold;
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
        <SocialIcons />
      </Footer>
    )
  }
}

export default MainFooter
