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

export const Switch = ({ isSelected, setValue, title, disabled, t }) => {
  // const [attribute, setAttribute] = useAttribute(props.attribute.name);
  // if (!attribute) return <></>;

  // const isChecked = value === 'On';

  return (
    <Container>
      {!!title && <SwitchTitle>{t(title)}</SwitchTitle>}
      <SwitcherLabel>
        <HiddenInput
          disabled={disabled}
          type="checkbox"
          checked={isSelected}
          onChange={() => {
            // if (disabled) return;
            setValue(!isSelected);
          }}
        />
        <Switcher checked={isSelected} disabled={disabled}>
          <SwitcherCircle>
            <Check />
          </SwitcherCircle>
        </Switcher>
      </SwitcherLabel>
    </Container>
  );
};
