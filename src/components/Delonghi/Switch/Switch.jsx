import React from 'react';
// import { useAttribute } from '@threekit-tools/treble';
import {
  HiddenInput,
  Switcher,
  SwitcherCircle,
  SwitchTitle,
  SwitcherLabel,
  Container,
} from './Switch.styled';
import Check from '../../../assets/svg/Check';

export const Switch = ({ value, setValue, isDotPattern }) => {
  // const [attribute, setAttribute] = useAttribute(props.attribute.name);
  // if (!attribute) return <></>;

  const isChecked = value === 'On';

  return (
    <Container>
      {!isDotPattern && <SwitchTitle>Metal Tag</SwitchTitle>}
      <SwitcherLabel>
        <HiddenInput
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            setValue(isChecked ? 'Off' : 'On');
          }}
        />
        <Switcher checked={isChecked}>
          <SwitcherCircle>
            <Check />
          </SwitcherCircle>
        </Switcher>
      </SwitcherLabel>
    </Container>
  );
};
