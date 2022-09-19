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
  return (
    <Container>
      <SwitchTitle>{props.attribute.label}</SwitchTitle>
      <SwitcherLabel>
        <HiddenInput
          type="checkbox"
          checked={props.attribute.value}
          onChange={() => {
            setAttribute(!props.attribute.value);
          }}
        />
        <Switcher checked={props.attribute.value}>
          <SwitcherCircle>
            <Check />
          </SwitcherCircle>
        </Switcher>
      </SwitcherLabel>
    </Container>
  );
};
