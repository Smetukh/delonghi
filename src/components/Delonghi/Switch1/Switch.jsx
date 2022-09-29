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

export const Switch = ({ isSelected, setValue, title }) => {
  // const [attribute, setAttribute] = useAttribute(props.attribute.name);
  // if (!attribute) return <></>;

  // const isChecked = value === 'On';

  return (
    <Container>
      {!!title && <SwitchTitle>{title}</SwitchTitle>}
      <SwitcherLabel>
        <HiddenInput
          type="checkbox"
          checked={isSelected}
          onChange={() => {
            setValue(!isSelected);
          }}
        />
        <Switcher checked={isSelected}>
          <SwitcherCircle>
            <Check />
          </SwitcherCircle>
        </Switcher>
      </SwitcherLabel>
    </Container>
  );
};
