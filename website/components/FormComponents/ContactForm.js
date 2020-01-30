import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
`;

const FieldSet = styled.fieldset`
  position: relative;

  display: block;
  border: none;
  margin: 0.25rem;
`;

const InputBox = styled.input`
  position: relative;

  width: 100%;
`;

const TextArea = styled.textarea`
  position: relative;

  display: block;
  width: 100%;
  padding: 20px 0;

  border-radius: 1rem;
`;

function ContactForm() {
  const onclickLister = e => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <FieldSet>
        <InputBox type="text" placeholder="What's your name" />
      </FieldSet>

      <FieldSet>
        <InputBox type="text" placeholder="Your email address" />
      </FieldSet>

      <FieldSet>
        <InputBox type="text" placeholder="Subject" />
      </FieldSet>

      <FieldSet>
        <TextArea />
      </FieldSet>

      <button onClick={onclickLister}>Contact me!!!</button>
    </Wrapper>
  );
}

export default ContactForm;
