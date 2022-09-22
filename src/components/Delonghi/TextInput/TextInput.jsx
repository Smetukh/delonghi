import React, { useState } from 'react';
import { useAttribute } from '@threekit-tools/treble';
import {
  Input,
  SubmitButton,
  InputTitle,
  InputWrapper,
  SubTitle,
  InputButtonWrapper,
} from '../TextInput/TextInput.styled';

export const TextInput = (props) => {
  const [attribute, setAttribute] = useAttribute('text');
  const [inputValue, setInputValue] = useState('');
  const [, setInputFocus] = useAttribute('Write Text');
  if (!attribute) return <></>;
  const [hasWarning, setWarning] = useState(false);

  const onSubmitClick = () => {
    setWarning(false);
    inputValue.split(' ').forEach((word) => {
      if (props.obsceneList.includes(word.toLowerCase())) {
        setWarning(true);
        return;
      } else {
        return setAttribute(inputValue);
      }
    });
  };

  const onHandleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <InputWrapper>
      {/* <InputTitle>{props.title}</InputTitle> */}
      <SubTitle>Add text:</SubTitle>
      {/* {hasWarning && <h4>WARNING!!!</h4>} */}
      <InputButtonWrapper>
        <Input
          onFocus={() => setInputFocus('On')}
          // onBlur={() => setInputFocus('Off')}
          type="text"
          id="message"
          value={inputValue}
          onChange={onHandleChange}
          error={hasWarning}
        />
        <SubmitButton onClick={onSubmitClick}>Submit</SubmitButton>
      </InputButtonWrapper>
    </InputWrapper>
  );
};
