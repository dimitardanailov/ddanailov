import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
`;

const ContactFormTitle = styled.span`
  position: relative;

  display: block;
  margin: .2rem 0;
  
  font-size: 1.4rem;
  text-align: center;
`;

const FieldSet = styled.fieldset`
  position: relative;

  display: block;
  border: none;
  margin: 0.25rem;
`;

const InputBox = styled.input`
  position: relative;

  display: block;
  width: 100%;
  padding: 5px 0;
  border-radius: .25rem;
  text-indent: .2em;
  font-size: .9rem;
`;

const TextArea = styled.textarea`
  position: relative;

  display: block;
  width: 100%;
  padding: 20px 0;

  border-radius: 1rem;
  font-size: .9rem;
  text-indent: .2em;
`;

const FieldSetButton = styled.fieldset`
  position: relative;

  display: flex;
  border: none;
`;

const Button = styled.button`
  position: relative;

  display: block;
  width: 40%;
  margin: 0 auto;  
  padding: .45rem;

  font-size: 1rem;
  background-color: #ccc;
  border-radius: .2rem; 
`;

function ContactForm() {
  const onclickLister = e => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <ContactFormTitle>I want to meet with you</ContactFormTitle>

      <FieldSet>
        <InputBox type="text" placeholder="What's your name" />
      </FieldSet>

      <FieldSet>
        <InputBox type="text" placeholder="Your email address" />
      </FieldSet>

      <FieldSet>
        <InputBox type="text" placeholder="Message title or subject" />
      </FieldSet>

      <FieldSet>
        <TextArea placeholder="How I can help you ?" />
      </FieldSet>

      <FieldSetButton>
        <Button onClick={onclickLister}>Contact me!!!</Button>  
      </FieldSetButton>
    </Wrapper>
  );
}

export default ContactForm;
