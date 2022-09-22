import React from 'react';
import { useAttribute } from '@threekit-tools/treble';
import {
  HiddenInput,
  Switcher,
  SwitcherCircle,
  SwitchTitle,
  SwitcherLabel,
  Container,
} from './Switch.styled';
import Check from '../../../assets/svg/Check';

export const Switch = (props) => {
  const [attribute, setAttribute] = useAttribute(props.attribute.name);
  if (!attribute) return <></>;

  const isChecked = attribute.value === 'On';

  return (
    <Container>
      <SwitchTitle>{props.attribute.label}</SwitchTitle>
      <SwitcherLabel>
        <HiddenInput
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            setAttribute(isChecked ? 'Off' : 'On');
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
