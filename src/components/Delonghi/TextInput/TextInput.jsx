import React, { useState } from 'react';
import { useAttribute } from '@threekit-tools/treble';
import {
  Input,
  SubmitButton,
  InputTitle,
  InputWrapper,
} from '../TextInput/TextInput.styled';

export const TextInput = (props) => {
  const [attribute, setAttribute] = useAttribute('text');
  const [, setInputFocus] = useAttribute('Write Text');
  if (!attribute) return <></>;
  const [hasWarning, setWarning] = useState(false);

  console.log('qqq attribute ===', attribute);
  return (
    <InputWrapper>
      <InputTitle>{props.title}</InputTitle>
      {hasWarning && <h4>WARNING!!!</h4>}
      <Input
        onFocus={() => setInputFocus('On')}
        onBlur={() => setInputFocus('Off')}
        type="text"
        id="message"
        onChange={(e) => {
          const sentence = e.target.value;
          setWarning(false);
          sentence.split(' ').forEach((word) => {
            if (props.obsceneList.includes(word.toLowerCase()))
              setWarning(true);
          });
          return setAttribute(sentence);
        }}
      />
      <SubmitButton>Submit</SubmitButton>
    </InputWrapper>
  );
};
