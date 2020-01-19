import styled from 'styled-components';

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;

  height: 60px;  

  text-align: center;
`;

function MainFooter() {
  return (
    <Footer>
      <div>
        Contacts: <a
          href="mailto:dimityr.danailov@gmail.com"
          title="Javascript Consultant"
        >dimityr.danailov@gmail.com</a>
      </div>
      <div>Website: v1.6.0</div>
    </Footer>
  );
}

export default MainFooter;
