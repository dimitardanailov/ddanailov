import styled from 'styled-components';

const Footer = styled.footer`
  position: relative;

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
      <div>Website: v1.5.0</div>
    </Footer>
  );
}

export default MainFooter;
