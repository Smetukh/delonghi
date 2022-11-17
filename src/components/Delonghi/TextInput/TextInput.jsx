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
import { inputTextMaxLength } from '../../../constants';

export const TextInput = ({ t, obsceneList }) => {
  const [attribute, setAttribute] = useAttribute('text');
  const [inputValue, setInputValue] = useState(attribute.value);
  const [, setInputFocus] = useAttribute('Camera Text');
  if (!attribute) return <></>;
  const [hasWarning, setWarning] = useState(false);
  const [has30Characters, set30Characters] = useState(false);

  const onSubmitClick = () => {
    let warningValue = false;
    inputValue.split(' ').forEach((word) => {
      if (obsceneList.includes(word.toLowerCase())) warningValue = true;
    });
    if (warningValue) {
      setWarning(warningValue);
      setAttribute('');
      return;
    }
    setAttribute(inputValue);
    setInputFocus('Fixed');
  };

  const onHandleChange = (e) => {
    const targetValue = e.target.value;
    if (hasWarning) setWarning(false);
    if (targetValue.length > inputTextMaxLength) set30Characters(true);
    else if (has30Characters === true) set30Characters(false);
    setInputValue(targetValue.slice(0, 30));
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) onSubmitClick();
  };
  return (
    <InputWrapper>
      <InputTitle>{t('addText')}</InputTitle>
      <InputButtonWrapper>
        <Input
          autoFocus
          onFocus={() => setInputFocus('Fixed')}
          // onBlur={() => setInputFocus('Free')}
          onKeyDown={onKeyDown}
          type="text"
          id="message"
          value={inputValue}
          onChange={onHandleChange}
          error={hasWarning}
        />
        <SubmitButton
          // disabled={has30Characters}
          onClick={onSubmitClick}
        >
          {t('submit')}
        </SubmitButton>
      </InputButtonWrapper>
      {hasWarning && <SubTitle>{t('profaneLanguage')}</SubTitle>}
      {has30Characters && <SubTitle>{t('longer30Char')}</SubTitle>}
    </InputWrapper>
  );
};
