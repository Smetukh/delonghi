import React, { useState } from 'react';
import { useAttribute } from '@threekit-tools/treble';
import {
  Input,
  SubmitButton,
  InputTitle,
  InputWrapper,
  SubTitle,
  Title,
  InputButtonWrapper,
} from '../TextInput/TextInput.styled';
import { inputTextMaxLength } from '../../../constants';

export const TextInput = (props) => {
  const [attribute, setAttribute] = useAttribute('text');
  const [inputValue, setInputValue] = useState(attribute.value);
  // const [, setInputFocus] = useAttribute('Write Text');
  const [, setInputFocus] = useAttribute('Camera Text');
  if (!attribute) return <></>;
  const [hasWarning, setWarning] = useState(false);
  const [has30Characters, set30Characters] = useState(false);

  const onSubmitClick = () => {
    let warningValue = false;
    inputValue.split(' ').forEach((word) => {
      if (props.obsceneList.includes(word.toLowerCase())) warningValue = true;
    });
    if (warningValue) {
      setWarning(warningValue);
      setAttribute('');
      return;
    }
    // if (inputValue.length > inputTextLength) {
    //   set30Characters(true);
    //   return;
    // }
    setAttribute(inputValue);
    setInputFocus('Fixed');
  };

  const onHandleChange = (e) => {
    const targetValue = e.target.value;
    if (hasWarning) setWarning(false);

    if (targetValue.length > inputTextMaxLength) set30Characters(true);
    else if (has30Characters === true) set30Characters(false);
    setInputValue(targetValue);
  };

  return (
    <InputWrapper>
      <InputTitle>Add text:</InputTitle>
      <InputButtonWrapper>
        <Input
          autoFocus
          onFocus={() => setInputFocus('Fixed')}
          // onBlur={() => setInputFocus('Free')}
          type="text"
          id="message"
          value={inputValue}
          onChange={onHandleChange}
          error={hasWarning}
        />
        <SubmitButton disabled={has30Characters} onClick={onSubmitClick}>
          Submit
        </SubmitButton>
      </InputButtonWrapper>
      {hasWarning && (
        <SubTitle>
          *Some of the words that you are submitting are concidered as a profane
          language. please remove them and try again
        </SubTitle>
      )}
      {has30Characters && (
        <SubTitle>*Text cannot be longer than 30 characters</SubTitle>
      )}
    </InputWrapper>
  );
};
